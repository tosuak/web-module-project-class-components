import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleClick = evt => {
    evt.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  handleChange = evt => {
    this.setState({
      ...this.state,
      input: evt.target.value
    })
  }

  render(){
    return (
      <form>
          <input onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Add</button>
        </form>
    );
  }
}

export default TodoForm;