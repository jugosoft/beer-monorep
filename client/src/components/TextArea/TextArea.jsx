import React, { useState } from 'react';

const TextArea = (props) => {

    const { icon, placeholder, value, handleChange, readonly } = props;

    return (
        <>  
            <i className="material-icons prefix">{icon}</i>
            <textarea placeholder={placeholder} className="materialize-textarea" onChange={handleChange} readOnly={readonly} value={value} />
        </>
    );
}

export default TextArea;
