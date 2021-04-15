import React, { Component } from 'react'

export interface Props {
    data:Array<{[index: string]: number}>
  }

export default class Item extends Component<Props, object> {

    static defaultProps = {
        
    }

    render() {
        let {data} = this.props
        console.log(data)
        data.map((item,idx)=>{
            console.log(item.a)
        })
        return (
            <div>
                <ul>
                    {
                        data.map((item,idx)=>{
                            return <li key = {idx}>{item.a}===={item.b}----{item.c}</li>
                        })
                    }                   
                </ul>
 
            </div>
        )
    }
}
