import Count from './containers/Count'
import Person from './containers/Person'

// 容器组件的store 需要在app.js里面通过props传入，不能直接引入
// import store from './redux/store' 
function App() {
  return (
    <div className="App">
      {/**
       * 给容器组件传递store
       * 在index.js入库文件中 Provider 是用来给容器组件传递store使用的，在app.js里面需要传递store的地方都可以通过Provider来统一传递store
       * 
       * 
       * **/}
        {/* <Count store = {store}/> */}
        <Count/>
        <Person/>
    </div>
  );
}

export default App;
