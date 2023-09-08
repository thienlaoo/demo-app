import React from "react";
import "./Cardlist.scss";
import { Card } from "../Card/Card";
import { CharData } from "../types/CharData";

interface Props {
    chars: CharData[] | null;
}

export const Cardlist: React.FC<Props> = ({ chars }) => {
    return (
        <div className="cardlist">
            {chars? (chars.map((char) => (
                <Card key={char.id} char={char} />
            ))) : (null)}
        </div>
    );
};
