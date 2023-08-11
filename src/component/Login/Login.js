import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [usermoblile, setusermobile] = useState();
  const [toggle, settoggle] = useState(true);
  const [newuserbtn, setnewuserbtn] = useState(true);
  const [loginSection, setLoginSection] = useState(
    "login-section show-login-section"
  );
  const [loginform, setLoginform] = useState("login-form show-login-container");

  const hideLoginHandler = () => {
    setLoginSection("login-section");
    setLoginform("login-form");
  };
  const userInputhandler = (e) => {
    setusermobile(e.target.value);
  };
  return (
    <>
      <div className={loginSection}>
        <div className={loginform}>
          <span
            className="removed-class"
            onClick={() => {
              hideLoginHandler();
            }}
          >
            <i class="fa-solid fa-xmark"></i>
          </span>
          <div className="login-container">
            <div className="login-left">
              {newuserbtn ? (
                <div className="left-up">
                  <h1>Login</h1>
                  <p>
                    Get access to your Orders, Whishlist and Recommendations
                  </p>
                </div>
              ) : (
                <div className="left-up">
                  <h1>Looks like you're new to here!</h1>
                  <p>sign up with your mobile number to get started</p>
                </div>
              )}
            </div>

            {toggle ? (
              <div className="login-right">
                <div className="right-up">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="__"
                      value={usermoblile}
                      onChange={userInputhandler}
                    />
                    <label>Enter Email/Mobile number</label>
                  </div>
                  <div className="line"></div>
                  <p>
                    By continiuing, you agree to Flipkart's{" "}
                    <span>Terms of Use</span> and <span>Privacy Policy</span>.
                  </p>
                  {newuserbtn ? (
                    <div
                      className="otp-btn"
                      onClick={() => {
                        settoggle(false);
                      }}
                    >
                      <h2>Request OTP</h2>
                    </div>
                  ) : (
                    <div>
                      <div
                        className="otp-btn"
                        onClick={() => {
                          setnewuserbtn(true);
                        }}
                      >
                        <h2>CONTINUE</h2>
                      </div>
                      <div
                        className="existing-user-btn"
                        onClick={() => {
                          setnewuserbtn(true);
                        }}
                      >
                        <h2>Existing User? Log in</h2>
                      </div>
                    </div>
                  )}
                </div>
                {newuserbtn ? (
                  <div
                    className="newuser-btn"
                    onClick={() => {
                      setnewuserbtn(false);
                      setusermobile("");
                    }}
                  >
                    <p>New to Flipkart? Creat an account</p>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="login-verification">
                <div className="verification-group">
                  <div className="verify-input">
                    <p>
                      Plese enter the OTP sent to {usermoblile}.
                      <span
                        onClick={() => {
                          settoggle(true);
                        }}
                      >
                        Change
                      </span>
                    </p>
                    <input />
                  </div>
                  <div className="verify-btn">
                    <h4>Verify</h4>
                  </div>
                  <div className="resend">
                    <p>
                      Not received your code? <span>Resend code</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
