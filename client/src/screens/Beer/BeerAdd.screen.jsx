import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '../../hooks/http.hook';

const BeerAdd = () => {

    const {loading, error, request} = useHttp();
    const navigate = useNavigate();

    const { beerForm, setBeerForm } = useState({
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
            if (response.isOk) {
                navigate('/links');
            }
        } catch {

        }
    }

    return( 
        <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
                    <input id="beerName" type="text" class="validate" onChange={changeHandler} />
                    <label for="beerName">Beer Name</label>
                </div>
                <div class="input-field col s6">
                    <input id="beerType" type="text" class="validate" onChange={changeHandler}  />
                    <label for="beerType">Beer Type</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="beerColour" type="text" class="validate" onChange={changeHandler} />
                    <label for="beerColour">Beer Colour</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="beerAlcohol" type="text" class="validate" onChange={changeHandler} />
                    <label for="beerAlcohol">Percentage of Alcohol</label>
                </div>
            </div>
            <button className="btn yellow darken-4" onClick={createHandler}>CraftBeer</button>
        </form>
    );
}

export default BeerAdd;
