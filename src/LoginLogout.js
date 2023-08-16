import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './Auothentication/Firebase';
import { signOut } from 'firebase/auth';
// console.log("fromlogin",auth.currentUser)


export default function LoginLogout() {
    const [isLogin,setisLogin]=useState()

    const logOutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("sign out succefull")
        }).catch((error) => {
            // An error happened.
            console.log("sign out error", error)
        });
    }
    useEffect(() => {
    console.log("userauthvalue",auth.currentUser)

        if(auth.currentUser){
            setisLogin(false)
        }else{
            setisLogin(true)
        }
        
    },[isLogin]);
    console.log({isLogin})
   
    return (<>
        {isLogin ?
            <Link to="/login">
                <div className="parent-drop-down" onClick={() => { }}>
                    <div className="parent-login">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </Link>
            :
            <Link >
                <div className="parent-drop-down" onClick={() => { logOutHandler() }}>
                    <div className="parent-login">
                        <Link to="">logout</Link>
                    </div>
                </div>
            </Link>
        }
    </>
    )
}
