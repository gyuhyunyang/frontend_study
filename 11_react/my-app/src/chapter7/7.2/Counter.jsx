import { useState } from "react";

function Counter(props) {
  // state를 사용해서 값이 바뀔때마다 재렌더링이 되도록 하겠다.
  const [count, setCount] = useState(0); // 초기값 0
  // console.log(useState(0));
  // const arr = useState(0);
  // const count = arr[0];
  // const setCount = arr[1];
  // useState()의 결과로 배열이 반환됨 -> [0, set함수]
  // 첫 번째 요소는 현재 변수를 의미하고, 두 번째 요소는 해당 변수를 갱신해주는 함수
  // 배열의 구조 분해 할당을 사용하여 변수 선언 및 할당

  // 만약 state 미사용시
  let wrongCount = 0;

  return (
    <div>
      {/* state 사용 */}
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>

      {/* state 미사용 */}
      <p>총 {wrongCount}번 클릭했습니다.</p>
      <button onClick={() => {
        wrongCount++;
        console.log(wrongCount);
      }}>
        클릭(잘못된 방법)
      </button>
    </div>
  );
}

export default Counter;