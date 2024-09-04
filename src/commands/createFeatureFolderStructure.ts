import * as vscode from 'vscode';
import * as path from 'path';
import { createFolder, createFileWithContent } from '../utils/fileSystem';
import { foldersToCreate, getFileStructures } from '../data/StructureData';

export const createFeatureFolderStructure = async (uri: vscode.Uri) => {
    const folderPath = uri.fsPath;

    const featureName = await vscode.window.showInputBox({
        placeHolder: "Enter the feature name",
        prompt: "Enter the name of the feature to create the folder structure",
    });

    if (!featureName) {
        return;
    }

    const baseFolder = path.join(folderPath, featureName);

    // 폴더 생성
    foldersToCreate.forEach(folder => {
        createFolder(baseFolder, [folder.path]);
    });

    // 파일 생성
    const filesToCreate = getFileStructures(featureName);
    filesToCreate.forEach(file => {
        const filePath = path.join(baseFolder, file.path);
        createFileWithContent(filePath, file.content);
    });

    vscode.window.showInformationMessage(`Feature structure for '${featureName}' created successfully!`);
};
