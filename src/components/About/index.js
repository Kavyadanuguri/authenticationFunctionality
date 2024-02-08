// Write your JS code here

import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const About = props => {
  const {aboutDetails} = props
  console.log(aboutDetails)

  return (
    <div>
      <Header />
      <div className="about-container">
        <h1 className="about-h1">About Route</h1>
        <LogoutButton />
      </div>
    </div>
  )
}

export default About
