// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = props => {
  const {homeDetails} = props
  console.log(homeDetails)

  return (
    <div>
      <Header />
      <div className="home-container">
        <h1 className="home-h1">Home Route</h1>
        <LogoutButton />
      </div>
    </div>
  )
}

export default Home
