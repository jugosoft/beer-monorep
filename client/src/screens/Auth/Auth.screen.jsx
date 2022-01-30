import React, {useState}  from 'react';
import useHttp from '../../hooks/http.hook';

import "materialize-css";

const Auth = () => {

    const {loading, error, request} = useHttp();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const changeHandler = (event) => {
        setForm({...form, [event.target.id]: event.target.value});
    }

    const registerHandler = async (event) => {
        event.preventDefault();
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            
        } catch (error) {
            
        }
    }

    const loginHandler = async (event) => {
        event.preventDefault();
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
        } catch (error) {
            
        }
    }

    return(
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Authentication</h1>
                <div className="card grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Please Enter Your Credentials</span>
                        <div>
                            <div className="input-field ">
                                <input id="email" type="text" className="validate" onChange={changeHandler} />
                                <label htmlFor="email">Enter Login: </label>
                            </div>
                            <div className="input-field ">
                                <input id="password" type="password" className="validate" onChange={changeHandler} />
                                <label htmlFor="password">Enter Password: </label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" onClick={loginHandler}>Login</button>
                        <span> </span>
                        <button className="btn grey lighten-1 black-text" onClick={registerHandler}>Register</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Auth;
