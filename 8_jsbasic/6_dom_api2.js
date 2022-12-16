// HTML에서 해당 요소를 검색하여 찾은 요소들을 모두 반환
const boxEls = document.querySelectorAll('.box');

console.log(boxEls); // 요소들의 리스트가 반환됨 => 앞에서 사용한 속성들을 바로 사용할 수 없음

// forEach 매소드 사용 가능
// 인수(인자)로 반복 요소를 처리하는 함수 추가 가능 => 콜백함수
// 반복으로 가져온 요소와 요소의 순서(매개변수의 순서가 중요, 이름은 자유)

boxEls.forEach(function (boxEl, index) {
  console.log(boxEl, index);

  boxEl.classList.add(`order-${index + 1}`);


});

// 요소의 내용 확인 및 수정
const boxEl = document.querySelector('.box');

console.log(boxEl.textContent); // 요소의 내용 출력
boxEl.textContent = 'CHANGE!!';
console.log(boxEl.textContent);
