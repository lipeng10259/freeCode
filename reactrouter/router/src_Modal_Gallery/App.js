
import  {Route,Switch, Link, useLocation,useHistory,useParams, useRouteMatch} from 'react-router-dom'
// import {routes} from './routeConfig/routes'



function App() {
  return (
    <div className="App">
      <ModalSwitch />
      {/* <Switch>
          {
            routes.map((route,idx)=>{

             return <SubRouter key={idx} {...route} />

            })
          }       
      </Switch> */}
    </div>
  );
}

function SubRouter (route) {

  return (
    <Route 
      path = {route.path}
      render = {props=>(<route.component {...props} routes = {route.routes}/>)}
    />
  )

}


function ModalSwitch () {
  let location = useLocation()

  let background = location.state && location.state.background

  return (
    <div>
      <Switch location = {background || location}>
        <Route exact path = '/' children = {<Home/>}/>
        <Route path="/gallery"  children = {<Gallery/>}/>
        <Route path="/img/:id"  children = {<ImageView/>}/>
        {/* {background && <Route path="/img/:id" children={<Modal />} />} */}
      </Switch>
      {background && <Route path="/img/:id" children={<Modal />} />}

    </div>
  )
}



const IMAGES = [
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" }
];


function Home() {
  return (
    <div>
      <Link to="/gallery">Visit the Gallery</Link>
      <h2>Featured Images</h2>
      <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/4">Crimson</Link>
        </li>
      </ul>
    </div>
  );
}

function Gallery() {
  let location = useLocation();

  return (
    <div>
        <ul>
          {
            IMAGES.map((item,index)=>{
              return <li key = {index}> 
                <Thumbnail color = {item.color}/>
                <Link 
                  key = {index} 
                  to = {{
                      pathname:`/img/${item.id}`,
                      state: { background: location } // state 属性会阻止页面跳转到目标页面
                    }}
                  >
                    {item.title}
                  </Link>
              </li>

            })
          }         
        </ul>
    </div>
  );
}

function ImageView() {
  let {id} = useParams()
  let image = IMAGES[parseInt(id, 10)];
  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      < Image color = {image.color}/>
    </div>
  );
}

function Modal() {
  let history = useHistory();
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}

function Image ({color}) {
    return (
      <div style = {{
        width:'100%',
        height:'400px',
        background:color
      }}></div>
    )
}


function Thumbnail({ color }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        background: color
      }}
    />
  );
}


export default App;
