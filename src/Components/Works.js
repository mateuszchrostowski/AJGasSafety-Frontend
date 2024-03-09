import React, { useState, useEffect } from "react";
import '../Styles/App.css';
import '../Styles/Works.css';
// import Modal from "react-modal";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useAuth } from '../Contexts/AuthContext';
import { v4 } from "uuid";
import PhotoModal from "./PhotoModal";


export default function Works() {
    const { currentUser } = useAuth()
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const storageRef = ref(storage, "images/");


    function handleUpload() {
        if (imageUpload == null) return;

        const imageRef = ref(storage, `images/${currentUser.uid + "-" + imageUpload.name + v4()}`)

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
            });
        });

    }

    function handleClick(item, index) {
        setCurrentIndex(index);
        setClickedImg(item);
    };

    function handelRotationRight() {
        const totalLength = imageList.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = imageList[0];
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = imageList.filter((item) => {
            return imageList.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    function handelRotationLeft() {
        const totalLength = imageList.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = imageList[totalLength - 1];
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = imageList.filter((item) => {
            return imageList.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };


    useEffect(() => {
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
                <h2>This is how we do it</h2>                
                {currentUser && currentUser.uid == process.env.REACT_APP_FIREBASE_ADMIN_UID ? <label>
                    <input type="file" onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                    }}></input>
                    <button onClick={handleUpload}>Upload image</button>
                </label> : <></>}
            </section>
            <section className='section-wrap'>
                {imageList.map((url, index) => {
                    return <img
                        loading="lazy"
                        className="work-photo"
                        key={index}
                        src={url}
                        onClick={()=>handleClick(url, index)} 
                        />
                })}
            </section>
            <div>
                {clickedImg && (
                    <PhotoModal
                        clickedImg={clickedImg}
                        handelRotationRight={handelRotationRight}
                        setClickedImg={setClickedImg}
                        handelRotationLeft={handelRotationLeft}
                    />
                )}
            </div>
        </div>
    )
}