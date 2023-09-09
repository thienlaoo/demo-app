import React from 'react';
import './Pagination.scss';

type Props = {
    total: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
                                                total,
                                                currentPage,
                                                onPageChange,
                                            }) => {
    const totalPages = total;

    // Function to generate a list of 6 pages centered around the current page
    const generatePageList = () => {
        const pageList = [];
        const maxVisiblePages = 6; // Number of pages to show

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageList.push(i);
            }
            return pageList;
        }

        const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
        let startPage = currentPage - halfMaxVisiblePages;
        let endPage = currentPage + halfMaxVisiblePages;

        if (startPage < 1) {
            startPage = 1;
            endPage = maxVisiblePages;
        } else if (endPage > totalPages) {
            startPage = totalPages - maxVisiblePages + 1;
            endPage = totalPages;
        }

        for (let i = startPage; i <= endPage; i++) {
            pageList.push(i);
        }

        return pageList;
    };

    const handlePageClick = (page: number) => {
        if (currentPage !== page && page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <ul className="pagination">
            <li>
                <button
                    className="pagination__page-link"
                    aria-disabled={currentPage === 1}
                    onClick={() => handlePageClick(currentPage - 1)}
                >
                    Previous
                </button>
            </li>
            {generatePageList().map((page) => (
                <li
                    className={currentPage === page ? 'active' : ''}
                    key={page}
                >
                    <button
                        className="pagination__page-link"
                        onClick={() => handlePageClick(page)}
                    >
                        {page}
                    </button>
                </li>
            ))}
            <li>
                <button
                    className="pagination__page-link"
                    aria-disabled={currentPage === totalPages}
                    onClick={() => handlePageClick(currentPage + 1)}
                >
                    Next
                </button>
            </li>
        </ul>
    );
};
