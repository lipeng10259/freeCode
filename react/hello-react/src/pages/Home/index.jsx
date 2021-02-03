import React, { Component } from 'react'
import {Switch,BrowserRouter,Route,Redirect} from 'react-router-dom'
import MyNavLink from './../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MyNavLink to = '/home/news'>News</MyNavLink>
                    <MyNavLink to = '/home/message'>Message</MyNavLink>
               
                    <Switch>
                        <Route path = '/home/news' component = {News}/>
                        <Route path = '/home/message' component = {Message}/>
                        <Redirect to = '/home/news'/>  {/**重定向****/}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
