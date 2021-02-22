import Count from './containers/Count'

// 容器组件的store 需要在app.js里面通过props传入，不能直接引入
import store from './redux/store' 
function App() {
  return (
    <div className="App">
      {/**给容器组件传递store**/}
        <Count store = {store}/>
    </div>
  );
}

export default App;
