import React from 'react';
import IMAGES from '../../assets';

const Loader = (props) => {
    return (
        <div className="row center">
            <div class="col s12">
                <img class="responsive-img circle z-depth-1" src={IMAGES.theme.loader.white} style={{ height: '200px', width: '200px'}} alt="Loading Loader" />
            </div>
        </div>
    );
}

export default Loader;