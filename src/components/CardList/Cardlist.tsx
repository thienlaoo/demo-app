import React from "react";
import "./Cardlist.scss";
import { Card } from "../Card/Card";
import { CharData } from "../types/CharData";
import {Filter} from "../Filter/Filter";

interface Props {
    chars: CharData[] | null;
}

export const Cardlist: React.FC<Props> = ({ chars }) => {
    const firstSixChars = chars ? chars.slice(0, 6) : [];
    return (
        <div className="main_container">
            <div className="list_wrapper">
                <Filter />
                <div className="cardlist_container">

                    <div className="cardlist">

                        {firstSixChars.map((char, index) => (
                            <Card key={char.id} char={char} />
                        ))}
                    </div>
                </div>
            </div>

        </div>

    );
};
