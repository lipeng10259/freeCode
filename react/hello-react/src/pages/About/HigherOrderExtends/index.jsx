import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export  function HigherOrderExtends  (WrapComponent) {
    return class extends WrapComponent {
        constructor(props) {
            super(props)
        }
        // componentDidMount () {
        //     this.setState({
        //         age:12
        //     })
        // }
        render () {
        //     console.log(this)
        //    return  <div>
        //        <h2>t</h2>
        //        { 
                
        //           super.render() 
        //        }
                        
        //     </div>
           
            const tree = super.render();
            const newProps = {sex:'男'};
            if (tree && tree.type === 'input') {
                newProps.value = 'something here';
            }
            const props = {
                ...tree.props,
                ...newProps,
            };
            const newTree = React.cloneElement(tree, props, tree.props.children);
            
            console.log(newTree)
            console.log(this.props)
            return newTree;
        }

    }
}
