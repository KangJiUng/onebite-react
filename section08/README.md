## 섹션 8: 프로젝트 2. 투두리스트 

- CSS 속성
    - display: flex → 클래스네임을 갖는 요소 밑에 있는 헤더나 에디터나 리스트 같은 자식 요소들의 배치를 좀 더 유연하게 할 수 있도록 도와주는 속성
    - flex-direction: column → 열 기준으로 요소들 배치
    - gap → display: flex 설정된 요소에만 적용 가능
    - 같은 태그 여러 개일 경우에는 className 따로 적용해야함

- 타임스탬프
    - getTime(): 현재 시간
    - toLocalDateString(): 날짜 포맷 변경(ex - 2025. 11. 15.)

- 입력 폼 사용 시 사용자 입장에서 완성도 높이기
    - 아무것도 입력하지 않은 상태면 추가 불가능, 입력 폼에 focus하기
        - focus() 이용
    - 추가 버튼을 클릭하여 데이터가 추가되면 입력 폼을 비우기
        - useRef 이용
    - 추가 버튼을 클릭하지 않고 엔터만 눌러도 추가 가능
        - onKeyDown 이벤트 이용

- 검색기능 구현하기
    - 배열의 모든 아이템을 순회하면서 연산의 결과 값이 참이 되는 아이템만 필터링
        - includes(): 인수로 전달한 값이 문자열에 있으면 True, 없으면 False
```jsx
todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
```

- React에서 배열이나 객체 형태의 State를 업데이트할 때 기존 State를 직접 수정하지 않고 새로운 State를 만들어 사용하는 이유는 **React의 State 변경 감지 및 리렌더링 동작**

- **map, key** 속성: React에서 배열 데이터를 기반으로 여러 컴포넌트나 엘리먼트 목록을 화면에 렌더링할 때 사용되는 배열 메소드와 각 항목에 반드시 설정해야 하는 속성
