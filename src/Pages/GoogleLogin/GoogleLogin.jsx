import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


class GoogleSocialAuth extends Component {

  render() {
    const googleResponse = (response) => {
      console.log(response)
      
    }
    return (
      <div className="App">
        <GoogleLogin
          clientId = "634290907310-uugakpl5537d3dkorls9kbasec7la5d4.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={googleResponse}
          onFailure={googleResponse}
        />
      </div>
    );
  }
}

export default GoogleSocialAuth;