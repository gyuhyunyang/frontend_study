import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

// todos 배열을 props로 받아와서 map() 함수를 사용해 여러 개의 TodoListItem 컴포넌트로 변환해 보여줌
function TodoList() {
  return (


    <TodoListWrapper>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </TodoListWrapper>
    );
}

export default TodoList;