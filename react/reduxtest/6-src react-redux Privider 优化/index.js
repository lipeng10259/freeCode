import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'

// Provider 是用来给容器组件传递store使用的，在app.js里面需要传递store的地方都可以通过Provider来统一传递store
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
// import store from './redux/store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


// 检测redux中状态的变化，只要变化，就重新render，渲染app组件
  // 使用react-redux 之后此处可以省略，react-redux 在connect 连接的时候检测了数据变化，并且重新渲染了render
// store.subscribe(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />  
//     </React.StrictMode>,
//     document.getElementById('root')
//   );  
// })