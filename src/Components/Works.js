import React, { useState, useEffect } from "react";
import '../Styles/App.css';
import '../Styles/Works.css';
// import Modal from "react-modal";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useAuth } from '../Contexts/AuthContext';
import { v4 } from "uuid";



export default function Works() {
    const { currentUser } = useAuth()

    // const [open, setOpen] = useState(false);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const storageRef = ref(storage, "images/");

    // function openModal() {
    //     setOpen(true)
    // };

    // function closeModal() {
    //     setOpen(false)
    // }

    function handleUpload() {
        if (imageUpload == null) return;

        const imageRef = ref(storage, `images/${currentUser.uid + imageUpload.name + v4()}`)

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
            });
        });

    }

    useEffect(() => {
        console.log(process.env.REACT_APP_FIREBASE_ADMIN_UID)
        listAll(storageRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])


    return (
        <div>
            <header className='header-works'>
                <p>Our Works</p>
            </header>
            <section className='section-flex-column'>
                <h5>THAT'S HOW WE DO IT</h5>
                <h2>Grow your business, establish your brand, and put your customers first.</h2>
                {currentUser && currentUser.uid == process.env.REACT_APP_FIREBASE_ADMIN_UID ? <label>
                    <input type="file" onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                    }}></input>
                    <button onClick={handleUpload}>Upload image</button>
                </label> : <></>}
            </section>
            <section className='section-wrap'>
                {imageList.map((url) => {
                    return <img key={url} src={url} />
                })}
            </section>
        </div>
    )
}