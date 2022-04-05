import React, { useEffect, useState } from 'react';

const Gallery = (props) => {

    const { images } = props;

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
                        <li>
                            <img src={image} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


export default Gallery;