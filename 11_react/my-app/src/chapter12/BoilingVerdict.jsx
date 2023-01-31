// 사용자가 입력한 온도가 물이 끊기에 충분한지 여부를 출력
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p> 물이 끊을 것입니다.</p>
  } 
  return <p> 물이 끊지 않을 것입니다.</p>
}



export default BoilingVerdict;