import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './Auothentication/Firebase';
import { signOut } from 'firebase/auth';
// console.log("fromlogin",auth.currentUser)


export default function LoginLogout({ setloginState }) {
    const [isLogin, setisLogin] = useState()

    const logOutHandler = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("sign out succefull")
        }).catch((error) => {
            // An error happened.
            console.log("sign out error", error)
        });
    }

    function onChangeHandler(e) {
        e.preventDefault();
        setloginState(true)
        window.history.pushState(null, '', "/login")
    }

    setTimeout(() => {
        console.log("userauthvalue", auth.currentUser)

        if (auth.currentUser) {
            setisLogin(false)
        } else {
            setisLogin(true)
        }

    }, 500);
    console.log({ isLogin })

    return (<>
        {isLogin ?
            <Link to="">
                <div className="parent-drop-down" onClick={onChangeHandler}>
                    <div className="parent-login">
                        <Link to="">Login</Link>
                        <i class="fa-solid fa-right-to-bracket"></i>
                    </div>
                </div>
            </Link>
            :
            <Link >
                <div className="parent-drop-down" onClick={() => { logOutHandler() }}>
                    <div className="parent-login">
                        <Link to="">logout</Link>
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </div>
                </div>
            </Link>
        }
    </>
    )
}
