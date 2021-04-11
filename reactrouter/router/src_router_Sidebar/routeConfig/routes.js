
import Home from './../components/Home/index'
import About from './../components/About/index'
import NoMatch from './../components/NoMatch/index'
 
export const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => Home,
        main: () => <h2>Home</h2>
      },
      {
        path: "/about",
        sidebar: () => About,
        main: () => <h2>About</h2>
      },
      {
        path: "/nomatch",
        sidebar: () => NoMatch,
        main: () => <h2>NoMatch</h2>
      }
]