import { useRef } from "react";

function FileInput() {
  const fileInput = useRef(null);

  const handleSubmit = () => {
    alert(`선택된 파일 - ${fileInput.current.files[0].name}`);
  };

  return (  
    <>
      <label>
        파일 업로드:
        <input type="file" ref={fileInput} />
        {/* 프로그래밍적으로 값을 설정 할 수 없고
        사용자만이 값을 설정할 수 있기때문에 항상 비제어 컴포넌트 */}
        {/* 파일에 접근하기 위해서 DOM 노드의 ref를 만들어 접근 */}
      </label>
      <br />
      <button type="button" onClick={handleSubmit}>제출</button>
    </>
  );
}

export default FileInput;