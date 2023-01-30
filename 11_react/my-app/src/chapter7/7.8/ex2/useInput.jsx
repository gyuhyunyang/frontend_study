import { useState } from "react";

function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // const handleSubmit = () => {
  //   alert(inputValue);
  //   setInputValue('');
  // };

  const reset = () => {
    setInputValue('');
  };

  // return [inputValue, handleChange, handleSubmit];
  return [inputValue, handleChange, reset];
}

export default useInput;