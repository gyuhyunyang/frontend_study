import { useEffect } from "react";
import { useState } from "react";

// isOnline이라는 state에 따라서 친구의 상태가 온라인인지 아닌지를 텍스트로 보여주는 컴포넌트
function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  // 친구의 온라인 상태를 구독할 수 있는 ChatAPI 모듈이 있다고 가정한 예
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    // 친구의 상태를 구독하는 API호출
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    // useEffect()에서 리턴하는 함수
    // 이 함수는 effect 이후에 어떻게 정리(clean-up)할 것인지에 대한 코드가 들어감
    // componentWillUnmount와 같은 방식으로 작동(컴포넌트가 언마운트 될 때 호출됨)
    return () => {
      // 구독을 해지하는 API 호출
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading';
  }
  return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus;