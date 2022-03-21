import React from "react";
import { NavLink } from "react-router-dom";
import LinkRow from '../../components/LinkRow/LinkRow';

const Links = () => {
    return(
        <div>
            <div className="row">
                <h1>TBeer Links Screen</h1>
            </div>
            <div className="row">
                <NavLink to='/beeradd'>
                    <button className="waves-effect waves-light btn">Craft Beer</button>
                </NavLink>
            </div>
            <ul className="collection">
                <LinkRow active = {true}/>
                <LinkRow />
            </ul>
        </div>
    );
}

export default Links;