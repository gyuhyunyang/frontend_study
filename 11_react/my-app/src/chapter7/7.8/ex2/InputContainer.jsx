import { useState } from "react";
import useInput from "./useInput";

function InputContainer() {
  const [inputValue, handleChange] = useInput('');

  // Quiz : 커스텀 훅에 넣어보기
  const handleSubmit = () => {
    alert(inputValue);
    // setInputValue('');
  };
  
  return (  
    <div>
      <h1>입력 양식</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default InputContainer;