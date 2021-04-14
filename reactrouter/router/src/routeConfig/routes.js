
import Home from './../components/Home/index'
import About from './../components/About/index'
import NoMatch from './../components/NoMatch/index'
<<<<<<< HEAD
import ChildrenA from './../components/Home/ChildrenA/index'
import ChildrenB from './../components/Home/ChildrenB/index'
import ChildrenC from './../components/Home/ChildrenB/ChildrenC/index'
import ChildrenD from './../components/Home/ChildrenB/ChildrenD/index'
=======
>>>>>>> 03024b85dbc4761b8961133b083f1cd561527758
 
export const routes = [
    {
        path: "/home",
<<<<<<< HEAD
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
=======
        component:Home
>>>>>>> 03024b85dbc4761b8961133b083f1cd561527758
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