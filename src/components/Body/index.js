import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <h1 className="header-text">Left Navbar Menu</h1>
              <ul className="nav-list-container">
                <li className="nav-item">Item 1</li>
                <li className="nav-item">Item 2</li>
                <li className="nav-item">Item 3</li>
                <li className="nav-item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="header-text">Content</h1>
              <p className="nav-item">
                Lorem ipsum dolor sit amet, consectetur adiplscing elit, sed do
                elusmod tempor incildunt ut labore et Ut enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar-container">
              <h1 className="header-text">Right Navbar</h1>
              <ul className="box-container">
                <li className="nav-item-container">
                  <p className="nav-item">Ad 1</p>
                </li>
                <li className="nav-item-container">
                  <p className="nav-item">Ad 2</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
