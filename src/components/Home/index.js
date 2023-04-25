// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Logout from '../Logout'
import Login from '../Login'

class Home extends Component {
  state = {isLogged: true}

  render() {
    const {isLogged} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          {isLogged ? <Message /> : <h1 className="heading">Please Login</h1>}
          {isLogged ? <Logout /> : <Login />}
        </div>
      </div>
    )
  }
}
export default Home
