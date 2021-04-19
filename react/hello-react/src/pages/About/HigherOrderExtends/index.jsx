import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export const HigherOrderExtends = (WrapComponent)=> {
    return class extends WrapComponent {
        constructor(props) {
            super(props)
        }
    
        render () {
            // return<p>111</p>
            const elementsTree = super.render()
            let newProps = {name: 'may the force be with you',...elementsTree.props};
            const newElementsTree = React.cloneElement(elementsTree, newProps);
            return newElementsTree;
        }

    }
}
