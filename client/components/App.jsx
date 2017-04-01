import React, { Component } from 'react';
import FeaturesCntr from './feature/FeaturesCntr.jsx';
import AddFeature from './add_feature/AddFeature.jsx';
import CheckpointCntr from './checkpoint/CheckpointCntr.jsx';
import axios from 'axios'

const url = '/api/features';

const feature = {
  title: "Untitled",
  deadline: "",
  time: null,
  progress: null,
}

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
    this.showInfo = this.showInfo.bind(this);
  }

  componentDidMount() {
    get()
    .then((x) => console.log('this', x.data))
  }

  // method passed to addFeature btn for adding new project
  addFeature() {
    featuresList.push(feature);
    this.setState({ features: featuresList }, () => {
      console.log(featuresList);
    })
  }

  showInfo() {

  }

  render() {
    const addFeature = this.addFeature;
    return (
      <div id="app-container" style={{ textAlign: 'center' }}>
        <FeaturesCntr featuresList={this.state.features} />
        <AddFeature addFeature={addFeature} />
        <CheckpointCntr />
      </div>
    );
  }
}

export default App;
