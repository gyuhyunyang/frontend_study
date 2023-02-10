import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './page/NewsPage';

// state로 관리시
// function App() {
//   // 현재 선택한 caegory 상태 관리
//   const [category, setCategory] = useState('all'); 

//   const handleSelect = useCallback((categoryValue) => {   // 자식으로 props 넘길때 useCallback 사용
//     setCategory(categoryValue);

//   }, []);


//   return (
//     <>
//       <Categories category={category} onSelect={handleSelect} />
//       <NewsList category={category} />
//     </>
//   );
// }

// 라우팅 + URL 파라미터 적용시
function App() {
  return (
    <Routes>
      {/* ?는 category 값이 선택적이라는 의미 */}
      {/* 즉, 있을 수도 있고, 없을 수도 있다는 뜻 */}
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
}




export default App;
