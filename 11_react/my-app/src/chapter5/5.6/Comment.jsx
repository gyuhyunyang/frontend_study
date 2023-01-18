import UserInfo from "./Userinfo";

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author}/>
      <div className="comment-text">
        {props.text}        
      </div>
      <div className="comment-date">
        {props.date}        
      </div>
    </div>
  );
}

export default Comment;