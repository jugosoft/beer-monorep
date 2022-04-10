import React from 'react';

const HashTag = (props) => {

    const {tag, removeTag} = props;

    return (
        <div className="chip">
            #{tag}
            <i onClick={removeTag} class="close material-icons">close</i>
        </div>
    );
}

export default HashTag;