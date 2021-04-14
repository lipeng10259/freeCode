import Home from './../components/Home/index'
import Hello from './../components/Hello/index'
import About from './../components/About/index'
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
    }
]