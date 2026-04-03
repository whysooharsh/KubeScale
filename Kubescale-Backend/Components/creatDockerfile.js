import fs from "fs"
import path from "path"

export const createDockerFile = (rootFolder, res) => {
    const dockerfilePath = path.join(rootFolder, "Dockerfile");

    if (fs.existsSync(dockerfilePath)) {
        return;
    }

    let buildDir = "dist";
    const packageJsonPath = path.join(rootFolder, "package.json");

    if (fs.existsSync(packageJsonPath)) {
        try {
            const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
            const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };

            if (deps["react-scripts"]) {
                buildDir = "build";
            } else if (deps["next"]) {
                buildDir = "out";
            }
        } catch (error) {
            buildDir = "dist";
        }
    }

    const content = `
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/${buildDir} /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
    `;

    fs.writeFileSync(dockerfilePath, content.trim());
    res.write(JSON.stringify({ progress: 40, message: "Generated Optimized Dockerfile" }) + '\n');
}