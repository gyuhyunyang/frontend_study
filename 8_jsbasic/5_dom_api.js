// querySelector('css 선택자')
// HTML에서 해당 요소를 검색하여 찾은 첫번째 요소 하나만 반환
// 요소를 찾지 못하면 null 반환
const boxEl = document.querySelector('.box')

console.log(boxEl);

// 요소에 addEventListener 등록하기
// 이벤트 : 마우스(click), 스크롤(scroll), 키보드(keydown) 등 다양함
// addEventListener() 메소드 : 해당 요소에 지정한 이벤트(Event)가 발생하는지 듣고 (Listen)있다가 실제 이벤트가 발생하면 연결된 함수(콜백)를 실행

boxEl.addEventListener('click', function() {
  console.log('clck!!')

})


// classList 속성 : 요소의 HTML class 속성에 대한 제어 명령이 포함 
boxEl.classList.add('active'); // 요소에 active라는 클래스 추가

let hasActive = boxEl.classList.contains('active'); // 요소에 active라는 클래스 속성의 값이 있는 지 확인
console.log(hasActive);


boxEl.classList.remove('active');
hasActive = boxEl.classList.contains('active'); 
console.log(hasActive);
