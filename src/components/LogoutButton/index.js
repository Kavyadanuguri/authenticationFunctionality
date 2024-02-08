// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  console.log(props)

  const outOfPage = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="logout-container">
      <button type="button" onClick={outOfPage}>
        Logout Button
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
