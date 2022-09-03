import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase-config';


function Signup({ getData }) {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    let navigate = useNavigate()


    const register = async (event) => {
        event.preventDefault();

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            getData(user)
            navigate("/Todolist")
        }
        catch (error) {
            console.log(error.message)
        }
        setRegisterEmail('')
        setRegisterPassword('')

    };



    return (

        <div className='signup-form-container' >

            <form className='signup-form' onSubmit={register}>
                <h2>Let's get started</h2>
                <fieldset>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='email' value={registerEmail} required onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }} />
                </fieldset>

                <fieldset>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='password' value={registerPassword} required onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }} />
                </fieldset>
                <fieldset>
                    <button className='signup-btn' onClick={register} >Sign up</button>
                </fieldset>

                <fieldset>
                    <Link to="/Signin/Signin">Already have an account</Link>
                </fieldset>
            </form>
        </div>

    )
}


export default Signup