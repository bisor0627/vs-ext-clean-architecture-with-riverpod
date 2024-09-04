import * as fs from 'fs';
import * as path from 'path';
import { folders } from '../models/Folder';
import { createFile } from './code/createFileCode';
// 입력된 폴더 경로와 파일 구조를 생성하는 함수
export function createFileStructure(featurePath: string, featureNameSnake: string, classNamePrefix: string) {

    folders.forEach(folder => {
        const folderPath = path.join(featurePath, folder);
        fs.mkdirSync(folderPath, { recursive: true });
    });

    var files = createFile(featureNameSnake, classNamePrefix);

    files.forEach(file => {
        const filePath = path.join(featurePath, file.name);
        fs.writeFileSync(filePath, file.content);
    });
}

