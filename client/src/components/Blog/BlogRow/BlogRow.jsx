import React from 'react';
import 'material-icons';

const BlogRow = (props) => {

    const { title, categories } = props;

    return(
        <li class="collection-item avatar">
            <i class="material-icons circle red">border_color</i>
            <span class="title"><b>{ title }</b></span>
            { !!categories && categories.filter((cat, index) => index < 3)
                .map((category, index) => <div key={index} className="chip">{category}</div>)}
            <a href="#!" class="secondary-content">
                <i class="material-icons">grade</i>
            </a>
        </li>
    );
}

export default BlogRow;