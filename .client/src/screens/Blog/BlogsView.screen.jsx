import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BlogRow, Loader } from "../../components";
import useHttp from "../../hooks/http.hook";
import usePagination from "../../hooks/pagination.hook";

const BlogsView = () => {

    const { loading, error, request } = useHttp();
    const [blogs, setBlogs] = useState([]);

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
            const data = await request(`/api/blog/get?page=${page}`, 'GET', null);
            setBlogs(data.blogs);
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
                <h1>Blogs Screen</h1>
            </div>

            <div className="row">
                <NavLink to='/blogadd'>
                    <button className="waves-effect waves-light btn">Post New Blog</button>
                </NavLink>
            </div>

            {loading && <Loader />}

            {!loading &&
                <div className="row">
                    <ul className="collection">
                        { blogs.map(blog => {
                                return (
                                    <BlogRow
                                        title={blog.title}
                                        categories={blog.categories} />
                                );
                            })
                        }
                    </ul>

                    <ul className="pagination">
                        <li className={page === 1 ? 'disabled' : ''} onClick={prevPage}><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="active"><a href="#!">{page}</a></li>
                        <li className="waves-effect" onClick={nextPage}><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    </ul>
                </div>
            }
        </div>

    );
}

export default BlogsView;
