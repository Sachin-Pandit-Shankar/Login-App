// Write your code here
import './index.css'

const Login = props => {
  const {changeStatus} = props

  return (
    <button type="button" onClick={changeStatus} className="button">
      Logout
    </button>
  )
}
export default Login
