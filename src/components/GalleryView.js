import React from 'react';
import GalleryItem from './GalleryItem';
import '../styles/gallery.css';

const GalleryView = (props) => (
    <div>
        <div className="gallery">
            {
                props.pictures.map((pic) => {
                    return <GalleryItem 
                        key={pic.id}
                        picture={pic}
                        handleClick={props.showModalClick}
                    />
                })
            }
        </div>
    </div>
);

export default GalleryView;