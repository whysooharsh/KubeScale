import { spawn } from 'child_process';

export const buildDockerImage = (projectRoot, imageName, res) => {
    return new Promise((resolve, reject) => {
        const buildProcess = spawn('docker', ['build', '-t', imageName, '.'], {
            cwd: projectRoot,
            stdio: 'ignore'
        });

        buildProcess.on('close', (code) => {
            if (code === 0) {
                res.write(JSON.stringify({ progress: 60, message: "Built Docker Image" }) + '\n');
                resolve();
            } else {
                reject(new Error("Docker Build Failed"));
            }
        });

        buildProcess.on('error', (err) => {
            reject(err);
        });
    });
};