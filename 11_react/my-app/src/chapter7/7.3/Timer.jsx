import { useEffect } from "react";

function Timer() {
  // 화면에 처음 렌더링 됐을 때 한번만 타이머 작동시킴
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행 중..');
    }, 1000);

    // 화면에서 사라질 때 만든 타이머 정리하기
    return () => {
      clearInterval(timer);
      console.log('타이머 종료!');
    };
  }, []);

  return ( 
    <div>
      <span>⏰타이머가 시작 됐습니다!</span>
    </div>
  );
}

export default Timer;