import React from 'react';

const BlogAdd = (props) => {
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
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <i className="material-icons prefix">mode_edit</i>
                    <label for="icon_prefix">Post's content</label>
                    <textarea id="icon_prefix" class="materialize-textarea"></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m3 offset-m3">
                    <a class="waves-effect waves-teal btn-flat">Add New Abstract</a>
                </div>
                <div className="col s12 m3 right-align">
                    <a class="waves-effect waves-teal btn-flat">Post Image</a>
                </div>
            </div>
            <div className="row">
                <div className="col s6 m3 offset-m3">
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default BlogAdd;