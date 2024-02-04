import configurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <configurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onCheckedContent = () => {
        onToggleShowContent()
      }

      const onCheckedLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onCheckedRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="controller-container">
          <h1 className="layout-text">Layout</h1>
          <ul className="all-check-box-container">
            <li className="check-box-container">
              <input
                type="checkbox"
                className="checkbox"
                id="content"
                onChange={onCheckedContent}
                checked={showContent}
              />
              <label className="label-text" htmlFor="content">
                Content
              </label>
            </li>
            <li className="check-box-container">
              <input
                type="checkbox"
                className="checkbox"
                id="leftNavbar"
                onChange={onCheckedLeftNavbar}
                checked={showLeftNavbar}
              />
              <label className="label-text" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </li>
            <li className="check-box-container">
              <input
                type="checkbox"
                className="checkbox"
                id="rightNavbar"
                onChange={onCheckedRightNavbar}
                checked={showRightNavbar}
              />
              <label className="label-text" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </configurationContext.Consumer>
)

export default ConfigurationController
