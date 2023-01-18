import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="모던 자바스크립트 딥 다이브" numOfPage={300} />
      <Book name="처음 만난 리액트" numOfPage={400} />
      <Book name="리액트를 다루는 기술" numOfPage={500} />
    </div>
  );
}
// Library 컴포넌트는 총 3개의 Book 컴포넌트를 렌더링

export default Library;