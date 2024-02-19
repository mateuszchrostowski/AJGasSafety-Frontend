import { useAuth } from "../Contexts/AuthContext";
import { useState, useRef } from "react";
import '../Styles/Profile.css';
import '../Styles/App.css';

export default function Profile() {
    const { currentUser, updateName, updatePhoneNumber } = useAuth();
    const nameRef = useRef();
    const telRef = useRef();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    console.log(currentUser)

    const handleUpdateProfile = (name) => {

        const promises = []
        setLoading(true)
        setError("")



        if (nameRef.current.value !== currentUser.displayName) {
            promises.push(updateName(name))
        }
        // if (telRef.current.value !== currentUser.phoneNumber) {
        //     promises.push(updatePhoneNumber(tel))
        // }


        Promise.all(promises)
        // .then(() => {
        //     window.location.reload()
        // })
        .catch(() => {
          setError("Failed to update account")
        })
        .finally(() => {
          setLoading(false)
        })        
                
    }

    return (
        <div>
            <header className='header-profile'>
                <p>Profile</p>
            </header>
            <section className='section-flex-column'>
                <h2>User Details</h2>
                {error && <p id="error">{error}</p>}
            </section>
            <div className='devider'></div>
            <section className='section-profile-grid'>
                <div>
                    <h4 className="profile-title">Full Name</h4>
                    <input
                        placeholder={!currentUser.displayName ? "Not set" : null}
                        defaultValue={currentUser.displayName ? currentUser.displayName : null} type="text"
                        ref={nameRef}>
                    </input>
                </div>
                <div>
                    <h4 className="profile-title">E-Mail</h4>
                    <input type="email" value={currentUser.email} disabled></input>
                </div>
                <div>
                    <h4 className="profile-title">Phone Number</h4>
                    <input
                        type="number"
                        placeholder={!currentUser.phoneNumber ? "Not set" : null}
                        defaultValue={currentUser.phoneNumber ? currentUser.phoneNumber : null}
                        ref={telRef}>
                    </input>
                </div>
                <button onClick={() => handleUpdateProfile(nameRef.current.value)}>Update</button>
            </section>
        </div>)

}