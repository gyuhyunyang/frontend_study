// 현재 시간을 출력하는 Clock 컴포넌트
function Clock(props) {
  return(
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  ); // 최종적으로 React 엘리먼트(JS 객체)를 반환
}

export default Clock;