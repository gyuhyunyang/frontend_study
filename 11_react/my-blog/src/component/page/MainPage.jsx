import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from '../ui/Button';
import PostList from '../list/PostList';

// 서버에서 받아온 데이터라고 가정
import data from "../../data.json";





const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// 처음 접속 시 보게될 페이지 (= 컴포넌트)
// 글 작성 버튼과 글 목록을 보여줌
function MainPage(props) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        {/* 글 작성하기 페이지로 이동하는 버튼 */}
        <Button 
          title="글 작성하기"
          onClick={() => {
            navigate('/post-write');
          }}
        />   

        {/* 글 목록을 표시 */}
        <PostList 
          posts={data}
          onClickItem={(post) => {
            navigate(`/post/${post.id}`); // id값은 URL 파라미터로 사용할 예정
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;