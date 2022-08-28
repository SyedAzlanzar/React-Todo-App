import { Link, useNavigate } from "react-router-dom"
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase-config";


function Signin() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    let navigate = useNavigate()

    const login = async (event) => {
        event.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            navigate("/Todolist")
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
        setLoginEmail('')
        setLoginPassword('')

    };
    return (
        <div className='signin-form-container'>

            <form action="" className='signin-form'>
                <h2>Sign in</h2>
                <fieldset>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='email' value={loginEmail} required onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }} />
                </fieldset>
                <fieldset>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='password' value={loginPassword} required onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }} />
                </fieldset>
                <fieldset>
                    <button className='signin-btn' onClick={login} >Login</button>
                </fieldset>

                <fieldset>
                    <Link to="/">Don't have an account</Link>
                </fieldset>
            </form>
        </div>
    )
}

export default Signin