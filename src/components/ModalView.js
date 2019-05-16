import React from 'react';
import '../styles/modal.css';

const ModalView = (props) => {
    const show = props.show;
    const picture = props.picture;
    if (show) {
        return (
            <div className="modal">
                <div className="content-holder">
                    <div className="back" onClick={() => {
                        props.prevPictureClick(picture.id);
                    }}>
                        <i className="fa fa-chevron-left fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="img-container">
                        <img src={picture.image} alt="oopppa(((" />
                    </div>
                    <div className="closer" onClick={props.closeModalClick}>
                        <div>
                            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="forvard" onClick={() => {
                        props.nextPictureClick(picture.id);
                    }}>
                        <i className="fa fa-chevron-right fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default ModalView;



