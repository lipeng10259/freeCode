import React from 'react'
import Hello from './component/Hello/Hello.jsx'
import Welcome from './component/Welcome/Welcome.jsx'

class App extends React.Component {
    render () {
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

export default App