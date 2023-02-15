import axios from "axios";

// 상품과 관려된 api 요청 함수들을 정의
// 가독성도 좋고 여러 곳에서 재사용할 수 있도록 함수로 만듦
export const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:4000/products');
    if(response.status === 200 ) { // 요청 시 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};

// 상품을 검색할 때
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/products${id}`);
    if(response.status === 200 ) { // 요청 시 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};

// 상품을 보낼때
// export const addProduct = async (product) => { // 상품하나를 인자로 받음 
//   try {
//     const response = await axios.post(`http://localhost:4000/product-add`, { product });
//     if(response.status === 200 ) { // 요청 시 200 OK 일때만 결과를 리턴
//       return response.data;
//     } else {
//       throw new Error(`api error: ${response.status} ${response.statusText}`);
//     }
//   } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
//     console.error(error);
//     throw error;
//   }
// };
// request.body.product 


// 주문을 넣었을때
// export const orderProduct = async ({ productId, orderCount }) => { 
//   try {
//     const response = await axios.post(`http://localhost:4000/product-order`, { productId, orderCount });
//     if(response.status === 200 ) { // 요청 시 200 OK 일때만 결과를 리턴
//       return response.data;
//     } else {
//       throw new Error(`api error: ${response.status} ${response.statusText}`);
//     }
//   } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
//     console.error(error);
//     throw error;
//   }
// };
// request.body.productId
// request.body.productCount






