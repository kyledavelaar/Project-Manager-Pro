import React, { Component } from 'react';
import FeaturesCntr from './feature/FeaturesCntr.jsx';
import AddFeature from './add_feature/AddFeature.jsx';
import CheckpointCntr from './checkpoint/CheckpointCntr.jsx';
import axios from 'axios'
import List from './List/List.jsx';

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
    this.removeFeature = this.removeFeature.bind(this);
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

// small problem with this is that the sterinterval keeps going even after the remove, doesnt cause any serious errors but we do get a warning message in the console of the browser
// removes a feature(project) from the DOM as well as remove it from the database
removeFeature(index) {
  // removes the feature from the global array Features List
  const deletedFeat = featuresList.splice(index, 1);
  // sends a request to the server to remove the feature by ID
  axios
    .delete(`/api/features/${deletedFeat[0].id}`)
    .then(() => {
      this.setState({
        features: featuresList
      })
    })
}


  render() {
    const addFeature = this.addFeature;
    const featuresArray = this.state.features;
    const removeFeature = this.removeFeature;

    return (
      <div id="app-container" style={{ textAlign: 'center' }}>
        <FeaturesCntr featuresArray={featuresArray} removeFeature={removeFeature} />
        <CheckpointCntr addFeature={addFeature} />
        <List />
      </div>
    );
  }
}

export default App;
