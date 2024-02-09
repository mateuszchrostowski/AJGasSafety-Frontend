import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import '../Styles/Forms.css'
import { useAuth } from "../Contexts/AuthContext"
import { useNavigate } from "react-router-dom"


export default function Login() {
    const emailRef = useRef()
       
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const navigate = useNavigate()
    

    async function handleSubmit(e) {
        e.preventDefault()        

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
            // navigate('/')
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <div className="form">
            <div className="form-body">
                <h2 className="title-color">Reset Password</h2>
                {error && <p id="error">{error}</p>}
                {message && <p id="message">{message}</p>}
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
                    <button disabled={loading} type="submit">
                        Reset password
                    </button>                                        
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Link to="/login" className="link">Login</Link>
                        <p className="link">&nbsp;/&nbsp;</p>
                        <Link to="/signup" className="link">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}