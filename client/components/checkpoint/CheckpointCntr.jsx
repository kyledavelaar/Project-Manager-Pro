import React, { Component } from 'react';
import FeatureInfo from '../feature_info/FeatureInfo.jsx';
import Checkpoint from './Checkpoint.jsx';
import AddCheckpoint from './AddCheckpoint.jsx';

class CheckpointCntr extends Component {
  render() {
    return (
      <div className="feature-info-cntr">
        <div className="feature-form-cntr">
          <FeatureInfo addFeature={this.props.addFeature} />
        </div>
      </div>
    );
  }
}

export default CheckpointCntr;
