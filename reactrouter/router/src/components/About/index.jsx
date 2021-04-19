import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class About extends Component { 
    static contextTypes = {
        color: PropTypes.string,
    }
    render() {
        // const MyContext = window.MyContext
        // console.log(MyContext)
        
        console.log(this)
        return (

            <div>qq
        
              
            </div>
        )
    }
}
