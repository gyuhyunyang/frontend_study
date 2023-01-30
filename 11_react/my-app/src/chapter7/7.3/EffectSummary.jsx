import { useEffect } from "react";
import { useState } from "react";

function EffectSummary(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // useEffect()는 공통으로 마운트 시에는 무조건 실행됨!!

  // 렌더링 될때마다 매번 실행됨
  useEffect(() => {
    console.log('나는 매번 실행됨');
  });

  // count가 변할때마다 실행됨
  useEffect(() => {
    console.log('%ccount가 변함', 'color: red; background: #ffdae0');
  }, [count]);

  // name이 변할때마다 실행됨
  useEffect(() => {
    console.log('%cname이 변함', 'color: blue; background: #e2d6fd');
  }, [name]);

  // 마운트 될때만 실행됨
  useEffect(() => {
    console.log('%c마운트 될때만 실행', 'color: yellow; background: black');

    return () => {
      console.log('%c언마운트 될때만 실행', 'color: red; background: black');
    };
  }, []);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 +1</button>
      <p>이름: {name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default EffectSummary;