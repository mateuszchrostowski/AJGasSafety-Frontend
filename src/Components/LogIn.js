import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import '../Styles/Forms.css'
import { useAuth } from "../Contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()    
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault()        

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <div className="form">
            <div className="form-body">
                <h2 className="title-color">Log In</h2>
                {error && <p id="error">{error}</p>}
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
                        placeholder="Enter your password"
                        required>
                    </input>
                    <Link to="/forgot-password" className="link">Forgot Password?</Link>                                   
                    <button disabled={loading} type="submit">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
}