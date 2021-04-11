
import Home from '../components/Home/index'
import About from '../components/About/index'
import NoMatch from '../components/NoMatch/index'
 
export const routes = [
    {
        path: "/home",
        component:Home
      },
      {
        path: "/about",
        component:About
      },
      {
        path: "/nomatch",
        component:NoMatch
      }
]