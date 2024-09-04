import * as vscode from 'vscode';
import { createFeatureFolderStructure } from './commands/createFeatureFolderStructure';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.createFolderTree', createFeatureFolderStructure);

    context.subscriptions.push(disposable);
}

export function deactivate() {}
