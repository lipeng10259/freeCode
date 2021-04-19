import React, { Component } from 'react'
import About from './../About/index'
import PropTypes from 'prop-types';
export default class Home extends Component {
    static childContextTypes = {
        color:PropTypes.string
    }
    getChildContext() {
        return {
            color:'red'
        }
    }
    render() { 
        // const MyContext = React.createContext('lingth')
        // window.MyContext = MyContext 
        return (
            // <ScrollRestoration>
            <div>
               
                {/* <MyContext.Provider value={{a:1,b:2}}> */}
                     <About/>
                {/* </MyContext.Provider> */}
                    <div style = {{height:"1000px"}}> 
                Home  
          
            </div>                   
            </div>
        

            // </ScrollRestoration>
 
        )
    }
}
