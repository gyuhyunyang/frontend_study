// 사용자의 온라인, 오프라인 상태를 구독하려고 그 상태값을 리턴하는 함수 
function useUserStatus(userId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusOnline(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToUserStatus(userId, handleStatusOnline);

    return () => {
      ChatAPI.unsubscribeFromUserStatus(userId, handleStatusOnline );
    };

  }, []);



  return isOnline;
}

export default useUserStatus;userId