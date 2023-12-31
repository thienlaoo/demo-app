import React, { useState } from "react";
import "./Cardlist.scss";
import { Card } from "../Card/Card";
import { CharData } from "../types/CharData";
import { Filter } from "../Filter/Filter";
import { Pagination } from "../Pagination/Pagination";
import { More } from "../More/More";

interface Props {
    chars: CharData[] | null;
}

export const Cardlist: React.FC<Props> = ({ chars }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(6);

    const handlePerPage = (option: number) => {
        setPerPage(option);
        setCurrentPage(1);
    };

    const onPageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

   const displayedChars = () => {
    if (chars) {
        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        return  chars.slice(startIndex, endIndex);
    }
    return [];
   } 

    return (
        <div className="main_container">
            <div className="list_wrapper">
                <Filter />
                <div className="cardlist_container">
                    <div className="cardlist">
                        {displayedChars().map((char, index) => (
                            <Card key={char.id} char={char} />
                        ))}
                    </div>
                </div>
            </div>
            <Pagination
                total={Math.ceil((chars?.length || 0) / perPage)}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
            <More />     
        </div>
    );
};
