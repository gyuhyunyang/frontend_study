import { useEffect } from "react";
import { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  console.log(inputEl);  // 일반 적인 자바스크립트 객체를 리턴함

  // 마운트 됐을 때 실행되므로 input 엘리먼트가 나옴
  useEffect(() => {
    console.log(inputEl);

    // 활용 예: 로그인이나 회원 가입 화면이 처음 보여졌을 때
    // 굳이 클릭하지 않아도 포커스가 되어 있게 하려면
    inputEl.current.focus();
  }, []);

  const onButtonClick = () => {
    // 여기서 current는 마운트 된 text input을 가리킴
    inputEl.current.focus(); // 실제 엘리먼트에 접근하며 focus() 함수를 호출
  };

  return (
    <>
    {/* ref  속성에 inputEl을 넣어주기만 하면 해당 DOM에 접근 가능 */}
    {/* 마치 document.querySelector()와 같음 */}
    <input type="text" />
    <button onClick={onButtonClick}>Focus the input</button>

    </>

  );
}

export default TextInputWithFocusButton;