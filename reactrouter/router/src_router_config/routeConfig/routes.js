
import Home from '../components/Home/index'
import About from '../components/About/index'
import NoMatch from '../components/NoMatch/index'
import ChildrenA from '../components/Home/ChildrenA/index'
import ChildrenB from '../components/Home/ChildrenB/index'
import ChildrenC from '../components/Home/ChildrenB/ChildrenC/index'
import ChildrenD from '../components/Home/ChildrenB/ChildrenD/index'
 
export const routes = [
    {
        path: "/home",
        component:Home,
        routes:[
          {
            path: "/home/ChildrenA",
            component:ChildrenA
          },
          {
            path: "/home/ChildrenB",
            component:ChildrenB,
            routes:[
              {
                path: "/home/ChildrenB/ChildrenC",
                component:ChildrenC
              },
              {
                path: "/home/ChildrenB/ChildrenD",
                component:ChildrenD
              }
            ]
          }
          
        ]
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