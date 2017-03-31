import React, { Component } from 'react';

class AddFeature extends Component {
  render() {
    return (
      <button id="add-feature" onClick={this.props.addFeature}>Add Project</button>
   );
  }
}

export default AddFeature;
