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