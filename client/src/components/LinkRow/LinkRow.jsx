import React from 'react';
import 'material-icons';

const LinkRow = (props) => {

    const { name, type, colour, alcohol } = props;

    return(
        <li class="collection-item avatar">
            <i class="material-icons circle red">border_color</i>
            <span class="title"><b>{ name }</b>, type is { type }</span>
            <p>Alcohol={ alcohol }%</p>
            <p>Its colour is { colour }</p>
            <a href="#!" class="secondary-content">
                <i class="material-icons">grade</i>
            </a>
        </li>
    );
}

export default LinkRow;