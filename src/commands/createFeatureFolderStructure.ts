
import * as path from 'path';
import * as vscode from 'vscode';
import { toPascalCase, toSnakeCase } from '../utils/capitalize';
import { createFileStructure } from './createFileStructure';
// 폴더 구조를 생성하는 메인 함수
export function createFeatureFolderStructure() {
    const options: vscode.InputBoxOptions = {
        prompt: "Enter the feature name:",
        placeHolder: "feature_name"
    };

    vscode.window.showInputBox(options).then(rawFeatureName => {
        if (!rawFeatureName) {
            vscode.window.showErrorMessage("Feature name is required.");
            return;
        }

        // 영어로만 입력 받도록 처리
        if (!/^[a-zA-Z_]+$/.test(rawFeatureName)) {
            vscode.window.showErrorMessage("Feature name must be in English and can only contain letters and underscores.");
            return;
        }

        const snakeCaseName = toSnakeCase(rawFeatureName);
        const classNamePrefix = toPascalCase(rawFeatureName);
        //rootPath is deprecated
        const rootPath = vscode.workspace.workspaceFolders?.[0].uri.fsPath;

        if (!rootPath) {
            vscode.window.showErrorMessage("No workspace is opened.");
            return;
        }

        const featurePath = path.join(rootPath, snakeCaseName);

        createFileStructure(featurePath, snakeCaseName, classNamePrefix);

        vscode.window.showInformationMessage(`'${snakeCaseName}' 폴더에 기능 구조가 생성되었습니다.`);
    });
}
