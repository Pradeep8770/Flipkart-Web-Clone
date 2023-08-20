import React, { useEffect, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Auothentication/Firebase";
import "./Login.css";


export default function Login({ loginState = true, setloginState = function () { } }) {
  console.log({ loginState })
  const location = useLocation()
  const navigate = useNavigate()
  const [usermoblile, setusermobile] = useState();
  const [otp, setotp] = useState("");
  const [invalidotp, setinvelidotp] = useState(false)
  const [toggle, settoggle] = useState(true);
  const [newuserbtn, setnewuserbtn] = useState(true);
  const [loginSection, setLoginSection] = useState("login-section");
  const [loginform, setLoginform] = useState("login-form");

  const from = location?.pathname;
  console.log(from)


  useEffect(() => {
    if (loginState === false) {
      setLoginSection("login-section");
      setLoginform("login-form");
    } else {
      setLoginSection("login-section show-login-section")
      setLoginform("login-form show-login-container")
    }
  }, [loginState])

  const userInputhandler = (e) => {
    setusermobile(e.target.value);
  };

  const removHandler = ()=>{
    setloginState(false)
    navigate('/')
  }

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
      }
    });
  }

  const requestOtp = (e) => {
    // e.preventDefault();
    if (usermoblile.length >= 10) {
      // console.log({usermoblile})
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      console.log("Captchaverified", appVerifier)
      const phoneNumber = "+91" + usermoblile
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
          console.log("otp sent sucessfully")
          settoggle(false);
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("otp not sent", { error })
        });
    }
  }

  const verifyOtp = () => {
    const confirmationResult = window.confirmationResult
    confirmationResult.confirm(otp).then((result) => {
      // User signed in successfully.
      const user = result.user;
      // ...
      console.log("user is verified", user)
      setloginState(false)
      navigate("/")
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      setinvelidotp(true)
      console.log("otp error", error)
    });
  }

  return (
    <>
      <div className={loginSection}>
        <div className={loginform}>
          <span
            className="removed-class" onClick={() => { removHandler() }}
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
                      autoFocus
                      value={usermoblile}
                      onChange={userInputhandler}
                    />
                    <div id="sign-in-button"></div>
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
                        requestOtp();
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
                    <input
                      type="number"
                      value={otp}
                      max={6}
                      onChange={(e) => {
                        setotp(e.target.value);
                      }}
                    />
                    {invalidotp ?
                      <div className="invalid-otp">
                        <p>please enter valid OTP</p>
                      </div> : null}
                  </div>
                  <div className="verify-btn" onClick={() => { verifyOtp() }}
                  >
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
