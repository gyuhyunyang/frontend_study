import React from 'react';
import styled from "styled-components";
import PostListItem from './PostListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// map() 함수를 사용하여 PostListItem을 반복 렌더링하는 컴포넌트
function PostList(props) {
  const { posts, onClickItem } = props;

  return (
    <Wrapper>
      {/* 반복 렌더링 */}
      {posts.map((post) => {
        return (
          <PostListItem 
            Key={post.id} 
            post={post} 
            onClick={() => {
              onClickItem(post); // 함수호출
            }}
          />
        );

      })}
      
    </Wrapper>
  );
}

export default PostList;