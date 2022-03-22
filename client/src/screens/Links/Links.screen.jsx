import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LinkRow from '../../components/LinkRow/LinkRow';
import useHttp from "../../hooks/http.hook";

const Links = () => {

    const { loading, error, request } = useHttp();
    const [beers, setBeers] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const data = await request('/api/beer/get', 'GET', null);
            setBeers(data.beers);
            M.toast({html: data.message});
        } catch (e) {}
      }, [request]);
    
      useEffect(() => {
        fetchData();
      }, [fetchData]);


    if (error) {
        M.toast({html: error});
    }

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

            { loading && <div>Loading</div> }

            <ul className="collection">
                { beers.map(beer => <LinkRow />)}
            </ul>
        </div>
    );
}

export default Links;