/**
 * Created by supimon on 25/01/18.
 */
import React, { Component } from 'react';

class ErrorBoundary extends Component{

  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render(){
    if(this.state.hasError)
      return <h1>{this.state.errorMessage}</h1> ;
    else
      return this.props.children;
  }
}

export default ErrorBoundary;
