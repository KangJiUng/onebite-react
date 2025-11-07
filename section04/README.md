## 섹션 4: React.js 개론

- React.js 란

  - Meta가 개발한 오픈소스 Javascript 라이브러리
  - 대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만들어진 기술
  - 넷플릭스, 페이스북, 인스타, 노션 등이 사용 중

- React의 기술적인 특징

  - 컴포넌트를 기반으로 UI를 표현
    - 컴포넌트(Component): 화면을 구성하는 요소, UI를 구성하는 요소
    - Header, Main, Footer 등 여러 페이지에서 공통으로 사용되는 요소를 컴포넌트로 만들어놓고 각 페이지에서 불러올 수 있게 함
  - 화면 업데이트 구현이 쉬움
    - 선언형 프로그래밍: 과정은 생략하고 목적만 간결히 명시하는 방법 → React
      - 컴포넌트 내의 State 변수의 값에 따라 렌더링 결과를 다르게 할 수 있음
    - 명령형 프로그래밍: 목적을 이루기 위한 모든 일련의 과정을 설명하는 방법 → Javascript
  - 화면 업데이트가 빠르게 처리됨

    - 리액트가 어떻게 화면 업데이트를 쉽고 빠르게 처리할 수 있을까?

      - 브라우저는 어떻게 동작하는가?
      - HTML, CSS로 만든 페이지를 어떻게 렌더링 하는가?
      - 화면 업데이트는 어떻게 처리되는가?

      ⇒ 브라우저의 렌더링 과정 (Critical Rendering Path)

      <img width="2346" height="898" alt="image" src="https://github.com/user-attachments/assets/bcab995e-1b8a-4293-a077-5d9b0904e8c6" />

      - DOM (Document Object Model): HTML의 코드를 브라우저가 이해하기 편한 모양으로 변환한 것. 트리 구조로 표현되며, 각 노드는 웹 페이지의 다양한 부분 (예: 요소, 속성, 텍스트 등)을 나타낸다.

      <img width="2334" height="868" alt="image" src="https://github.com/user-attachments/assets/71f88849-556b-41b6-9173-9bd0ee191699" />

      <img width="2374" height="868" alt="image" src="https://github.com/user-attachments/assets/e7d3be9c-66bc-44e0-a3fb-62d31ea4e934" />

      <img width="2380" height="1040" alt="image" src="https://github.com/user-attachments/assets/0e6991f4-8c69-4826-835b-5b64cf48497b" />

      <img width="2000" height="762" alt="image" src="https://github.com/user-attachments/assets/a950a581-55ea-4e0f-8fd3-d66ac52b34ac" />


      - 성능 과부하 예시

      <img width="2276" height="924" alt="image" src="https://github.com/user-attachments/assets/dae4339f-8d7d-4f5e-bf70-af453996727d" />

      <img width="2228" height="1100" alt="image" src="https://github.com/user-attachments/assets/c83711e8-a820-4fb7-bfe7-c63925c22db8" />

      <img width="1730" height="488" alt="image" src="https://github.com/user-attachments/assets/fb9c8971-93d4-4c60-942c-5b2a6b83dc42" />

      - 리액트는 이 과정을 모두 자동으로 해준다!(ft. Virtual DOM)

  - Virtual DOM 이란?
    - DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 복제판
    - React는 업데이트가 발생하면 실제 DOM을 수정하기 전에 이 가상의 복제판 DOM에 먼저 반영해본다.
      - 연습 스윙 같은 느낌

- 리액트로 만든 웹 서비스들은 보통 리액트 앱이나 리액트 어플리케이션이라고 부른다.

  - 리액트로 만들어진 대다수의 웹 서비스들은 사실상 어플리케이션에 가깔울 정도로 매우 다양한 기능들을 제공하고 있기 때문에 단순한 웹이 아니라 웹 브라우저 위에서 동작하는 어플리케이션 같다 라고 해서 그렇게 부른다.

- Vite 사용

  - 프론트엔드 개발 툴, 기본 설정이 적용된 React App 생성 가능
  - 리액트 공식 문서에서도 권장

  ```bash
  npm create vite@latest
  ```

- public 폴더
  - 주로 동적인 파일(이미지 파일, 폰트 파일 등)을 저장

- localhost: 내 컴퓨터를 가리키는 주소
- 포트번호: 접속하려는 서버를 명시
