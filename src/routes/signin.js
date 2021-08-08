import React, { useState } from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
//import {authenticate, isAuth} from "./auth"
import Google from "./googleAuth";
import styles from "../styles/forms.module.css"

function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [buttonText, setButtonText] = useState("Submit");
    const [hideBtn, setHideBtn] = useState(false);
    const [errMsgEmail, setErrMsgEmail] = useState("");
    const [errMsgPassword, setErrMsgPassword] = useState("");
    const [emeB, setEmeB] = useState(false);
    const [empB, setEmpB] = useState(false);

      async  function handelSubmit(e){
            e.preventDefault();
             setHideBtn(true);

                 const registerData = {
                    email, password
                 };
                 
            
           
        }
  
    return <div>
  
        
    {/* {isAuth()? <Redirect to="/" />: null } */}
<div className={styles.nav}>

</div>
<div className={styles.sign_up}>
<h1>Welcome back!</h1>
<div className={styles.auth_methods}>
            <Google/>
            <div className={styles.google}>
            <img src="./images/facebook.png" alt="facebook" />  Continue with Facebook

            </div>
        </div>
        <div className={styles.or_methods}>
        <div className={styles.or_methods_div}></div>
        <p>OR</p>
        <div className={styles.or_methods_div}></div>
        </div>

<form className={styles.form} onSubmit={handelSubmit}>
    <label for="email">Email:</label>
    <input id="email" type="email" placeholder="Example@email.com" onChange={(e)=> setEmail(e.target.value)} value={email} className={emeB ?  styles.red_input : null} autoComplete="off" />
    <div className={emeB? null: styles.hide_content}><p className={styles.red_ps}>{errMsgEmail}</p></div>
    <label for="password">Password:</label>
    <input id="password" type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)} className={empB ?  styles.red_input : null} value={password} />
    <div className={empB? null: styles.hide_content}><p className={styles.red_ps}>{errMsgPassword}</p></div>

    <div className={styles.btn_container}>
                <div className={hideBtn? styles.loading_btn3 : null}></div>
                <div className={hideBtn? styles.loading_btn4  : null}></div>
                <p className={styles.md_ps} >Forgot password? <Link to="forgot-password">Reset password</Link></p>

                    <button type="submit"  className={hideBtn? styles.button_hide : null}>{buttonText}</button>
            </div>

</form>
<p className={styles.md_ps2} >No account? <Link to="signup">Sign Up</Link></p>

<p className={styles.sm_ps}>By clicking on "Create an account" you agree to
the terms of service and cookies policy.</p>
</div>

      
    </div>
    
    
}

export default Signin;