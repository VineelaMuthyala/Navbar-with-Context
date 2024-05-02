import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      return isDarkTheme ? (
        <div className="container">
          <Navbar />
          <div className="home-container black">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              className="home-logo"
              alt="about"
            />
            <h1 className="home-text black">About</h1>
          </div>
        </div>
      ) : (
        <div className="container">
          <Navbar />
          <div className="home-container white border">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              className="home-logo"
              alt="theme"
            />

            <h1 className="home-text white">About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
