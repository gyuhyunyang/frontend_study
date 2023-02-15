import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
    {
      id: 1,
      title: "Arcsaber 11 Pro",
      price: 299000,
      count: 2
    },
    {
      id: 3,
      title: "Aerus Z",
      price: 199000,
      count: 1
    }
  ]
}
// 장바구니 정보를 담을 Slice를 만듦
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 장바구니 수량을 변경하는 리듀서 함수 만들기
    // Quiz: 상품의 id값을 받아서 해당 상품의 수량을 1씩 증가/감소
    // 그 상품의 수량을 1씩 증가/감소
    increaseCount: (state, action) => { // 현재의 상태와 액션객체
      const tartgetItem = state.cartList.find((cart) => cart.id === action.payload ); // cart = cartList에 요소 하나하나 
      tartgetItem.count += 1;

    },
    decreaseCount: (state, {payload: id} ) => {
      const tartgetItem = state.cartList.find((cart) => cart.id === id ); // cart = cartList에 요소 하나하나 
      tartgetItem.count -= 1;
    },



    // 장바구니에 아이템을 추가하는 리듀서 만들기
    // 이미 들어있는 상품이면 카운트만 증가
    // 장바구니에 없는 상품이면 새롭게 추가
    addItemToCart: (state, { payload: item }) => {
      // item = {id, title, price, count}; 를 받아옴
      // find()를 사용하여 해당 상품이 있는지 찾고
      console.log(item);

   
    }


  }
});

  // 1. 리듀서 만들기
  // 2. 액션 생성 함수 export
  // 3. 버튼 클릭시 액션 객체를 dispatch()
  // 4. 요청 보낼때 id값을 payload에 담아 보내기

  export const { increaseCount, decreaseCount, addItemToCart} = cartSlice.actions;

  export const selectCartList = state => state.cart.cartList;

  export default cartSlice.reducer;