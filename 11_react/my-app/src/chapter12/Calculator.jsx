import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

// 화씨를 섭씨로 변환해주는 함수
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// 섭씨를 화씨로 변환해주는 함수
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// 문자열과 변환 함수를 인수로 취해서 변환된 온도를 문자열로 반환하는 또 다른 함수
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// 입력한 온도에서 물의 끓는 여부를 추정하는 온도 계산기(부모 - 상위)
function Calculator() {
  // 공통된 상위 컴포넌트(Calculator)로 stae를 끌어올림
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c'); // 현재 사용자가 입력한 단위가 어떤 것인지 알려주는 상태

  const handleCelciuChange = (temperature) => {
    setTemperature(temperature);
    setScale('c');
  };
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  };

  // 입력창에 화씨를 입력하면 섭씨로, 섭씨를 입력하면 화씨로 바꿔주는 코드
  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (  
    <div>
      <TemperatureInput 
        scale="c" 
        temperature={celsius}
        onTemperatureChange={handleCelciuChange}
      />
      <TemperatureInput 
        scale="f" 
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}

      />
      <BoilingVerdict celsius={celsius}/>
    </div>

    // 문제상황:
    // TemperatureInput 컴포넌트를 재사용함으로써 두 개의 입력필드를 갖게 됨
    // 그러나 둘 중 하나에 온도를 입력하더라도 다른 하나는 갱신되지 않고 각각 state로 값이 관리됨(동기화 안됨)

    // 또한 BoilingVerdict 컴포넌트로 물의 끓는 여부를 알려줄 수도 없음
    // 입력된 온도 정보가 TemperatureInput 안에 숨겨져 있으므로 Calculator는 그 값을 알 수 없기 때문
  );
}

export default Calculator;