function PostDetail(props) {
  const { posts, setPosts, currentIndex } = props;
  return (
    <div className="detail">
      <h4>제목 : {posts[currentIndex]}</h4>
      <p>날짜: 2023년 1월 20일</p>
      <p>작성자: gyuhyun</p>
      <p>상세내용</p>

      {/* 간단한 포슽 수정하기 */}
      <button type="button" onClick={() => {
        // 배열이나 객체에 state 변경하는 법
        // 새로운 배열 또는 객체를 만들어 set함수에 넣어줘야 함
        const copyPost = [...posts]; // 배열의 복사본(새로운 배열)
        copyPost[currentIndex] = `${copyPost[currentIndex]} - 수정 `;
        setPosts(copyPost);
      }}
      >수정하기
      </button>
    </div>
    
  );
}

export default PostDetail;