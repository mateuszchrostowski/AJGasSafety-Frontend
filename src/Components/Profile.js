import { useAuth } from "../Contexts/AuthContext";
import { useState, useRef, useEffect } from "react";
import '../Styles/Profile.css';
import '../Styles/App.css';
import { database } from '../firebase';

export default function Profile() {
    const { currentUser, updateName, updatePhoneNumber } = useAuth();
    const nameRef = useRef();
    const telRef = useRef();
    const [error, setError] = useState("")
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)
    const userDataRef = database.users.doc(`${currentUser.uid}`);
   

    useEffect(() => {
        userDataRef.get().then((doc) => {
            setUserData(doc.data())
        })
    }, [])  
    


    const handleUpdateProfile = (name, tel) => {
        const promises = []
        setLoading(true)
        setError("")

       
        if (nameRef.current.value !== currentUser.displayName) {
            promises.push(updateName(name))            
        }

        if (nameRef.current.value !== userData.displayName) {            
            promises.push(handleName(name))
        }

        if (telRef.current.value !== userData.phoneNumber) {
            promises.push(handleNumber(tel))
        }
     

        Promise.all(promises)
            .then(() => {
                window.location.reload()
            })
            .catch(() => {
                setError("Failed to update account")
            })
            .finally(() => {
                setLoading(false)
            })

    }

    const handleNumber = (tel) => {
        database.users.doc(`${currentUser.uid}`).set({
            phoneNumber: tel
        }, { merge: true })
    }
    
    const handleName = (name) => {
        database.users.doc(`${currentUser.uid}`).set({
            displayName: name
        }, { merge: true })
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
                        placeholder={!userData.phoneNumber ? "Not set" : null}
                        defaultValue={userData.phoneNumber ? userData.phoneNumber : null}
                        ref={telRef}>
                    </input>                                      
                </div>
                <button onClick={() => handleUpdateProfile(nameRef.current.value, telRef.current.value)}>Update</button>
            </section>
        </div>)

}