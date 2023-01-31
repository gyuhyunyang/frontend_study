import FancyBorder from "./FancyBorder";

function Dialog(props) {
  return (
    // 타이틀과 메세지는 간단히 props로 받아서 설정하고,
    // 그 안에 자식으로 무엇이 들어올지 모를 때는 children으로 동적으로 받아서 처리
    // 예: 공통 모달창 만들 때 활용
    <FancyBorder color={props.color}>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

export default Dialog;