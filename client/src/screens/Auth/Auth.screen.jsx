import React from "react";
<<<<<<< HEAD
import "materialize-css";

const Auth = () => {
    return(
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Authentication</h1>
                <div className="card grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Please Enter Your Credentials</span>
                        <div>
                            <div className="input-field ">
                                <input id="email" type="text" className="validate" />
                                <label htmlFor="email">Enter Login: </label>
                            </div>
                            <div className="input-field ">
                                <input id="password" type="password" className="validate" />
                                <label htmlFor="password">Enter Password: </label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4">Login</button>
                        <span> </span>
                        <button className="btn grey lighten-1 black-text">Register</button>
                    </div>
                </div>
            </div>
            
=======

const Auth = () => {
    return(
        <div>
            <h1>TMP template Auth</h1>
>>>>>>> d1f913a6883721e3f594024d9d8d8d8ac92ea22a
        </div>
    );
}

export default Auth;