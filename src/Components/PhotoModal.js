import '../Styles/PhotoModal.css'
export default function PhotoModal({
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft
}) {
    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    };

    return (
        <>
            <div className="overlay dismiss" onClick={handleClick}>
                <img src={clickedImg} alt="bigger pic" />
                {/* <span className="dismiss" onClick={handleClick}>
                    X
                </span> */}
                <span class="close-button dismiss material-symbols-outlined">
                    close
                </span>
                <div onClick={handelRotationLeft} className="overlay-arrows_left">
                    <span class="material-symbols-outlined navigate-button">
                        navigate_before
                    </span>
                </div>
                <div onClick={handelRotationRight} className="overlay-arrows_right ">
                    <span class="material-symbols-outlined navigate-button">
                        navigate_next
                    </span>
                </div>
            </div>
        </>
    );
};

