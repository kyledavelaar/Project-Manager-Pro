import React, { Component } from 'react';
import Feature from './Feature.jsx';

class FeaturesCntr extends Component {
  render() {
    // console.log('FEATURES CONTROLLER', this.props.featuresArray)
    // let featureList = [];
    // for (let key in this.props.featuresArray) {
    //   featureList.push(this.props.featuresArray[key])
    // }
    // console.log('FEATURE LIST REALLY ARRAY?', featureList);
    
    const featureArr = this.props.featuresArray.map((feature, index) => {
      //console.log('FEATURE', feature);
      return <Feature 
        key={index} 
        removeFeature={this.props.removeFeature} 
        index={index} 
        title={feature.title} 
        deadline={feature.duration} 
        elapsed={feature.elapsed}
        />
    });
    
    return (
      <div id="features-ctnr">
        {featureArr}
      </div>
    );
  }
}

export default FeaturesCntr;
