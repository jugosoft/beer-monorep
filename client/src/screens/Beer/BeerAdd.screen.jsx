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
        setBeerForm({...beerForm, [event.target.id]: event.target.value})
    }

    const createHandler = async event => {
        event.preventDefault();

        try {
            const response = await request('/api/beer/add', 'POST', {...beerForm});
            console.log(response);
            if (response.isOk) {
                navigate('/links');
            }
        } catch {

        }
    }

    return( 
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input id="beerName" type="text" className="validate" onChange={changeHandler} />
                    <label htmlFor="beerName">Beer Name</label>
                </div>
                <div className="input-field col s6">
                    <input id="beerType" type="text" className="validate" onChange={changeHandler}  />
                    <label htmlFor="beerType">Beer Type</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="beerColour" type="text" className="validate" onChange={changeHandler} />
                    <label htmlFor="beerColour">Beer Colour</label>
                </div>
            </div>
            <div className="row">
                <div class="input-field col s12">
                    <input id="beerAlcohol" type="text" className="validate" onChange={changeHandler} />
                    <label htmlFor="beerAlcohol">Percentage of Alcohol</label>
                </div>
            </div>
            <button className="btn yellow darken-4" onClick={createHandler}>CraftBeer</button>
        </form>
    );
}

export default BeerAdd;
