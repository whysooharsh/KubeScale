import { spawn } from 'child_process';

export const pruneDockerImages = () => {
    return new Promise((resolve) => {
        const pruneProcess = spawn('docker', ['image', 'prune', '-f']);

        pruneProcess.on('close', () => {
            resolve();
        });

        pruneProcess.on('error', () => {
            resolve(); // Fail silently as this is just a background cleanup task
        });
    });
};
