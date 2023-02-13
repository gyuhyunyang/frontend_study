import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// 1. Redux Store 만들기
// 전역 상태를 보관하는 저장소
export const store = configureStore({ // 객체와 키값을 넣어줌
  reducer: {
    // 4. Slice Reducers 등록하기
    // Slice Reducers를 등록해야 컴포넌트들이 전역 state를 사용 가능
    counter: counterReducer,    
  }
});
