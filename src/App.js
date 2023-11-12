import {Component} from 'react'
import './App.css'
import Joke from './components/joke'

class App extends Component {
  state = {
    count: 0,
  }

  clickMe = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  reset = () => {
    this.setState({count: 0})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <div className="joke-card">
          <h1>
            <span>{count}</span>
          </h1>
          <div>
            <button onClick={this.clickMe} type="button">
              Counter
            </button>
            <button className="reset" onClick={this.reset} type="button">
              Reset
            </button>
          </div>
        </div>
        <Joke />
      </div>
    )
  }
}

export default App
