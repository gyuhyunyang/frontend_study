// 기본값이 light인 ThemeContext
const ThemeContext = React.createContext('light');

// 로그인한 유저 정보를 담는 UserContext
const UserContext = React.createContext({
  name: 'Guest'
});

function App(props) {
  const { signedInUser, theme} = porps;

  return ( 
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        <Layout />
      </UserContext.Provider>
    </ThemeContext.Provider>  
  );
}

function Layout() {
  return ( 
    <div>
      <Sidebar />
      <Content />
    </div>
  );
  
}

function Content(params) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
   );
}