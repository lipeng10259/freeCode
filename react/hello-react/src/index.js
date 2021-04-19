import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
// import About from './pages/About'
// import Home from './pages/Home'
// import {routeConfig} from './router/routeConfig'
// console.log(routeConfig)



// const routeConfig = [
//     { path: '/',
//       component: App,
//       childRoutes: [
//         {
//             path: 'about', 
//             component: About }
//         ,
//         { 
//             path: 'home',
//             component: Home
//         }
//       ]
//     }
//   ]



ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
    
,document.getElementById('root'))