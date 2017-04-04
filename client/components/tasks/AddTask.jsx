import React, { Component } from 'react';
import uuid from 'uuid'; 
export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {},
      categories: ['Web Design', 'Web Development', 'Mobile Development']
    }
  }
  
  // static defaultProps = {
  //   categories: ['Web Design', 'Web Development', 'Mobile Development']
  // }

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
      <div>
        <h3>Add Task</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" placeholder="title here" />
          </div>
          <div>
            <label>Category</label><br />
              <select ref="category">
                {categoryOptions}
              </select>
          </div>
          <br />
          <input type="submit" value="Submit" /> 
        </form>
      </div>
    )
  }
}


// AddTask.propTypes = {
//   categories: React.PropTypes.array,
//   addProject: React.PropTypes.func 
// };
