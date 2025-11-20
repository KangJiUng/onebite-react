## 섹션 9: useReducer

- useReducer
    - 컴포넌트 내부에 새로운 State를 생성하는 React Hook
    - 모든 useState는 useReducer로 대체 가능
    - useState는 상태 관리 코드를 컴포넌트 내부에만 작성해야 하지만 useReducer는 상태 관리 코드를 컴포넌트 외부로 분리할 수 있다는 핵심적인 차이가 있음 → 컴포넌트 내부를 비교적 간결하게 유지 가능

- dispatch: 발송하다, 급송하다 -> 상태 변화가 있어야 한다는 사실을 알리는 함수
    - action 객체: 인수로 전달된 요청의 내용을 담고 있는 객체

- DELETE 기능 filter( ) 이해

```jsx
state.filter((item) => item.id !== action.targetId);
```

1. `item.id !== targetId`가 true이면 살아남고 false이면 삭제된다.
2. 즉 targetId와 같은 id를 가진 item만 false → 제거된다.
