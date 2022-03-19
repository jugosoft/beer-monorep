import React from 'react';
import 'material-icons';

const LinkRow = ({active}) => {
    const classNames = ['collection-item'];
    if (active) {
        classNames.push('active');
    }
    return(
        <li class="collection-item avatar">
            <i class="material-icons circle red">border_color</i>
            <span class="title"><b>Title</b></span>
            <p>First Line</p>
            <p>Second Line</p>
            <a href="#!" class="secondary-content">
                <i class="material-icons">grade</i>
            </a>
        </li>
    );
}

export default LinkRow;