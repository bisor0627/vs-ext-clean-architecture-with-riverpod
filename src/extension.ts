import * as vscode from 'vscode';
import { createFeatureFolderStructure } from './commands/createFeatureFolderStructure';

// 확장 프로그램 활성화 시 등록되는 명령어
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.createFolderTree', createFeatureFolderStructure);
    context.subscriptions.push(disposable);
}

export function deactivate() {}



