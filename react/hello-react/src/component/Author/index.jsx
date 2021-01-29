import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Author extends Component {
    state = {
        message:{
            isFirst:true,
            isLoading:false,
            error:'',
            author:[]            
        }

    }
    render() {
       const {isFirst,isLoading,error,author}  = this.state.message
        return (
            <div>
                {
                    isFirst ? '请输入搜索' : 
                    isLoading ? 'loading...' : 
                    error ? <h1>{error}</h1> :
                    author.map((item)=>{
                       return  <div key = {item.id}>
                            <img style={{width:'50px',marginBottom:'10px',display:'block'}} src={item.avatar_url} alt=""/>
                        </div>
                       
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        this.pubsub = PubSub.subscribe('searchFuc',(msg,data)=>{
            console.log(data);
            this.setState({
                message:data
            })
        })  
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.pubsub)
    }
}
