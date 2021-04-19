// import Home from './../components/Home/index'
// import Hello from './../components/Hello/index'
// import About from './../components/About/index'
// import Increment from '../components/IncrementUI/index'
import  {lazy} from 'react';
const Hello = lazy(()=>import('./../components/Hello/index'))
const Home = lazy(()=>import('./../components/Home/index'))
const About = lazy(()=>import('./../components/About/index'))
const Increment = lazy(()=>import('./../containers/Increment/index'))
export const routes = [
    {
        path:'/home',
        title:'Home',
        component:Home
    },
    {
        path:'/hello',
        title:'Hello',
        component:Hello
    },
    {
        path:'/About',
        title:'About',
        component:About
    },
    {
        path:'/Increment',
        title:'Increment',
        component:Increment
    }
]