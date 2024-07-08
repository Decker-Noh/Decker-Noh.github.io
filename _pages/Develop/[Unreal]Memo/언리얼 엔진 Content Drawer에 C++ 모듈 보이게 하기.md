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