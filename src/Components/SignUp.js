import React, { useRef, useState } from "react"
import '../Styles/Forms.css'
import '../Styles/App.css';
import { useAuth } from "../Contexts/AuthContext"
import { useNavigate, Link } from "react-router-dom"
import {database} from '../firebase';
import { NotificationContainer, NotificationManager } from "react-notifications";



export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [errorTitle, setErrorTitle] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {    
            return [setErrorMessage("Passwords do not match"), setErrorTitle("Signing up has failed"), NotificationManager.error(errorMessage, errorTitle)]                     
        }       

        try {
            setErrorMessage("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value).then((e) => {
                console.log(e);
                database.users.doc(`${e.user.uid}`).set({
                    userId: e.user.uid,
                    displayName: e.user.displayName,
                    firstName: null,
                    lastName: null,
                    email: e.user.email,
                    emailVerified: e.user.emailVerified,
                    photoURL: e.user.photoURL,
                    address: {
                        street: null,
                        city: null,
                        postcode: null
                    },
                    phoneNumber: null,
                    refreshToken: e.user.refreshToken,
                    metadata: {
                        creationTime: e.user.metadata.creationTime,
                        lastSignInTime: e.user.metadata.lastSignInTime
                    }
                        
                })
            }
            )
            navigate('/profile')
        } catch {
            setErrorMessage("Failed to create an account")
            NotificationManager.error(errorMessage, errorTitle)
        }

        setLoading(false)
    }

    return (           
        <div className="form">
            <div className="form-body">
                <h2 className="title-color">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        E-mail:
                    </label>
                    <input type="text"
                        id="email"
                        name="email"
                        ref={emailRef}
                        placeholder="Enter your e-mail"
                        required>
                    </input>
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password"
                        id="password"
                        name="password"
                        ref={passwordRef}
                        placeholder="Create your password"
                        required>
                    </input>
                    <label htmlFor="password">
                        Password Confirmation:
                    </label>
                    <input type="password"
                        id="password-confirm"
                        name="password-confirm"
                        ref={passwordConfirmRef}
                        placeholder="Confirm your password"
                        required>
                    </input>
                    <div className="simple-text">{`Already have an account?` + ' '}<Link to="/login" className="link">Login</Link></div> 
                    <button disabled={loading} type="submit">
                        Sign Up
                    </button>                   
                </form>                
                <NotificationContainer/>
            </div>            
        </div> 
    )
}