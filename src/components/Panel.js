import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class Panel extends Component {
  constructor(props){
    super(props)
    //{classNames(this.props.classes.cssRoot, "zero")} 
  }
  render(){
    return(
      <div style={divStyle}>
        <MuiThemeProvider theme={theme}>
          {/*NUMBERS*/}
          <Button  className="zero"  variant='contained' color='primary'>0</Button>
          <Button  className="one"   variant='contained' color='primary'>1</Button>
          <Button  className="two"   variant='contained' color='primary'>2</Button>
          <Button  className="three" variant='contained' color='primary'>3</Button>
          <Button  className="four"  variant='contained' color='primary'>4</Button>
          <Button  className="five"  variant='contained' color='primary'>5</Button>
          <Button  className="six"   variant='contained' color='primary'>6</Button>
          <Button  className="seven" variant='contained' color='primary'>7</Button>
          <Button  className="eight" variant='contained' color='primary'>8</Button>
          <Button  className="nine"  variant='contained' color='primary'>9</Button>
          
          {/*BASIC OPERATIONS*/}
          <Button  className="minus"    variant='contained' color='secondary'>__</Button>
          <Button  className="plus"     variant='contained' color='secondary'>+</Button>
          <Button  className="product"  variant='contained' color='secondary'>X</Button>
          <Button  className="division" variant='contained' color='secondary'>/</Button>

          {/*Aditional elements*/}
          <Button  className={classNames(this.props.classes.cssRoot, "result")} variant='contained' color='secondary'>=</Button>
          <Button  className={classNames(this.props.classes.cssRoot, "point")}  variant='contained' color='secondary'>.</Button>
          <Button  className={classNames(this.props.classes.cssRoot, "ac")}     variant='contained' color='secondary'>AC</Button>    
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
          '_ac _division _product _minus'
          '_seven _eight _nine _plus'
          '_four _five _six _plus'
          '_one _two _three  _result'
          '_zero _zero _point _result' 
          `,
          width: 400, 
          height: 400,       
}

Panel.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(customStyle)(Panel);
