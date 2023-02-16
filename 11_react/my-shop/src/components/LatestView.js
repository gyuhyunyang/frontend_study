import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { selectProductList } from "../features/product/productSlice";

const LatestViewWrapper = styled(Card)`
  position: fixed;
  top: 100px;
  right: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);
  width: 8rem;
`;

function LatestView(props) {
  const productiList = useSelector(selectProductList);
  const latestViewed = JSON.parse(localStorage.getItem('latestViewed')); // 없으면 null 반환
  const latestViewedProducts = latestViewed?.map((id) => productiList.find((product) => product.id === id )); // 옵셔널 체이닝에 의해 undefined 반환

  console.log(productiList);
  console.log(latestViewed);
  console.log(latestViewedProducts);

  if (productiList.length < 1 || !latestViewedProducts) {
    return null;
  }
  
  return (
    <LatestViewWrapper>
    <Card.Header>최근 본 상품</Card.Header>
    <ListGroup variant="flush">
      {latestViewedProducts.map((product, index) => (
        // 키값을 주기 위해선 React.Fragment 생략하면 안된다.
        <React.Fragment key={product.id}>       
          <img src={product.imagePath} alt={`img-${index}`} />
          <ListGroup.Item className="text-ellipsis">{product.title}</ListGroup.Item>
        </React.Fragment>
      ))}
      
    
    </ListGroup>
  </LatestViewWrapper>
  );
}

export default LatestView;