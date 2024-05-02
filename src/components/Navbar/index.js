import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickToggelTheme = () => {
        toggleTheme()
      }

      return isDarkTheme ? (
        <div className="navbar-container-light">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            className="logo"
            alt="website logo"
          />
          <ul className="menu-container">
            <Link to="/" className="link-light">
              <li>Home</li>
            </Link>
            <Link to="/about" className="link-light">
              <li>About</li>
            </Link>
          </ul>
          <button
            onClick={onClickToggelTheme}
            className="btn-light"
            type="button"
            data-testid="theme"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              className="theme-logo"
              alt="sun"
            />
          </button>
        </div>
      ) : (
        <div className="navbar-container-dark">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            className="logo"
            alt="website logo"
          />
          <ul className="menu-container">
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li>About</li>
            </Link>
          </ul>
          <button
            onClick={onClickToggelTheme}
            className="btn-dark"
            type="button"
            data-testid="theme"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              className="theme-logo"
              alt="moon"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
