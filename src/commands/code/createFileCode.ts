export function createFile(featureNameSnake: string, classNamePrefix: string) {
    const files = [
        { name: `data/models/${featureNameSnake}_request_model.dart`, content: `// TODO: ${classNamePrefix} 기능에 대한 요청(request) 모델을 정의하세요.\nclass ${classNamePrefix}RequestModel {}` },
        { name: `data/models/${featureNameSnake}_response_model.dart`, content: `// TODO: ${classNamePrefix} 기능에 대한 응답(response) 모델을 정의하세요.\nclass ${classNamePrefix}ResponseModel {}` },
        { name: `data/repositories/${featureNameSnake}_repository.dart`, content: `// TODO: ${classNamePrefix} 기능의 리포지토리를 구현하세요.\nclass ${classNamePrefix}Repository {}` },
        { name: `data/sources/${featureNameSnake}_source.dart`, content: `// TODO: ${classNamePrefix} 기능의 데이터 소스를 구현하세요.\nclass ${classNamePrefix}Source {}` },
        { name: `domain/entities/${featureNameSnake}_entity.dart`, content: `// TODO: ${classNamePrefix} 기능에 대한 엔티티를 정의하세요.\nclass ${classNamePrefix}Entity {}` },
        { name: `domain/usecases/${featureNameSnake}_usecase.dart`, content: `// TODO: ${classNamePrefix} 기능에 대한 유스케이스를 정의하세요.\nclass ${classNamePrefix}UseCase {}` },
        { name: `presentation/provider/${featureNameSnake}_provider.dart`, content: `// TODO: ${classNamePrefix} 기능에 대한 Provider를 구현하세요.` },
        { name: `presentation/screens/${featureNameSnake}_screen.dart`, content: `// TODO: ${classNamePrefix} 기능의 화면(Screen)을 구현하세요.\nimport 'package:flutter/material.dart';\n\nclass ${classNamePrefix}Screen extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text('${classNamePrefix} Screen'),\n      ),\n      body: Center(\n        child: Text('This is the ${classNamePrefix} screen'),\n      ),\n    );\n  }\n}` },
        { name: `presentation/widgets/${featureNameSnake}_widget.dart`, content: `// TODO: ${classNamePrefix} 기능에 필요한 위젯을 구현하세요.\nimport 'package:flutter/material.dart';\n\nclass ${classNamePrefix}Widget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      child: Text('${classNamePrefix} Widget'),\n    );\n  }\n}` }
    ];

    return files;
}

