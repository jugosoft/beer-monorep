import { useState } from "react";

const usePagination = ({ contentPerPage, count }) => {
    const [page, setPage] = useState(1);
    const pageCount = Math.ceil(count / contentPerPage);

    const changePage = (direction) => {
        setPage((state) => {
            if (direction) {
                if (state === pageCount) {
                    return state;
                }
                return state + 1;
            } else {
                if (state === 1) {
                    return state;
                }
                return state - 1;
            }
        });
    };

    return {
        totalPages: pageCount,
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        page
    };
};

export default usePagination;