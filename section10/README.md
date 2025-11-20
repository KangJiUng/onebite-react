## 섹션 10: 최적화

- 최적화(Optimization): 웹 서비스의 성능을 개선하는 모든 행위
    - 웹 서비스 전반적: 서버의 응답 속도 개선, 이미지/폰트/코드 파일 등의 정적 파일 로딩 개선, 불필요한 네트워크 요청 줄임 등
    - React App 내부: 컴포넌트 내부의 불필요한 연산 방지, 컴포넌트 내부의 불필요한 함수 재생성 방지, 컴포넌트의 불필요한 리렌더링 방지 등
    - 최적화의 순서: 기능 구현이 먼저, 그 다음 마지막이 최적화
    - 최적화는 유저의 행동에 따라 개수가 굉장히 많아질 수 있는 컴포넌트, 함수를 매우 많이 가지고 있어서 코드가 무거운 컴포넌트와 같이 꼭 필요할 때에만 최적화를 해주는 것이 권장

- useMemo
    - ‘메모이제이션’ 기법을 기반으로 불필요한 연산을 최적화하는 리액트 훅(자매품: useCallback)
        - 메모이제이션: 반복적으로 수행되는 동일한 연산에 최초 한 번 메모리에 저장된 결과값을 사용하게 함
        - useEffect 훅과 동일하게 deps에 포함된 값이 변경되었을 때에만 콜백함수를 재실행
    
    ```jsx
    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
    
        return { totalCount, doneCount, notDoneCount };
      }, [todos]);
    ```
    

- React.memo: 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환(리액트의 내장 함수)
    - 고차 컴포넌트(HOC): 인수로 받은 컴포넌트에 기능이 추가된 새로운 컴포넌트를 반환해주는 메서드
    - 부모 컴포넌트가 리렌더링되더라도 자신이 받는 props가 바뀌지 않으면 다시는 리렌더링이 발생하지 않도록 메모이제이션 되기 때문에 불필요한 리렌더링이 방지되어서 자동으로 최적화됨
        - props를 비교할 때 얕은 비교를 수행 → 객체타입이 변경되면 값은 같더라도 주소값은 계속 바뀌기 때문에 다르다고 판단 → 객체 타입의 값을 props로 받는 컴포넌트는 memo 메서드를 적용하기만 한다고해서 최적화가 이루어지지 않음
    
    ```jsx
    // MemoizedCompoent: 반환값(최적화된 컴포넌트)
    // Component: 인수(컴포넌트)
    const MemoizedCompoent = memo(Component)
    ```

- useCallback
    - 불필요한 함수의 재생성을 방지
    - 부모 컴포넌트의 함수가 사용되지 않을 땐 다시 생성되지 않도록 할 수 있음
    
    ```jsx
    // 첫 번째 인수: 불필요하게 재생성되지 않도록 방지하고 싶은 함수
    // 두 번째 인수: deps
    useCallback(() => {}, [])
    ```

- 참고하면 좋을 자료: https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/
