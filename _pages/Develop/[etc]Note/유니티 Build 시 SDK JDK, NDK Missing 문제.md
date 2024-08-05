---
title: "[Unity] 유니티 Build 시 SDK JDK, NDK Missing 문제"
date: "2024-8-6"
thumbnail: "/assets/img/etc.jpg"
---

# [Unity] 유니티 Build 시 SDK JDK, NDK Missing 문제

- 문제
  - 오랜만에 윈도우에서 작업하고 모바일 빌드 과정중 JDK Missing으로 문제 발생.
  - 이미 Unity Hub를 통해 안드로이드 플랫폼이 설치되어 있어서 모두 설치가 되어 있는데, Missing이 뜸.
  - 유니티 버전 삭제 후 재설치해도 같은 문제 반복
- 해결
  - 유니티 버전마다 권장 SDK, JDK, NDK가 있는데, 내 컴퓨터에 이미 자바와 안드로이드 스튜디오가 깔려있어서 그랬던 건지, 유니티 허브가 버전에 맞는 버전이 아닌 예전 버전의 SDK, JDK, NDK들을 다운받고 있었다.
  - 유니티 홈페이지에서 권장 버전을 확인하고 Oracle 페이지와 안드로이드 스튜디오에서 다운받은 후 경로를 설정해주니 해결!