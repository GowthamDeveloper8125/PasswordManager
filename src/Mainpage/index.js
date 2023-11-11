import {Component} from 'react'
import './index.css'

class Mainpage extends Component {
  render() {
    return (
      <div className="MainContainer">
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="Logo"
            />
          </div>
          <div className="AddNewPassword">
            <form className="InputCardContainer">
              <h1>Add New passeord</h1>
              <div>
                <div className="InputContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="InputImage"
                  />
                  <input
                    type="text"
                    className="InputElement"
                    placeholder="Enter Your Website"
                  />
                </div>

                <div className="InputContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="InputImage"
                  />
                  <input
                    type="text"
                    className="InputElement"
                    placeholder="Enter Your Username"
                  />
                </div>

                <div className="InputContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="InputImage"
                  />
                  <input
                    type="text"
                    className="InputElement"
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <div className="ButtonContainer">
                <button type="button" className="Button">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="PasswordImage"
            />
          </div>
        </div>
        <div className="BottomContainer">
          <h1>your Passwords</h1>
          <div className="SearchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="searchIcon"
            />
            <input type="search" className="SearchItem" />
          </div>
        </div>
      </div>
    )
  }
}

export default Mainpage
