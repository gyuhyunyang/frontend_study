import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

// 방법 1: 스타일드 컴포넌트로 스타일 확장
const StyledCol = styled(Col)`
  cursor: pointer;
`;

// 방법2: GlobalStyle에 공통 스타일로 작성
// className="cursor-pointer" 추가하기

function ProductListItem(props) {
  const { product } = props;

  const navigate = useNavigate();

  // 숫자 포맷 적용
  const formatter = new Intl.NumberFormat('ko-KR',);

  return (
    <StyledCol md={4} className="cursor-pointer">
      <img src={product.imagePath} width="80%"
        // 이동 경로 설정하기 
        onClick={() => {
          navigate(`/detail/${product.id}`)
        }}  
      />
      <h4>{product.title}</h4>
      <p>{formatter.format(product.price)}원</p>
    </StyledCol>
  );
}

export default ProductListItem;