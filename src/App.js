import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onClickContentCheckbox = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onClickLeftNavbarCheckbox = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  onClickRightNavbarCheckbox = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onClickContentCheckbox,
          onToggleShowLeftNavbar: this.onClickLeftNavbarCheckbox,
          onToggleShowRightNavbar: this.onClickRightNavbarCheckbox,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
