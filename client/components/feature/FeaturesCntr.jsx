import React, { Component } from 'react';
import Feature from './Feature.jsx';

class FeaturesCntr extends Component {
  render() {
    const featureArr = this.props.featuresList.map((feature, index) => (<Feature key={index} title={feature.title} deadline={feature.deadline} time={feature.time} progress={feature.progress} />));
    return (
     <div id="features-ctnr">
       {featureArr}
     </div>
   );
  }
}

export default FeaturesCntr;
