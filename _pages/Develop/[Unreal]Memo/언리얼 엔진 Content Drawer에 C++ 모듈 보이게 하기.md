---
title: "[Unreal] 언리얼 엔진 Content Drawer에 C++ 모듈 보이게 하기"
date: "2024-7-8"
thumbnail: "/assets/img/unreal.jpg"
---

# [Unreal] 언리얼 엔진 Content Drawer에 C++ 모듈 보이게 하기

- 모듈의 {프로젝트 이름}.build.cs 파일에 경로 추가해주기

```
PublicIncludePaths.AddRange(new string[] { "프로젝트 이름" });
```

- 해당 선언으로  c++ 파일들이 해당 모듈의 root 부터 탐색이 가능해짐
  - 루트버전과 선언 안해준 버전 둘 다 되는걸로 봐서 문제가 없도록 무조건 루트 경로부터의 경로를 적어주는게 좋아보임.
- 선언 후 Generate Visual Studio project files를 실행해주자
  - 꼭! 아고 내 시간 ㅠ_ㅜ