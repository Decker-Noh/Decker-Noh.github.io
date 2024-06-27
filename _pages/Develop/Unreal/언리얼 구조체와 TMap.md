---
title: "[Unreal] 구조체와 TMap"
date: "2024-6-27"
thumbnail: "/assets/img/book.jpg"
---

# [Unreal] 언리얼 구조체와 TMap

## 구조체(UStructs)

- 관련 프로퍼티를 체계화 및 조작할 수 있는 데이터 구조체.
- 커스텀 변수 타입을 생성하여 프로젝트를 체계화 할 수 있다.

[언리얼 구조체 문서](https://dev.epicgames.com/documentation/ko-kr/unreal-engine/structs-in-unreal-engine?application_version=5.3)

- class vs struct
  - 기본 접근 제어자
    - class : private
    - struct : public
  - struct는 사용 목적에 있어 데이터 처리에 주로 쓰임
- 제한적으로 리플렉션 지원(UPROPERTY 지원, UFUNCTION 미지원) -> 데이터 처리용이니까?



## TMap

- STL map vs TMap
  - STL map
    - 이진 트리로 구성
    - 정렬을 지원하지만, 메모리 구성이 효율적이지 않음. 데이터 삭제시 재 구축이 일어날수 있음
    - 자료 순회에 적합하지 않음
  - 언리얼 TMap
    - key, value 구성의 Tuple 데이터의 TSet 구조로 구현.
    - 해시테이블 형태로 빠른 검색 가능
    - 동적 배열의 형태로 데이터가 모여있음
    - 데이터 빠르게 순회 가능
    - 삭제시 재구축이 일어나지 않음
    - 비어있는 데이터가 있을 수 있음
    - TMultiMap을 사용하면 중복 데이터 관리 가능