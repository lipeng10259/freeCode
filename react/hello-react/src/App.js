import React from 'react'
// import Hello from './component/Hello/Hello.jsx'
// import Welcome from './component/Welcome/Welcome.jsx'
import Header from './component/Header'
import Todolist from './component/Todolist'
import Footer from './component/Footer'

class App extends React.Component {
    state = {
        todolist:[
            {id:0,name:'hello0',done:false},
            {id:1,name:'hello1',done:false},
            {id:2,name:'hello2',done:false},
            {id:3,name:'hello3',done:false},
            {id:4,name:'hello4',done:false}
        ]    
    } 
    render () {
        const {todolist} = this.state
        return (
            <div>   
                <Header addTodo = {this.addTodo}/>
                <Todolist todolist = {todolist} todoUpdate = {this.todoUpdate} todoDetele = {this.todoDetele}/>
                <Footer todolist = {todolist}/>
            </div>
        )
    }
    addTodo=(obj)=>{
        const {todolist} = this.state
        let newTodo = obj
        this.setState({todolist:[newTodo,...todolist]})
    }
    todoUpdate=(id,done)=>{
        const {todolist} = this.state
        let newList = todolist.map((item)=>{
            if(id === item.id){
                return {...item,done:done}
            }
            return item 
        })
        this.setState({todolist:newList})
    }
    todoDetele = (id)=>{
        console.log(id)
        const {todolist} = this.state
        const newsTodo = todolist.filter((item)=>{
            return item.id !== id
        })
        this.setState({todolist:newsTodo})
    }
}

export default App