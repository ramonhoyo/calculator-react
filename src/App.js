import React, { Component } from 'react';
import './App.css';

import Panel from './components/Panel';   
import Display from './components/Display';
import Paper from "@material-ui/core/Paper";

import * as math from 'mathjs'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: '0',
      output: '',
      lastOperation: '',
      needClear: false
    }
    this.handlerClear = this.handlerClear.bind(this)
    this.handlerNumClick = this.handlerNumClick.bind(this)
    this.handlerDecimalClick = this.handlerDecimalClick.bind(this)
    this.handleOperation = this.handleOperation.bind(this)
    this.handleEquals = this.handleEquals.bind(this)
  }

  handlerClear(){ 
    this.setState({
      input: '0',
      output: '',
      lastOperation: '',
      needClear: false,
    })
  }

  handlerNumClick(event){
    var currVal = this.state.needClear? "0" : this.state.input
    let value = event.target.innerText
    if(this.state.input === "0" && value === "0"){
      return
    } else if(currVal !== "0"){
      value = currVal + value
    } 
    this.setState({
      input: value,
      needClear: false
    })
  }

  handlerDecimalClick(event){
    var currVal = this.state.needClear? "0" : this.state.input
    if(currVal.indexOf(".") !== -1){
      return
    } 
    this.setState({
      input: currVal + ".",
      needClear: false
    })
  }

  handleOperation(event){
    let operation =  event.target.innerText 
    var input = this.state.input
    var output = this.state.output
    
    if(input === "Sintaxys error"){
      this.handlerClear()
      return
    }

    if(this.state.lastOperation === '') {  
      output = input + " " + operation       
    } else {
      if(this.isOperator(input)){
        output = output.substr(0, output.length-1) + operation
      } else {
        output = output + " " + input + " " + operation 
      }
    }
    input = operation     
    this.setState({
      input: input,
      output: output,
      lastOperation:  operation,
      needClear: true
    })
  }

  verifyExpression(expression){
    var result = "Sintaxys error"
    try{
      result = math.eval(expression)
    } catch(err){
    } finally{
      return result
    }
  }

  isOperator(character) {
    switch(character){
      case '*': return true;
      case '+': return true;
      case '-': return true;
      case '/': return true;
      default: return false;
    }
  }


  handleEquals(event){    
    var input = this.state.input
    var output = this.state.output
    if(this.isOperator(input)){
      input = this.verifyExpression(output.substr(0, output.length-1))
    } else {
      input = this.verifyExpression(output+input)
    }
    if(input === "Sintaxys error" || isNaN(input) || input === Infinity){ 
      this.handlerClear()
      input =  "Sintaxys error"
      this.setState({input : input})
      return
    }
    this.setState({
      input: input,
      output: ' ',
      lastOperation:  '',
      needClear: input === "Sintaxys error"
    })
  }

  render() {
    return (
      <div className="App">
        <Paper style={appStyle}>
          <Display 
            input={this.state.input}
            output={this.state.output}
          >
          </Display> 
          <Panel 
            onClear={this.handlerClear} 
            onNumClick={this.handlerNumClick} 
            onOperationCLick={this.handleOperation}
            onEqualsCLick={this.handleEquals}
            onDecimal={this.handlerDecimalClick}></Panel>
        </Paper>
          <h3>
            Made with <span style={{color: "#e25555"}}>&#9829;</span> by Andrés Hoyo
          </h3>
      </div>       
    );
  }
}

const appStyle = {
  width: "min-content",
  heigth: "min-content",
  padding: 5,
}

export default App;
