// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generate = () => {
    this.setState({count: Math.floor(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>Random Number</h1>
        <p>Generate random number in the range of 0 to 100</p>
        <button onClick={this.generate}>Generate</button>
        <p>{count}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
