import React from 'react';
import "./Header.scss";

export const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header_nav">
                <div className="header_logo"></div>
            </div>
            <div className="header_container">
                <div className="header_text">
                    The Rick and Morty API
                </div>
                <div className="header_background">
                    <div className="header_background_rick"></div>
                    <div className="header_background_rick__hand"></div>
                    <div className="header_background_morty"></div>

                </div>
            </div>



        </div>

    )
}