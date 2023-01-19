// CSS 스타일 작성(인라인 스타일로 넣어줄 객체 형태)
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};
// 사용할 이미지 경로
// https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png

function Comment(props) {
  console.log(props);
  return (
    <div style={styles.wrapper}>
      {/* 사람 모양의 프로필 이미지 */}
      <div style={styles.imageContainer}>
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
        style={styles.image}
        />
      </div>

      {/* 댓글 작성자와 내용 */}
      <div style={styles.contentContainer}>
        {/* 작성자와 내용을 props를 써서 동적으로 변경하게끔 추가(key값은 name과 comment로 전달할 예정) */}
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;