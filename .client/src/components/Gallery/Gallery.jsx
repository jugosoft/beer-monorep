import React, { useEffect, useState } from 'react';

const Gallery = (props) => {

    const { images, handleRemoveImage, abstractId } = props;

    useEffect(() => {
        let elems = document.querySelectorAll(".slider");
        M.Slider.init(elems, {
            height: 400,
            duration: 500,
            interval: 1500
        });
    });

    return (
        <div className="slider">
            <ul className="slides">
                {images.map((image) => {
                    return (
                        <li key={image.id}>
                            <img src={image.file} />
                            <div className="caption right-align">
                                {!!handleRemoveImage &&
                                    <a className="btn" onClick={handleRemoveImage(image.id, abstractId)}>
                                        <i className="material-icons">remove_circle</i>
                                    </a>
                                }
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


export default Gallery;