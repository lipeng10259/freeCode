import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
// import Author from './../Author'

export default class Search extends Component {
    state = {
        author:[],
        message:{
            isFirst:true,
            isLoading:false,
            isError:false,
            error:''
        }
    }
    render() {
        return (
            <div>
               <div><input type="text" ref = {c => this.searchWord = c}/> <button onClick = {this.search}>搜索</button></div> 
               <br/>
    
            </div>
        )
    }

    search = ()=> {
        console.log(this.searchWord.value)
        this.searchAuthor(this.searchWord.value)
    }
    searchAuthor = (word)=> {
        
        PubSub.publish('searchFuc',{isFirst:false,isLoading:true,error:'',author:[]})
        axios.get(`http://localhost:3000/api1/search/users?q=${word}`).then(
            res=>{
                PubSub.publish('searchFuc',{isFirst:false,isLoading:false,error:'',author:res.data.items})
            },
            error=>{
                PubSub.publish('searchFuc',{isFirst:false,isLoading:false,error:error.message,author:[]})
            }
        )
    }
    stateUpdate=(data)=>{
        this.setState({message:data})
    }
}
