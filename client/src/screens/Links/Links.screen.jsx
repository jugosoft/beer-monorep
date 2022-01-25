import React from "react";
import LinkRow from '../../components/LinkRow/LinkRow';
import "materialize-css";

const Links = () => {
    return(
        <div>
            <div className="row">
                <h1>TMP template Links</h1>
            </div>
            <ul className="collection">
                <LinkRow />
                <LinkRow active = {true}/>
                <LinkRow />
            </ul>
        </div>
    );
}

export default Links;