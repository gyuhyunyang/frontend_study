function MyButton() {
  const handleDelete = (id, e) => {
    // e: 이벤트 객체(발생한 이벤트에 관련한 여러 기능이 담겨있음)
    // e.target: 현재 발생한 이벤트의 대상(여기서는 <button>)
    console.log(id, e.target);
  };

  const handleDeleteWrong = (id) => {
    console.log(id + ' 실행됨');
  };

  return (  
    <div>
      {/* 매개변수 event로 들어오는 값은 event 객체임 */}
      <button onClick={(event) => handleDelete(1, event)}>
        삭제하기
      </button>
    
      <br />

      {/* 잘못된 방법
      단순하게 마운트 시 함수가 실행됨
      버튼을 눌러도 함수 실행 안됨 */}
      <button onClick={handleDeleteWrong(1)}>
        삭제하기(잘못된 방법)
      </button>
    </div>
  );
}

export default MyButton;