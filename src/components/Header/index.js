// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  console.log(props)

  return (
    <div className="header-bg-container">
      <Link to="/">
        <p className="header-p1">Home</p>
      </Link>
      <Link to="/about">
        <p className="header-p1">About</p>
      </Link>
    </div>
  )
}

export default Header
