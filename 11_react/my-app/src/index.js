import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./chapter18/app/store";

import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropUse from './chapter5/5.3/PropUse';
import CommentList from './chapter5/CommentList';
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Counter';
import CounterEffect from './chapter7/7.3/CounterEffect';
import SetStateMerge from './chapter7/7.2/SetStateMerge';
import EffectSummary from './chapter7/7.3/EffectSummary';
import EffectContainer from './chapter7/7.3/EffectContainer';
import TimerContainer from './chapter7/7.3/TimerContainer';
import HeavyCalculator from './chapter7/7.4/HeavyCalculator';
import ParentComponent from './chapter7/7.5/ParentComponent';
import TextInputWithFocusButton from './chapter7/7.6/TextInputWithFocusButton';
import ComponentVariable from './chapter7/7.6/ComponentVariable';
import InputContainer from './chapter7/7.8/ex2/InputContainer';
import Accommodate from './chapter7/7.8/Accommodate';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';
import Mailbox from './chapter9/9.3/Mailbox';
import LoginControlRefactoring from './chapter9/9.3/LoginControlRefactoring';
import MainPage from './chapter9/9.4/MainPage';
import LandingPage from './chapter9/LandingPage';
import NumberList from './chapter10/10.1/NumberList';
import AttendanceBook from './chapter10/AttendanceBook';
import NameForm from './chapter11/11.2/NameForm';
import EssayForm from './chapter11/11.3/EssayForm';
import FlavorForm from './chapter11/11.3/FlavorForm';
import FileInput from './chapter11/11.3/FileInput';
import SignUp from './chapter11/11.4/SignUp';
import Calculator from './chapter12/Calculator';
import WelcomeDialog from './chapter13/13.1.1.1/WelcomeDialog';
import SplitPaneSection from './chapter13/13.1.1.2/SplitPaneSection';
import DialogContainer from './chapter13/13.1.2/DialogContainer';
import SignUpDialog from './chapter13/13.1.3/SignUpDialog';
import ProfileCard from './chapter13/ProfileCard';
import DarkOrLight from './chapter14/14.4/DarkOrLight';
import StyledPage from './chapter15/StyledPage';
import SimpleRouter from './chapter16/SimpleRouter';
import ApiRequest from './chapter17/ApiRequest';
import CounterApp from './chapter18/CounterApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );

// 3장 예제
// root.render(
//   // <JsxUse />
//   <Library />
// );

// 4장 예제
// 1초 마다 Clock 컴포넌트를 root div에 렌더링 하는 코드
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);

// 5장 예제
// root.render(
//   // <PropUse />
//   <CommentList />
// );

// 6장 예제
// root.render(
//   <NotificationList />
// );

// 7장 예제
// root.render(
//   <Counter />
//   // <CounterEffect />
//   // <SetStateMerge />
//   // <EffectSummary />
//   // <EffectContainer />
//   // <TimerContainer />
//   // <HeavyCalculator />
//   // <ParentComponent />
//   // <TextInputWithFocusButton />
//   // <ComponentVariable />
//   // <InputContainer />
//   // <Accommodate />
// );

// 8장 예제
// root.render(
//   // <Toggle />
//   // <MyButton />
//   <ConfirmButton />
// );

// 9장 예제
const messages = ['React', 'Re: React', 'Re:Re: React'];
// const messages = [];
// root.render(
//   // <Greeting isLoggedIn={true} />
//   // <LoginControl />
//   // <Mailbox unreadMessages={messages} />
//   // <LoginControlRefactoring />
//   // <MainPage />
//   <LandingPage />
// );

// 10장 예제
const numbers = [1, 2, 3, 4, 5];
// root.render(
//   // <NumberList numbers={numbers} />
//   <AttendanceBook />
// );

// 11장 예제
// root.render(
  // <NameForm />
  // <EssayForm />
  // <FlavorForm />
  // <FileInput />
//   <SignUp />
// );

// 12장 예제
// root.render(

  // <Calculator />
 
// );


// 13장 예제
// root.render(
  // <WelcomeDialog />
  // <SplitPaneSection />
  // <DialogContainer />
  // <SignUpDialog />
//   <ProfileCard />
// );


// 14장 예제
// root.render(
//   <DarkOrLight />
  
// );


// 15장 예제
// root.render(
//   // <StyledPage />
  

// );

// // 15장 예제
// root.render(
//   // <SimpleRouter />
//   <EffectContainer />
  

// );

// 17장 예제
// root.render(
//   // <SimpleRouter />
//   <ApiRequest />
  

// );

// 18장 예제
root.render(
  // 2. 리액트에 Redux Store 제공하기
  // CounterApp 컴포넌트와 그 하위 자식들은 Redux Store에 접근가능
  <Provider store={store}> {/* props가 정해져 있음 */}  
      <CounterApp />
  </Provider>

  

);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
