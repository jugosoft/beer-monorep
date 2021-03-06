import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Loader, BeerRow } from "../../components";
import useHttp from "../../hooks/http.hook";
import usePagination from "../../hooks/pagination.hook";

const BeersView = () => {

    const { loading, error, request } = useHttp();
    const [beers, setBeers] = useState([]);

    const {
        nextPage,
        prevPage,
        page
    } = usePagination({
        contentPerPage: 10,
        count: 100,
    });


    const fetchData = useCallback(async () => {
        try {
            const data = await request(`/api/beer/get?page=${page}`, 'GET', null);
            setBeers(data.beers);
            M.toast({ html: data.message });
        } catch (e) { }
    }, [request, page]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    if (error) {
        M.toast({ html: error });
    }

    return (
        <div>
            <div className="row">
                <h1>TBeer Links Screen</h1>
            </div>

            <div className="row">
                <NavLink to='/beeradd'>
                    <button className="waves-effect waves-light btn">Craft Beer</button>
                </NavLink>
            </div>

            {loading && <Loader />}

            {!loading &&
                <div className="row">
                    <ul className="collection">
                        {
                            beers.map(beer => 
                                <BeerRow
                                    key={beer._id}
                                    name={beer.beerName}
                                    type={beer.beerType}
                                    colour={beer.beerColour}
                                    alcohol={beer.beerAlcohol} />
                            )}
                    </ul>

                    <ul class="pagination">
                        <li class={page === 1 ? 'disabled' : ''} onClick={prevPage}><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                        <li class="active"><a href="#!">{page}</a></li>
                        <li class="waves-effect" onClick={nextPage}><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                    </ul>
                </div>
            }

        </div>
    );
}

export default BeersView;
