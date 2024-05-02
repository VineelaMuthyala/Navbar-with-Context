import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return isDarkTheme ? (
        <div className="container">
          <Navbar />
          <div className="home-container black">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              className="home-logo"
              alt="home"
            />
            <h1 className="home-text black">Home</h1>
          </div>
        </div>
      ) : (
        <div className="container">
          <Navbar />
          <div className="home-container white border">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              className="home-logo"
              alt="theme"
            />
            <h1 className="home-text white">Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
