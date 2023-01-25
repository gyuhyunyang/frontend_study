import { useState } from "react";
import { useEffect } from "react";

function ParentComPonent() {
  const [count, setCount] = useState(0);

  // count state가 변경되서 재렌더링 될 때마다 매번 함수가 새로 정의됨(실행이 아니라 정의!)
  // const handleClick = () => {
  //   // 클릭 이벤트 처리
  //   setCount(count + 1);
  // };

  // useCallback()안에 넣으면 컴포넌트가 마운트 될 때만 함수가 정의됨
  const handleClick = useCallback(() => {
    // 클릭 이벤트 처리
    setCount(count => count + 1);
  }, []);

  // 새로 정의되는지 log로 확인
  useEffect(() => {
    console.log('handleClick을 새롭게 정의:', handleClick);
  }, [handleClick]);

  return (
    <div>

      <button onClick={handleClick}>
        {count}
      </button>
    </div>
  );
}

export default ParentComPonent;