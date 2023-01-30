import { useState } from "react";

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(true);
  
  // 방법 1. 함수 선언문
  // function handleClick() {
  //   setIsToggleOn(isToggleOn => !isToggleOn);
  // }

  // 방법 2. 화살표 함수
  const handleClick = () => {
    setIsToggleOn(isToggleOn => !isToggleOn);
  };
  
  return (
    // 이벤트는 카멜 케이스를 사용
    // 함수(이벤트 핸들러)를 바로 전달하면 됨
    <button onClick={handleClick}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  );
}

export default Toggle;