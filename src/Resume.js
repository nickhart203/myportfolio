import React, { Component } from 'react';
import Pdf from './resume_nickhart.pdf';
    
class Download extends Component {

  render() {

    return (
        <a href = {Pdf} target = "_blank">Resume</a>
    );
  }
}

export default Download;