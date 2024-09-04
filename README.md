# 📁 Clean Architecture with RiverPod

**Clean Architecture with RiverPod**는 Flutter 프로젝트를 위한 기능별 폴더 구조와 기본 파일을 자동으로 생성해 주는 VSCode 확장 프로그램입니다. 프로젝트 초기 설정을 간편하게 만들어 줍니다.

## 기능

- **폴더 구조 자동 생성**: 기능 이름을 입력하면 관련된 폴더와 파일이 자동으로 생성됩니다.
- **기본 파일 생성**: 모델, 리포지토리, 위젯 등 다양한 파일이 기본 템플릿과 함께 만들어집니다.
- **간편한 사용**: 폴더 구조를 간단하게 생성할 수 있습니다.

## 사용 방법

1. **확장 프로그램 설치**: VSCode 마켓플레이스에서 "클린 아키텍처 with Riverpod"을 설치합니다.
2. **폴더에서 우클릭**: 프로젝트의 원하는 위치에서 폴더를 우클릭합니다.
3. **폴더 및 파일 구조 생성**: "Create Feature Folder Structure"를 선택하고, 기능 이름을 입력하면 클린 아키텍처에 맞는 폴더와 파일 구조가 생성됩니다.

## 생성되는 폴더 및 파일 구조

```
$feature/
├── data/
│   ├── models/
│   │   └── $feature_model.dart
│   ├── repositories/
│   │   └── $feature_repository.dart
│   └── sources/
│       └── $feature_source.dart
├── domain/
│   ├── controller/
│   │   └── $feature_controller.dart
│   ├── entities/
│   │   └── $feature_entity.dart
│   └── usecases/
│       └── $feature_usecase.dart
└── presentation/
    ├── provider/
    │   └── $feature_provider.dart
    ├── screens/
    │   └── $feature_screen.dart
    └── widgets/
        └── $feature_widget.dart
```

### 파일 생성 안내

- **자동 생성된 파일**: 각 폴더에는 `$feature` 이름을 기반으로 한 Dart 파일들이 생성됩니다.
- **템플릿 포함**: 각 파일에는 Riverpod과 클린 아키텍처를 반영한 기본 템플릿이 포함됩니다. 예를 들어, `StatelessWidget`을 사용하는 파일에는 `import 'package:flutter/material.dart';`가 자동으로 추가됩니다.

## 커스터마이징

폴더 구조나 파일 템플릿을 수정하고 싶다면, `StructureData.ts` 파일을 편집하여 원하는 방식으로 커스터마이징할 수 있습니다.

## 라이선스

이 프로젝트는 MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.