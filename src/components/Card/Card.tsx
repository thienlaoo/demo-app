import React from "react";
import cn from "classnames";
import "./Card.scss";
import { CharData } from "../types/CharData";
import { Link } from "react-router-dom";

interface Props {
    char: CharData;
}

export const Card: React.FC<Props> = ({ char }) => {
    const { id, name, status, species, image, location, origin } = char;
    const charUrl = `/characters/${id}`;
    return (
        <Link to={charUrl}>
            <div className="card">
                <div className="card_image_container">
                    <img className="card_image" src={`${image}`} alt="char_img" />
                </div>
                <div className="card_desc">
                    <div className="card_desc_name">{name}</div>
                    <div className="card_desc_info">
                        <div className={cn({
                            'card_desc_color__unknown': status === 'unknown',
                            'card_desc_color__alive': status === 'Alive',
                            'card_desc_color__dead': status === 'Dead',
                        })}></div>
                        <div className="card_desc_status">{`${status} - ${species}`}</div>
                    </div>
                    <div className="card_desc_section">
                        <span className="card_desc_text">Last known location:</span>
                        <span className="card_desc_first">{location.name}</span>
                    </div>
                    <div className="card_desc_section">
                        <span className="card_desc_text">First seen in:</span>
                        <span className="card_desc_first">{origin.name}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
