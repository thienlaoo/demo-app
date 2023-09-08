import React from 'react';
import "./Header.scss";

export const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header_nav">
                <div className="header_logo"></div>
            </div>
            <div className="header_text">
                The Rick and Morty API
            </div>
        </div>

    )
}