import React, { useState } from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
//import {isAuth} from "./auth";
import styles from "../styles/forms.module.css";
function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [buttonText, setButtonText] = useState("Submit");
    const [hideBtn, setHideBtn] = useState(false);
    const [errMsgName, setErrMsgName] = useState("");
    const [errMsgEmail, setErrMsgEmail] = useState("");
    const [errMsgPassword, setErrMsgPassword] = useState("");
    const [emnB, setEmnB] = useState(false);
    const [emeB, setEmeB] = useState(false);
    const [empB, setEmpB] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [resMessage, setResMessage] = useState("");
      async  function handelSubmit(e){
            e.preventDefault();
             setHideBtn(true);
             setEmnB(false)
            
                 const registerData = {
                     name, email, password
                 };
           
        }
  
    return <div>

    {/* {isAuth()? <Redirect to="/" />: null } */}
    <div className={styles.nav}>
</div>
        <div className={styles.sign_up}>
        <h1>Tell us about you...</h1>
        <div className={styles.auth_methods}>
            <div className={styles.google}> 
            <img src="./images/google.png" alt="google" /><p>Continue with Google<span className={styles.google_span}>on</span></p>
            </div>
            <div className={styles.google}>
            <img src="./images/facebook.png" alt="facebook"/>  <p>Continue with Facebook</p>
            </div>
        </div>
        <div className={styles.or_methods}>
        <div className={styles.or_methods_div}></div>
        <p>OR</p>
        <div className={styles.or_methods_div}></div>
        </div>
        
        <form className={styles.form} onSubmit={handelSubmit}>
        <div className={successMsg ? styles.greenOutput : styles.hide_content}>
    <p>{resMessage}</p>
    </div>
            <label for="name">Name:</label>
            <input id="name" type="text" placeholder="Enter your name" onChange={(e)=> setName(e.target.value)} value={name} className={emnB ? styles.red_input : null} autoComplete="off" />
            <div className={emnB? null: styles.hide_content}><p className={styles.red_ps}>{errMsgName}</p></div>
            <label for="email">Email:</label>
            <input id="email" type="email" placeholder="Example@email.com" onChange={(e)=> setEmail(e.target.value)} value={email} className={emeB ? styles.red_input : null} autoComplete="off" />
            <div className={emeB? null: styles.hide_content}><p className={styles.red_ps}>{errMsgEmail}</p></div>
            <label for="password">Password:</label>
            <input id="password" type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)} className={empB ? styles.red_input : null} value={password} autoComplete="off" />
            <div className={empB? null: styles.hide_content}><p className={styles.red_ps}>{errMsgPassword}</p></div>

            <div className={styles.btn_container}>
                <div className={hideBtn? styles.loading_btn : null}></div>
                <div className={hideBtn? styles.loading_btn2  : null}></div>

                    <button type="submit"  className={hideBtn? styles.button_hide : null}>{buttonText}</button>
            </div>

        </form>
        <p className={styles.md_ps2}>Already on Tighri? <Link to="/signin">Log in</Link> </p>

    <p className={styles.sm_ps}>By clicking on "Create an account" you agree to
the terms of service and cookies policy.</p>
        </div>
  
    </div>
    
    
    
    
}

export default Signup;