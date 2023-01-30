# Design Patterns

JavaScript 디자인 패턴 학습 저장소

## 생성(Creational)

기존 코드를 쉽게 재사용하고 확장 가능한 유연한 코드 작성을 돕는 패턴들입니다.

- [ ] Constructor
- [ ] Prototype
- [ ] Singleton
- [ ] Factory

## 구조(Structual)

다양한 객체 사이 구조를 구성하고, 효율적 관계 구축을 돕는 패턴들입니다.

- [ ] Adapter
- [ ] Composite
- [ ] Module
- [ ] Decorator
- [ ] Facade
- [ ] Proxy

## 행동(Behavioral)

- [ ] Constructor
- [ ] Factory
- [ ] Prototype
- [ ] Singleton

# MVC Architecture

"개발자가 모듈 및 재사용 가능한 코드를 작성할 수 있도록 하는 것"이 MVC 아키텍처의 목표입니다.

MVC는 Model, View, Controller를 줄여 부르는 말입니다. 애플리케이션 로직을 서로 연결된
3개의 컴포넌트(모델, 뷰 그리고 컨트롤러)로 분리하여 관리하는 소프트웨어 아키텍처(설계 방법)입니다.

## Model

모델은 애플리케이션의 데이터를 관리하는 컴포넌트입니다. 모델은 MVC 아키텍처의 핵심이며
컨트롤러로부터 명령을 받고 사용자 입력을 실행합니다. 모델은 컨트롤러에서 직접 명령을 받기 때문에
뷰와 직접적인 연결고리가 없습니다.

- [ ] Model 컴포넌트

## View

뷰는 사용자 인터페이스에 표시될 최종 정보를 담당합니다. 이 컴포넌트는 사용자로부터 입력을 받고
컨트롤러를 통해 공급받은 모델 데이터를 사용자에게 표시합니다. 데이터 관리가 필요하지 않은
사용자 입력의 경우 컨트롤러를 통해 모델을 업데이트 할 필요가 없습니다.

- [ ] View 컴포넌트

## Controller

컨트롤러는 모델, 뷰 컴포넌트 사이에 위치한 커넥터(connector, 연결 장치)입니다.
이 컴포넌트는 애플리케이션의 두뇌(brain)이며 뷰에서의 사용자 입력을 명령으로 변환하는 역할을 합니다.
이 명령은 데이터를 뷰에 표시하거나, 모델을 업데이트 합니다.

- [ ] Controller 컴포넌트

# Component Pattern

오늘날 웹 애플리케이션 구축의 핵심은 컴포넌트입니다. 과거 jQuery와 같은 라이브러리를 사용해
직접 문서 객체에 접근해 조작하던 흐름은 작금에 이르러서는 컴포넌트 중심으로 설계하는 방향으로 변경되었습니다.

컴포넌트의 작동 흐름은 컴포넌트 상태 변경 시 사용자 인터페이스를 업데이트합니다.
즉, 컴포넌트는 상태을 가질 수 있고, 화면을 업데이트 하는 기능을 필요로 합니다.

- [ ] 상태 & 업데이트
- [ ] 컴포넌트 클래스
- [ ] 이벤트 전파 및 추상화
- [ ] 상태 전환 및 필터링
- [ ] 컴포넌트 추출
