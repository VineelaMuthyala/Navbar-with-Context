import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return isDarkTheme ? (
        <div className="container">
          <Navbar />
          <div className="not-found-container black">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-img"
              alt="not-found"
            />
            <h1 className="not-found-heading black">Lost Your Way?</h1>
            <p className="not-found-text black">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      ) : (
        <div className="container">
          <Navbar />
          <div className="not-found-container white border">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-img"
              alt="theme"
            />
            <h1 className="not-found-heading white">Lost Your Way?</h1>
            <p className="not-found-text white">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
