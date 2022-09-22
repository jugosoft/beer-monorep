import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '../../hooks/http.hook';

const BeerAdd = () => {

    const { loading, error, request } = useHttp();
    const navigate = useNavigate();

    const [beerForm, setBeerForm] = useState({
        beerName: '',
        beerType: '',
        beerColour: '',
        beerAlcohol: 0
    });

    const changeHandler = event => {
        setBeerForm({ ...beerForm, [event.target.id]: event.target.value })
    }

    const createHandler = async event => {
        event.preventDefault();

        try {
            const response = await request('/api/beer/post', 'POST', { ...beerForm });
            console.log(response);

            M.toast({ html: response.message });

            navigate('/links');

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form>
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <h4>Create Your Beer</h4>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 m6 offset-m3">
                    <input id="beerName" type="text" className="validate" onChange={changeHandler} />
                    <label htmlFor="beerName">Beer Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 m6 offset-m3">
                    <input id="beerType" type="text" className="validate" onChange={changeHandler} />
                    <label htmlFor="beerType">Beer Type</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 m6 offset-m3">
                    <input id="beerColour" type="text" className="validate" onChange={changeHandler} />
                    <label htmlFor="beerColour">Beer Colour</label>
                </div>
            </div>
            <div className="row">
                <div class="input-field col s12 m6 offset-m3">
                    <input id="beerAlcohol" type="text" className="validate" onChange={changeHandler} />
                    <label htmlFor="beerAlcohol">Percentage of Alcohol</label>
                </div>
            </div>
            <div className="row">
                <div class="input-field col s12 m6 offset-m3">
                    <input id="beerAlcohol" type="text" className="validate" onChange={changeHandler} />
                    <label htmlFor="beerAlcohol">Percentage of Alcohol</label>
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

export default BeerAdd;
