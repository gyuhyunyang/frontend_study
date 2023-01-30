import { useState } from "react";

function ReservationRefactoring() {
  // 만약 여러개의 state가 서로 관련이 있는 데이터라면 객체 형태로 묶어서 관리 가능
  // input에 name 속성을 설정하고 이벤트가 발생했을 때 이값을 참조하여 객체에 접근
  const [inputs, setInputs] = useState({
    breakfast: false,
    numberOfGuests: 2,
    name: ''
  });

  const { breakfast, numberOfGuests } = inputs; // 구조 분해 할당을 통해 값 추출

  const handleInputChange = (e) => {
    const { type, name, checked, value } = e.target; 
    const inputValue = type === 'checkbox' ? checked : value;
    // console.log(name, inputValue);

    // 중요!!
    // React 상태에서 객체를 수정해야 할 떄에는 
    // inputs[breakfast] = inputValue;
    // 이런식으로 직접 수정하면 안됨(inputs가 가르키는 객체의 내부 데이터만 바뀐것이지 참조값은 변하지 않음)
    // 그 대신 새로운 객체를 만들어서 새로운 객체에 변화를 주고 이를 상태로 사용해야 함
    // 이런 작업을 "불변성을 지킨다" 라고 부름
    // 불변성을 지켜주어야만 React 컴포넌트에서 상태가 업데이트 됐음을 감지 할 수 있다고 재렌더링이 진행됨
    // 결론 : React에서 객체를 업데이트 할 때에는 기존 객체를 직접 수정하면 안되고 
    // 새로운 객체를 만들어서 그 객체에 변화를 주고 마지막으로 set 함수를 넣어주어야 함
    setInputs(inputs => ({
      ...inputs,
      [name]: inputValue
    }));

    // const copyObj = {
    //   ...inputs    
    // };
    // copyObj[name] = inputValue;
    // setInputs(copyObj)

    // es6차 수업 예제 참고
    // 2_arrow_function - 객체를 암시적으로 반환하기
    // 9_spread_rest - 객체의 복사, 결합
    // 10_object_literal - 객체의 속성을 동적으로 정의하기


  };

  const handleSubmit = () => {
    alert(`조식여부: ${breakfast}, 투숙객 수: ${numberOfGuests}`);
  };

  return (  
    <>
      <label>
        조식 여부: 
        <input 
          type="checkbox"   
          name="breakfast" 
          // checked 속성은 checkbox랑 radio 타입에 존재하고 boolean 타입의 값
          checked={breakfast}
          onChange={handleInputChange}
          />
      </label>
      <br />
      <label>
        투숙객 수: 
        <input 
          type="number"
          name="numberOfGuests"
          value={numberOfGuests}
          onChange={handleInputChange}
          />
      </label>
      <button type="button" onClick={handleSubmit}> 제출</button>
    </>
  );
}

export default ReservationRefactoring;











