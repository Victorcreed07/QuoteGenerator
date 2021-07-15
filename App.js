

import React from "react"
import Quotes from "./Quotes"
import Lotquotes from "./Lotquotes"
const kram={
    
    borderWidth: 0,
    height: 40,
    justifyContent: 'center',
     alignSelf: 'center'
}

class App extends React.Component{
    constructor(){
        super()
        this.state={
            quotes:Lotquotes[0].quote,
            author:Lotquotes[0].author
        
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        let random =  Math.floor(Math.random() * Lotquotes.length)
        let meep = Lotquotes[random]
        this.setState({
            quotes:meep.quote,
            author:meep.author
        })
    }
    render(){
        
        
        return(
            <div>
            <Quotes word={this.state.quotes}author={this.state.author}/>
            <button onClick={this.handleClick} style={kram}>Quote</button>
            </div>
            
            
        )
    }
}

export default App
