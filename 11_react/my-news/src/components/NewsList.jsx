import { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "axios";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 샘플용
const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
};

// API를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링해주는 컴포넌트
function NewsList({ category }) {
  const [articles, setArticles] = useState([]);

  // 데이터 연동하기
  // 컴포넌트가 화면에 보이는 시점에 API 요청
  // useEffect()를 사용하여 컴포넌트가 처음 렌더링 됐을때 요청
  useEffect(() => {
    // async 함수 선언
    const fetchData = async () => {
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ceb8d915e94f45079475365770e158c2`);
        console.log(response);
        setArticles(response.data.articles)

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]); 
  
  // 아직 articles 값이 없을때 
  if (!articles) {
    return null;
  }  

  return (
    <NewsListBlock>
      {/* sampleArticle 렌더링 해보기 */}
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}

      {/* map() 함수로 반복 렌더링 */}
      {articles.map((article) => <NewsItem key={article.url} article={article}  />)}

    </NewsListBlock>
  );
};

export default NewsList;