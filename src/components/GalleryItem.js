import React from 'react';
import '../styles/gallery-item.css';

const GalleryItem = (props) => (
    <div className="gallery-item" 
         onClick={() => props.handleClick(props.picture.id)}
    >
        <img src={props.picture.preview} alt="Oops... Something wrong." />
    </div>
);

export default GalleryItem;