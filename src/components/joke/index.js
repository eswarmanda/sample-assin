import {Component} from 'react'
import './index.css'

class Joke extends Component {
  state = {
    joke: '',
  }

  //   componentDidMount() {
  //     this.getJoke()
  //   }

  getJoke = async () => {
    const option = {
      method: 'GET',
    }
    const url = 'https://v2.jokeapi.dev/joke/Any'
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    this.setState({joke: data.joke})
  }

  render() {
    const {joke} = this.state
    return (
      <div className="poem-card">
        <h1 className="joke-text">{joke}</h1>
        <div>
          <button onClick={this.getJoke} type="button">
            GET Joke
          </button>
        </div>
      </div>
    )
  }
}

export default Joke
