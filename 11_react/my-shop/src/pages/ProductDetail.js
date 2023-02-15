import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById, selectSelectedProduct } from "../features/product/productSlice";
import styled, { keyframes } from 'styled-components';
import { toast } from 'react-toastify';

//서버에서 받아온 데이터라고 가정
import data from "../data.json";
import TabContents from '../components/TabContents';
import { addItemToCart } from '../features/cart/cartSlice';

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
const highligh = keyframes` // 키프레임
  from { background-color: #cff4fc;}
  50% {background-color: #e8f7fa;}
  to {background-color: #cff4fc;}
`;
const StyledAlert = styled(Alert)` // styled(Alert) 미리 만들어진 CSS를 확장
  animation: ${highligh} 1s linear infinite;
`;

function ProductDetail(props) {
  // useParams() 사용하여 productId 가져오기
  const { productId } = useParams();
  const dispatch = useDispatch();

  // Quiz: 전역 스토어에서 selectedProduct 꺼내오기
  const product = useSelector(selectSelectedProduct);
  // console.log(product);


  const [showInfo, setShowInfo] = useState(true);  // Info창 상태
  const [orderCount, setOrderCount] = useState(1);  // 주문수량 상태
  const [showTabIndex, setShowTabIndex] = useState(0); // 탭 index 상태
  const [showTab, setShowTab] = useState('detail'); // 객체형태


  // 처음 마운트 됐을때 서버에 상품 id를 이용하여 데이터를 요청하고 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에서 특정 상품의 데이터를 가져오는 작업을 했다고 가정
    //  ... api call ...
    const foundProduct = data.find((product) => {
      return product.id === productId;
    });
    dispatch(getProductById(foundProduct));

    // 3초 뒤에 info창 사라지게 만들기
    const timeout = setTimeout(()=> {
      setShowInfo(false);

    }, 3000);
    // 불필요하게 타이머가 계속 생기는것을 정리
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const  handleChangeOrderCount = (e) => {
    // console.log(e.target.value); 
    if(isNaN(e.target.value)){
      toast.error('숫자만 입력하세요!');
      return;
      
    }
    setOrderCount(Number(e.target.value));
  };
  

  // product가 없을 경우에 
  if (!product) {
    // return null;
    return <div>상품이 존재하지 않습니다.</div>
  }

  return (
    <Container className="pt-3">
      {/* Quiz: 처음에 info 띄우고 3초 뒤에 사라지게 만들기 
      처음 렌더링 됐을때 setTimeout으로 타이머 설정*/}
      {showInfo && 
        <StyledAlert variant="info" onClose={() => setShowInfo(false)} dismissible>
          현재 34명이 이 상품을 보고 있습니다.
        </StyledAlert>
      }

      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product.imagePath} width="80%"/>
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>

          <Col md={4} className="m-auto mb-3">
            {/* Quiz: 아래 input type text를 제어 컴포넌트로 만들기 */}
            {/* 1) 사용자가 입력한 값을 orderCount라는 state로 관리 */}
            {/* 2) 사용자가 값을 입력할 때마다 orderCount에 값 저장 */}
            <Form.Control type="text" value={orderCount} onChange={handleChangeOrderCount}/>
          </Col>

          <Button variant="primary">주문하기</Button>   
          <Button variant="warning"
            onClick={() => {
              dispatch(addItemToCart({ id: product.id, title: product.title, price:product.price, count: orderCount}));
            }}
            >
              장바구니</Button>       
        </Col>
      </Row>

      {/* 탭 UI */}
      {/*  defaultActiveKey: 기본으로 active할 탭, active 클래스가 들어가있음*/}
      <Nav variant="tabs" defaultActiveKey="link-0" className="my-3">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { 
            setShowTabIndex(0); 
            setShowTab('detail'); 
          }}>상세정보</Nav.Link>        
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { setShowTabIndex(1);setShowTab('review'); }}>리뷰</Nav.Link>        
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => { setShowTabIndex(2);setShowTab('qa'); }}>Q&amp;A</Nav.Link>        
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={() => { setShowTabIndex(3);setShowTab('exchange'); }}>반품/교환정보</Nav.Link>        
        </Nav.Item>
      </Nav>
      
      {/* 탭의 내용 다 만들어놓고 조건부 렌더링하면 됨 */}
      {/* 방법1. 삼항 연산자 */}
      {/* {showTabIndex === 0 
        ? <div>탭 내용1</div>
        : showTabIndex === 1
          ?  <div>탭 내용2</div>
          : showTabIndex === 2
            ?  <div>탭 내용3</div>
            : showTabIndex === 3
              ? <div>탭 내용4</div>
              : null
      } */}

      {/* 방법2. 컴포넌트로 추출 */}
      {/* <TabContents showTabIndex={showTabIndex}/> */}

      {/* 방법3. 배열이나 객체 형태로 만들어서 조건부 렌더링 */}
      {/* 배열형태 */}
      {
        [
          <div>탭 내용1</div>,
          <div>탭 내용2</div>,
          <div>탭 내용3</div>,
          <div>탭 내용4</div>
        ][showTabIndex]
      }

      {/* 객체 형태 */}
      {/* {
        {
          'detail': <div>탭 내용1</div>,
          'review': <div>탭 내용2</div>,
          'qa': <div>탭 내용3</div>,
          'exchange': <div>탭 내용4</div>,
        }[showTab]
      } */}

    </Container>
  );
}

export default ProductDetail;