import React, { useState } from 'react';

const TextArea = (props) => {

    const { icon, label, value, handleChange, readonly } = props;

    // const handleChange = (event) => {
    //     setState(event.target.value);
    // }

    return (
        <>  
            <i className="material-icons prefix">{icon}</i>
            <label>{label}</label>
            <textarea className="materialize-textarea" onChange={handleChange} readOnly={readonly} value={value} />
        </>
    );
}

export default TextArea;
