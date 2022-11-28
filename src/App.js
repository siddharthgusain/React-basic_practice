import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    console.log("APP CONSTRUCTOR");
    super(props);
    this.state = { value: "" }

    //binding with instances of class
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("APP MOUNTED");
  }

  componentDidUpdate() {
    console.log("APP UPDATED");
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    console.log("APP RENDER");
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <div>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
      </form>
    )
  }
}

export default App;
