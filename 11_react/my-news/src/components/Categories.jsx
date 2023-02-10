import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

// 여기서 name은 실제 카테고리 값, text는 렌더링할 때 사용할 한글 카테고리명
const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  }
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  cursor: pointer;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }

  /* 현재 선택된 카테고리 값에 따라 다른 스타일 적용 */
  ${props => props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}
`;

// NavLink
const CategoryLink = styled(NavLink)`
  font-size: 1.125rem;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  cursor: pointer;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }

  /* active라는 클래스 값이 있으면 적용 */
 &.active {
  font-weight: 600;
  border-bottom: 2px solid #22b8cf;
  color: #22b8cf;
  &:hover {
    color: #3bc9db;
    }
  }
`;

function Categories({ category, onSelect }) {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        // <Category
        //   key={c.name}
        //   active={c.name === category}
        //   onClick={() => {
        //     onSelect(c.name)
        //   }}
        // >
        //   {c.text}          
        // </Category>

      <CategoryLink
        key={c.name}
        to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}          
      </CategoryLink>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;