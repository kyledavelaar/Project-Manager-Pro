import React, { Component } from 'react';
import FeaturesCntr from './feature/FeaturesCntr.jsx';
import AddFeature from './add_feature/AddFeature.jsx';
import CheckpointCntr from './checkpoint/CheckpointCntr.jsx';
import axios from 'axios'

const url = '/api/features';

// const feature = {
//   title: "Untitled",
//   deadline: "",
//   time: null,
//   progress: null,
// }

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
    // this.timeUpdate = this.timeUpdate.bind(this);
  }

  componentDidMount() {
    get()
      .then((x) => console.log('this', x.data))
  }

  // method passed to addFeature btn for adding new project
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

  // timeUpdate(index, startTime) {
  //   if (startTime === 0) {
  //     return;
  //   }
  //   setTimeout((() => {
  //     let { features } = this.state;
  //     features[index].duration = startTime;
  //     // featuresList[index].duration = startTime;
  //     this.setState({
  //       features
  //     })
  //     startTime -= 1;
  //     this.timeUpdate(index, startTime)
  //   }).bind(this), 1000)
  // }

  render() {
    const addFeature = this.addFeature;
    const featuresArray = this.state.features;
    const timeUpdate = this.timeUpdate;

    return (
      <div id="app-container" style={{ textAlign: 'center' }}>
        <FeaturesCntr featuresArray={featuresArray} timeUpdate={timeUpdate} />
        {/*<AddFeature addFeature={addFeature} />*/}
        <CheckpointCntr addFeature={addFeature} />
      </div>
    );
  }
}

export default App;
