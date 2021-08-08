import React from "react";
import GoogleLogin from "react-google-login";
import styles from "../styles/forms.module.css";
import axios from "axios";
// import {authenticate, isAuth} from "./auth";


function Google() {

  async   function responseGoogle(res) {
        const googleData = {
         name: res.profileObj.name,
         gEmail: res.profileObj.email,
         imageUrl: res.profileObj.imageUrl,
         tokenId: res.tokenId 
        };
        console.log(googleData.gEmail)
        await axios.post(`http://localhost:5000/signin`, googleData);


        
    }
    return <GoogleLogin
    clientId="729631658964-7omnf4pr4r90o3oaabgivncs842k5gen.apps.googleusercontent.com"
    buttonText=""
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    render={renderProps => (
      <div className={styles.google} onClick={renderProps.onClick} disabled={renderProps.disabled}>
        <img src="./images/google.png" alt="google"/> 
        <p>Continue with Google<span className={styles.google_span}>on</span></p>
      </div>
    )}
    cookiePolicy={'single_host_origin'}
  />

}

export default Google;