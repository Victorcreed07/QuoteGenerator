import React from "react"
import Lotquotes from "./Lotquotes"

const styles={
    float:"right"
}
class Quotes extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        
        
        return(
            <div>
            <p>{this.props.word}</p>
            <p style={styles}>{this.props.author}</p>
            
            </div>
        )
    }
}


export default Quotes
