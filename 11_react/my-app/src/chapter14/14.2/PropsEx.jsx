// 개념 설명만을 위한 예제
function PropsEx(params) {
  return <Toolbar theme="dark" />;
}

function Toolbar(props) {
  // Toolbar 컴포넌트는 테마 prop을 받아서 ThemedButton에 전달해야 함
  // 앱 안의 모든 버튼이 테마를 알아야 한다면 이 정보를 일일이 넘기는 과정은 비효율족
  // 특히 트리 구조가 깊어질수록 매우 비효율적임
  // 이런 과정을 Prop Drilling 이라고 부름(프로퍼티 내리꽂기)
  return ( 
    <div>
      <ThemedButton theme={props.theme} />;
    </div>
   );
}

function ThemedButton() {
  return <button theme={props.theme} />;
}