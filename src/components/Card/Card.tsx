import React from "react";
import "./Card.scss";
import {CharData} from "../types/CharData";

interface Props {
    char: CharData;
}

export const Card:React.FC<Props> = ({char}) => {
    const { name, status, species} = char;
    return (
        <div className="card">
            <div className="card_image"></div>
            <div className="card_desc">
                <div className="card_desc_name">{name}</div>
                <div className="card_desc_info">
                    <div className="card_desc_color"></div>
                    <div className="card_desc_status">`${status} - ${species}`</div>
                </div>
                <div className="card_desc_section">
                    <span className="card_desc_text">Last known location:</span>
                    <span className="card_desc_first">Citadel of Ricks</span>
                </div>
                <div className="card_desc_section">
                    <span className="card_desc_text">First seen in:</span>
                    <span className="card_desc_first">Close Rick-counters of the Rick Kind</span>
                </div>
            </div>
        </div>
    );
};
