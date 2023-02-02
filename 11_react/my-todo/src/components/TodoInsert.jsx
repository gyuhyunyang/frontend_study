import styled from "styled-components";
import { MdAdd as AddIcon } from "react-icons/md";
import { useState } from "react";
// as를 사용하여 별칭 붙여 사용하면 추후 아이콘 바꿀때 한곳만 바꾸면 되서 편함

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  line-height: 1.5;
  color: white;
  flex: 1; // 버튼을 제외한 영역을 모두 차지하기

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868396;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items:center;
  cursor: pointer;
`;

// 새로운 항목을 입력하고 추가할 수 잇는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    onInsert(value);
    setValue(''); // value 값 초기화

    // submit 이벤트가 발생시키는 새로고침을 방지
    e.preventDefault();
  };

  return ( 
    // form 태그 사용 시 input에서 엔터키를 눌렀을 때도 submit 이벤트 발생
    // 일반적으로 keyup 이벤트를 통해 엔터키를 감지하는 로직을 작성
    // event.key === 'Ener' 
    <TodoInsertWrapper onSubmit={ handleSubmit}>
      <StyledInput 
        type="text" 
        placeholder="할 일을 입력하세요." 
        value={ value }
        onChange={ handleChange }
      />
      <StyledButton type="submit">
        <AddIcon />
      </StyledButton>
    </TodoInsertWrapper>
   );
}

export default TodoInsert;