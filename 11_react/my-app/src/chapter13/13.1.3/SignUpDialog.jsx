import { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog(props) {
  const [login, setLogin] = useState('');

  const handleChange = (e) => {
    setLogin(e.target.value);
  };

  const handleSignUp = () => {
    alert(`탑승을 환영합니다, ${login}!`);
  };

  return (
    <Dialog 
      title="화성 탐사 프로그램"
      message="당신을 어떻게 부르면 될까요?"
    >
      <input 
        value={login}
        onChange={handleChange} 
      />
      <button onClick={handleSignUp}>
        가입하세요!
      </button>
    </Dialog>
  );
};

export default SignUpDialog;