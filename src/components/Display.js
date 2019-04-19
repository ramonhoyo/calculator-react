import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';
class Display extends Component {
    render(){
        return(
            <Paper style={divStyle}>
                <h3 id="output" style={textStyle}>{this.props.output}</h3>
                <h2 id="display" style={textStyle}>{this.props.input}</h2>
            </Paper>
        )
    }
}

const divStyle = {
    width: 400,
    margin: 10,
}

const textStyle = {
    margin: 0,
    marginRight: 10,
    textAlign: "right", 
    minHeight: 50,
}

export default Display