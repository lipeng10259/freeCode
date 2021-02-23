import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'
import {nanoid} from 'nanoid'
class PersonUI extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <input ref = { c => this.nameNode = c} type="text" placeholder = '输入名字'/>
                <input ref = { c => this.ageNode = c} type="text" placeholder = '输入年龄'/>
                <button onClick = {this.addPerson}>添加</button>
                {this.props.personCount}
                <ul>
                    {
                        this.props.personArr.map((item)=>{
                            return <li key = {item.id}>{item.name}--{item.age}</li>
                        })
                    }
                </ul>
                上面求和：{this.props.count}
            </div>
        )
    }


    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        console.log(personObj)
        this.props.addPerson(personObj)
    }
}

const Person = connect(state=>({count:state.count,personArr:state.person.personArr}),
    {
        addPerson:createAddPersonAction
    }
)(PersonUI)
export default Person