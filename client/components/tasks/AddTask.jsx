import React, { Component } from 'react';
import uuid from 'uuid'; 
import axios from 'axios';
export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {},
      categories: ['John', 'Sally', 'Billy', 'Sarah']
    }
  }
  
  componentDidMount() {
    //make sure routing and response object is right

    // axios.get('./getUsers')
    //   .then(response => {
    //     this.setState(
    //     Object.assign({}, this.state, {categories: response.data.categories})
    //   )
    // })
  }

  handleSubmit(e) {
    if (this.refs.title.value === ''){
      alert('please input a title');
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, function() {
        this.props.addProject(this.state.newProject);
        this.refs.title.value = ''; 

      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.state.categories.map((category, i) => 
      <option key={i} value={category}>{category}</option>
    );
    return (
      <div >
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input className="task-input" type="text" ref="title" placeholder="Add a Task" />
            <br />
          </div>
          <div className="form-group">
            {/*<label>Category</label>*/}
              <select className="select" ref="category">
                {categoryOptions}
              </select>
          </div>
          <br />
          <input className=" btn btn-success task-submit" type="submit" value="Submit" /> 
        </form>
      </div>
    )
  }
}


// AddTask.propTypes = {
//   categories: React.PropTypes.array,
//   addProject: React.PropTypes.func 
// };
