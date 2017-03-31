import React, { Component } from 'react';

class Checkpoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ status: e.target.value });
  }

  render() {
    return (
      <div className="checkpoint">
        <form>
          <div className="radio-cp-cntr">
            <input className="cp" type="radio" value={this.state.status} onChange={this.handleChange} />
            <label className="cp-label">Checkpoint</label>
          </div>
        </form>
      </div>
    );
  }
}

export default Checkpoint;
