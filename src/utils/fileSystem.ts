import * as fs from 'fs';
import * as path from 'path';

export const createFolder = (base: string, folders: string[]) => {
    folders.forEach(folder => {
        const folderPath = path.join(base, folder);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
    });
};

export const createFileWithContent = (filePath: string, content: string) => {
    fs.writeFileSync(filePath, content);
};
