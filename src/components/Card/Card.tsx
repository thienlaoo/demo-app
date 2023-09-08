import React from "react";
import "./Card.scss";

export const Card = () => {
    return (
        <div className="card">
            <div className="card_image"></div>
            <div className="card_desc">
                <div className="card_desc_name">Aqua Rick</div>
                <div className="card_desc_info">
                    <div className="card_desc_color"></div>
                    <div className="card_desc_status">unknown - Humanoid</div>
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
