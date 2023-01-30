import { useState } from "react";
import useInput from "./useInput";

function InputContainer() {
  const [inputValue, handleChange, reset] = useInput('');

  // 데이터를 서버에 보내기전 작업은 컴포넌트마다 다를 수 있기때문에
  const handleSubmit = () => {
    alert(inputValue);
    reset();
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