import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { unzipFile } from '../Components/unzipService.js';
import { createDockerFile } from '../Components/creatDockerfile.js';
import { buildDockerImage } from '../Components/buildDockerImage.js';
import { runDockerContainer } from '../Components/runDockerContainer.js';
import { exposeApp } from '../Components/exposeApp.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: "uploads/temp/zips",
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({
    storage,
    limits: { fileSize: 50 * 1024 * 1024 }
});

router.post("/deploy", upload.single("projectZip"), async (req, res) => {
    let extractedFolder = "";

    try {
        res.write(JSON.stringify({ progress: 15, message: "Uploaded Application Artifacts" }) + "\n");
        extractedFolder = await unzipFile(req.file.path, res);
        const rootFolder = path.join(extractedFolder, path.basename(req.file.originalname, ".zip"));

        createDockerFile(rootFolder, res);

        const safeName = path.basename(req.file.originalname, ".zip").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const imageName = `${safeName}_${Date.now()}`;

        await buildDockerImage(rootFolder, imageName, res);

        const { url } = await runDockerContainer(imageName, res);
        const port = url.split(":")[2];
        const publicUrl = await exposeApp(port);

        if (fs.existsSync(extractedFolder)) {
            fs.rmSync(extractedFolder, { recursive: true, force: true });
        }

        res.write(JSON.stringify({ progress: 100, message: "Application Deployed", link: publicUrl.url }) + '\n');
    } catch (err) {
        if (extractedFolder && fs.existsSync(extractedFolder)) {
            fs.rmSync(extractedFolder, { recursive: true, force: true });
        }
        const errorMessage = err.message ? err.message : "Error Occured, Try Again";
        res.status(400).write(JSON.stringify({ progress: 0, message: errorMessage }) + '\n');
    }
    res.end();
});

export default router;