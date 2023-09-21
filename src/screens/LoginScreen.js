import React from "react";
import "./LoginScreen.css";

function LoginScreen() {

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
          alt="bg"
        ></img>
        <button className="loginScreen_button">Sign In</button>
        <div className="loginScreen_gradient"/>
      </div>
      <div className="loginScreen_body">
        <>
        <h1>Unlimited films,TV programmes and more.</h1>
        <h2>watch Anywhere.Cancel Anytime</h2>
        <h3>Ready to watch?Enter your email to create or restart your membership</h3>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
