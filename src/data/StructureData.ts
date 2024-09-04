import { FolderStructure } from '../models/FolderStructure';
import { FileStructure } from '../models/FileStructure';
import { capitalize } from '../utils/capitalize';

// 폴더 구조 정의
export const foldersToCreate: FolderStructure[] = [
    new FolderStructure('data/models'),
    new FolderStructure('data/repositories'),
    new FolderStructure('data/sources'),
    new FolderStructure('domain/controller'),
    new FolderStructure('domain/entities'),
    new FolderStructure('domain/usecases'),
    new FolderStructure('presentation/provider'),
    new FolderStructure('presentation/screens'),
    new FolderStructure('presentation/widgets')
];

// 파일 구조 정의
export const getFileStructures = (featureName: string): FileStructure[] => [
    new FileStructure(`data/models/${featureName}_model.dart`, `// TODO: Define the data model for ${featureName}.\nclass ${capitalize(featureName)}Model {}`),
    new FileStructure(`data/repositories/${featureName}_repository.dart`, `// TODO: Implement the repository for ${featureName}.\nclass ${capitalize(featureName)}Repository {}`),
    new FileStructure(`data/sources/${featureName}_source.dart`, `// TODO: Implement the source for ${featureName}.\nclass ${capitalize(featureName)}Source {}`),
    new FileStructure(`domain/controller/${featureName}_controller.dart`, `// TODO: Implement the controller for ${featureName}.\nclass ${capitalize(featureName)}Controller {}`),
    new FileStructure(`domain/entities/${featureName}_entity.dart`, `// TODO: Define the entity for ${featureName}.\nclass ${capitalize(featureName)}Entity {}`),
    new FileStructure(`domain/usecases/${featureName}_usecase.dart`, `// TODO: Implement the use case for ${featureName}.\nclass ${capitalize(featureName)}UseCase {}`),
    new FileStructure(`presentation/provider/${featureName}_provider.dart`, `// TODO: Implement the provider for ${featureName}.\nfinal ${featureName}Provider = Provider((ref) => null);`),
    new FileStructure(`presentation/screens/${featureName}_screen.dart`, `import 'package:flutter/material.dart';\n\n// TODO: Implement the screen for ${featureName}.\nclass ${capitalize(featureName)}Screen extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Container();\n  }\n}`),
    new FileStructure(`presentation/widgets/${featureName}_widget.dart`, `import 'package:flutter/material.dart';\n\n// TODO: Implement the widget for ${featureName}.\nclass ${capitalize(featureName)}Widget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Container();\n  }\n}`),
];
