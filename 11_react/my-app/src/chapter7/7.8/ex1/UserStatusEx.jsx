import useUserStatus from "./useUserStatus";

// isOnline이라는 state에 따라서 사용자의 상태가 온라인인지 아닌지를 보여주는 컴포넌트
function UserStatusEx(props) {
  // const [isOnline, setIsOnline] = useState(null);

  // useEffect(() => {
  //   function handleStatusOnline(status) {
  //     setIsOnline(status.isOnline);
  //   }

  //   ChatAPI.subscribeToUserStatus(props.user.id, handleStatusOnline);
  //   return () => {
  //     ChatAPI.unsubscribeFromUserStatus(props.user.id, handleStatusOnline);
  //   };
  // }, []);

  const isOnline = useUserStatus(props.user.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export default UserStatusEx;