import React, { Component } from 'react';

class RemoveFeature extends Component {
  render() {
    return (
      <button onClick={() => this.props.removeFeature(this.props.index)}>X</button>
    )
  }
}

export default RemoveFeature;