import { createGlobalStyle } from "styled-components";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
// bootstrap: 레이아웃을 복사, 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";

const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
  body {
    box-sizing: border-box;
  }

  #root{
    text-align: center;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
  `;

function App() {
  return (
    <>
      <GlobalStyle  />
      {/* 부트스트랩 연습 */}
      {/* 리액트 부트스트랩 */}
      {/* <Button variant="primary">Primary</Button>{' '} */}
      {/* 기존 부트스트랩 */}
      {/* <button type="button" className="btn btn-primary">Primary</button> */}

      
      {/* Quiz: Header 컴포넌트 추출 및 Outlet 활용하여 라우팅 구성해보기 */}
      <Routes>
        <Route path="/" element={<Header />}>
          {/* index: index route(여기서는 default child route) */}
          <Route index element={<Main />} />
          
        </Route>
      </Routes>

    </>
  );
}

export default App;
