import Count from './containers/Count'
import store from './redux/store'
function App() {
  return (
    <div className="App">
      {/*
        给容器组件传递store
      */}
        <Count store = {store}/>
    </div>
  );
}

export default App;
