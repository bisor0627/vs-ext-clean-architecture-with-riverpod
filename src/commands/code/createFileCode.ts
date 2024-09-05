export function createFile(featureNameSnake: string, classNamePrefix: string) {
    const files = [
        { name: `data/repositories/${featureNameSnake}_repository.dart`, content: `// TODO: ${classNamePrefix} 기능의 리포지토리를 구현하세요.\nclass ${classNamePrefix}Repository implements ${classNamePrefix}RepositoryContract {}` },
        { name: `data/dtos/${featureNameSnake}_request.dart`, content: `// TODO: ${classNamePrefix} 기능에 대한 Request를 정의하세요.\nclass ${classNamePrefix}Request {}` },
        { name: `data/dtos/${featureNameSnake}_response.dart`, content: `// TODO: ${classNamePrefix} 기능에 대한 Response를 정의하세요.\nclass ${classNamePrefix}Response {}` },
        { name: `data/sources/${featureNameSnake}_api_source.dart`, content: `// TODO: ${classNamePrefix} 기능의 API 소스를 구현하세요.\nclass ${classNamePrefix}ApiSource {}` },
        { name: `domain/entities/${featureNameSnake}_entity.dart`, content: `// TODO: ${classNamePrefix} 기능에 대한 엔티티를 정의하세요.\nclass ${classNamePrefix}Entity {}` },
        { name: `domain/repositories/${featureNameSnake}_repository_contract.dart`, content: `// TODO: ${classNamePrefix} 기능에 대한 리포지토리 인터페이스를 정의하세요.\nabstract class ${classNamePrefix}RepositoryContract {}` },
        { name: `domain/usecases/${featureNameSnake}_usecase.dart`, content: `// TODO: ${classNamePrefix} 기능에 대한 유스케이스를 정의하세요.\nclass ${classNamePrefix}UseCase {}` },
        { name: `presentation/providers/${featureNameSnake}_provider.dart`, content: `// TODO: ${classNamePrefix} 기능에 대한 Provider를 구현하세요.` },
        { name: `presentation/screens/${featureNameSnake}_screen.dart`, content: `// TODO: ${classNamePrefix} 기능의 화면(Screen)을 구현하세요.\nimport 'package:flutter/material.dart';\n\nclass ${classNamePrefix}Screen extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text('${classNamePrefix} Screen'),\n      ),\n      body: Center(\n        child: Text('This is the ${classNamePrefix} screen'),\n      ),\n    );\n  }\n}` },
        { name: `presentation/widgets/${featureNameSnake}_widget.dart`, content: `// TODO: ${classNamePrefix} 기능에 필요한 위젯을 구현하세요.\nimport 'package:flutter/material.dart';\n\nclass ${classNamePrefix}Widget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      child: Text('${classNamePrefix} Widget'),\n    );\n  }\n}` }
    ];

    return files;
}

