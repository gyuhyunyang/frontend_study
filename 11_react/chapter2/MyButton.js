// 리액트 함수형 컴포넌트
// only JS로만 짠 코드
function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick: () => setIsClicked(true) }, // 상태 변경에 따라 재랜더링
    isClicked ? 'Clicked' : 'Click here!'
  );
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
// ReactDOM 객체의 render() 함수로 리액트 컴포넌트를 DOM컨테이너에 랜더링 하는 코드
root.render(React.createElement(MyButton));

// 리액트 개발 환경이 세팅된 리액트 프로젝트를 자동으로 생성해주는 Create React App(CRA) 이라는 패키지를 사용할 예정
// CRA는 npx 명령어를 이용해서 실행
// npx(eXecute NPm package binaries): npm 패키지를 설치하고 곧 바로 실행까지
// 사용법: 
// npx create-react-app <your-project-name>

