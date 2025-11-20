## 섹션 11: Context

- Context
    - 컴포넌트간의 데이터를 전달하는 또 다른 방법
    - 기존의 props가 가지고 있던 단점(Props Drilling)을 해결할 수 있음
    - 일종의 데이터 보관소 역할을 하는 객체, props를 이용하지 않고 직통으로 필요한 데이터 공급 가능
    - 보통 컴퍼넌트 외부에 선언함

- props의 단점?
    - <ins>**Props Drilling**</ins>: props는 부모 → 자식으로만 데이터를 전달할 수 있었음 → 컴포넌트의 계층 구조가 깊으면 여러 번 전달이 필요함

- Provider: context의 데이터를 공급할 데이터를 설정하거나 공급받을 컴포넌트를 설정하기 위해 사용
    - 엄연히 리액트의 컴포넌트이기 때문에 props가 바뀌게 되면 리렌더링이 발생함 → Provider 컴포넌트를 부모 컴포넌트로 갖는 자식 컴포넌트들도 리렌더링
    
    ```jsx
    <TodoContext.Provider value={(todos, onCreate, onDelete, onUpdate)}>
    	<Editor />
    	<List />
    </TodoContext.Provider>
    ```
    
    - TodoItem 컴포넌트에 memo()를 사용하여 받는 props가 바뀌지 않으면 리렌더링이 발생하지 않도록 설정을 해뒀는데, 왜 리렌더링이 발생하지?
        - 이유: 새로운 Todo를 추가하거나 수정, 삭제하면 앱 컴포넌트에 todos 컴포넌트가 변경되어서 리렌더링이 되는데 그때 Provider 컴포넌트에게 context를 사용하여 value props로 전달하는 객체 자체가 다시 생성이 되기 때문 → 결국 TodoItem 컴포넌트도 리렌더링이 발생
        - 해결법: **두 개의 context로 분리하여 해결** 할 수 있음(<ins>변경될 수 있는 값 TodoStateContext/변경되지 않는 값 TodoDispatchContext</ins>)
    
    ```jsx
    <TodoStateContext.Provider value={todos}>
    	<TodoDispatchContext.Provider value={memoizedDispatch}>
    		<Editor />
    		<List />
    	</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
    ```
    
