import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class Panel extends Component {
  render(){
    return(
      <div style={divStyle}>
        <MuiThemeProvider theme={theme}>
          {/*NUMBERS*/}
          <Button  id="zero"  onClick={this.props.onNumClick} variant='contained' color='primary'>0</Button>
          <Button  id="one"   onClick={this.props.onNumClick} variant='contained' color='primary'>1</Button>
          <Button  id="two"   onClick={this.props.onNumClick} variant='contained' color='primary'>2</Button>
          <Button  id="three" onClick={this.props.onNumClick} variant='contained' color='primary'>3</Button>
          <Button  id="four"  onClick={this.props.onNumClick} variant='contained' color='primary'>4</Button>
          <Button  id="five"  onClick={this.props.onNumClick} variant='contained' color='primary'>5</Button>
          <Button  id="six"   onClick={this.props.onNumClick} variant='contained' color='primary'>6</Button>
          <Button  id="seven" onClick={this.props.onNumClick} variant='contained' color='primary'>7</Button>
          <Button  id="eight" onClick={this.props.onNumClick} variant='contained' color='primary'>8</Button>
          <Button  id="nine"  onClick={this.props.onNumClick} variant='contained' color='primary'>9</Button> 
          
          {/*BASIC OPERATIONS*/}
          <Button  id="subtract"   onClick={this.props.onOperationCLick} variant='contained' color='secondary'>-</Button>
          <Button  id="add"        onClick={this.props.onOperationCLick} variant='contained' color='secondary'>+</Button>
          <Button  id="multiply"   onClick={this.props.onOperationCLick} variant='contained' color='secondary'>*</Button>
          <Button  id="divide"     onClick={this.props.onOperationCLick} variant='contained' color='secondary'>/</Button>

          {/*Aditional elements*/}
          <Button  id="equals" onClick={this.props.onEqualsCLick} className={classNames(this.props.classes.cssRoot)} variant='contained' color='secondary'>=</Button>
          <Button  id="decimal" onClick={this.props.onDecimal} className={classNames(this.props.classes.cssRoot)}  variant='contained' color='secondary'>.</Button>
          <Button  id="clear" onClick={this.props.onClear} className={classNames(this.props.classes.cssRoot)}     variant='contained' color='secondary'>AC</Button>    
        </MuiThemeProvider>
      </div>
    )
  }    
}

const customStyle = theme => ({
    cssRoot: {
        color: theme.palette.getContrastText(blueGrey[700]),
        backgroundColor: blueGrey[700],
        '&:hover': {
          backgroundColor: blueGrey[800],
        }
    }
});

const theme = createMuiTheme({
    palette: {
      primary: deepPurple,
      secondary: blueGrey,
    },
    typography: {
      useNextVariants: true,
    },
  });


const divStyle = {
        display: 'grid',
        gridGap: 4,
        gridTemplateAreas: `
          '_clear _divide _multiply _subtract'
          '_seven _eight _nine _add'
          '_four _five _six _add'
          '_one _two _three  _equals'
          '_zero _zero _decimal _equals' 
          `,
          width: 400, 
          height: 400,    
          margin: 10   
}

Panel.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(customStyle)(Panel);
