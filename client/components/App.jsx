import React, { Component } from 'react';
import FeaturesCntr from './feature/FeaturesCntr.jsx';
import AddFeature from './add_feature/AddFeature.jsx';
import CheckpointCntr from './checkpoint/CheckpointCntr.jsx';
import axios from 'axios'

const url = '/api/features';

function get() {
  return axios.get(url)
}

let featuresList = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: featuresList
    };
    this.addFeature = this.addFeature.bind(this);
  }

  componentDidMount() {
    get()
      .then((x) => console.log('this', x.data))
  }

  // adds a new feature(project) to the DOM as well as pushes it to the database
  addFeature(title, duration) {
    let feature = {
      title: title,
      duration: Number(duration)
    }

    axios
      .post('/api/features', feature)
      .then((newFeature) => {

        featuresList.push(newFeature.data);
        console.log(newFeature.data);
        this.setState({ features: featuresList }, () => {
          console.log('New Feature Added');
          console.log(this.state.features);
        })
      })
  }

removeFeature(index) {
  featuresList.splice(index, 1)
}


  render() {
    const addFeature = this.addFeature;
    const featuresArray = this.state.features;
    const timeUpdate = this.timeUpdate;

    return (
      <div id="app-container" style={{ textAlign: 'center' }}>
        <FeaturesCntr featuresArray={featuresArray} timeUpdate={timeUpdate} />
        <CheckpointCntr addFeature={addFeature} />
      </div>
    );
  }
}

export default App;
