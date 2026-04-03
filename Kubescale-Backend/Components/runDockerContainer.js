import { spawn } from "child_process";
import getPort from "get-port";

export const runDockerContainer = async (imageName, res) => {
    const port = await getPort({ port: 3000 });

    return new Promise((resolve, reject) => {
        const runProcess = spawn("docker", ["run", "-d", "--rm", "-p", `${port}:80`, imageName]);
        let containerId = "";

        runProcess.stdout.on("data", (data) => {
            containerId += data.toString();
        });

        runProcess.on("close", (code) => {
            if (code === 0) {
                res.write(JSON.stringify({ progress: 90, message: "Deployed Docker Container" }) + '\n');
                resolve({ containerId: containerId.trim(), url: `http://localhost:${port}` });
            } else {
                reject(new Error("Docker run failed"));
            }
        });

        runProcess.on("error", (err) => {
            reject(err);
        });
    });
};
