// 동일한 웹사이트에서 연락처 목록을 제공하는데 이때 온라인인 사용자의 이름은 초록색으로 표시해주고 싶다고 가정
// UserStatus 컴포넌트에서 사용한 로직과 동일한 로직을 넣어야 함
function UserListItemEx() {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusOnline(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToUserStatus(props.user.id, handleStatusOnline);

    return () => {
      ChatAPI.unsubscribeFromUserStatus(props.user.id, handleStatusOnline );
    };

  }, []);
  // 중복되는 코드를 추출하여 커스텀 혹으로 만들기
  // 여러 개의 함수 컴포넌트에서 하나의 로직을 공유하도록 하고 싶을 때 새로운 함수(=훅)를 하나 만든다.
  // 이름이 use로 시작하고 내부에서 다른 훅을 사용해서 만드는 하나의 자바스크립트 함수


  return (
    <li style={{ color: isOnline ? 'green' : 'black'}}>
      {props.user.name}
    </li>

  );
}

export default UserListItemEx;