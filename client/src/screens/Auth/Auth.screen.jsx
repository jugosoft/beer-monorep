import React from "react";
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
            
        </div>
    );
}

export default Auth;