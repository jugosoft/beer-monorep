import React, { useState } from 'react';
import { TextArea } from '../../components';

const BlogAdd = (props) => {

    const defaultState = {
        id: 0,
        icon: 'mode_edit',
        label: 'Posts content',
        value: '',
        readonly: false
    };

    const [abstracts, setAbstracts] = useState([{ ...defaultState }]);

    const handleNew = (event) => {
        setAbstracts([...abstracts, { ...defaultState, id: abstracts.length }]);
    }   

    const handleChange = (id) => (event) => {

        setAbstracts(prev => {
            let newData = [...prev];
            newData[id].value = event.target.value;
            return [
                ...newData
            ];
        });
    }

    return (
        <form>
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <h4>Blog Create Page</h4>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 m6 offset-m3">
                    <i class="material-icons prefix">mode_edit</i>
                    <input id="blogTitle" type="text" className="validate" data-length="120" />
                    <label htmlFor="blogTitle">Title</label>
                </div>
            </div>
            {abstracts.map((abstract, index) => {
                return (
                    <div className="row">
                        <div className="col s12 m6 offset-m3">
                            <TextArea
                                key={index} //tmp solution
                                icon={abstract.icon}
                                label={abstract.label}
                                value={abstract.value}
                                handleChange={handleChange(index)}
                                readonly={false} />
                        </div>
                    </div>
                );
            })}


            <div className="row">
                <div className="col s12 m3 offset-m3">
                    <a class="waves-effect waves-teal btn-flat" onClick={handleNew}>Add New Abstract</a>
                </div>
                <div className="col s12 m3 right-align">
                    <a class="waves-effect waves-teal btn-flat" onClick={() => alert('add new')}>Post Image</a>
                </div>
            </div>
            <div className="row">
                <div className="col s6 m3 offset-m3">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default BlogAdd;