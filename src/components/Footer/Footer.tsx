import React from 'react';
import "./Footer.scss";

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer_text"> performed as part of a test <br/> case for the company</div>
            <div className="footer_ellipse">
                <div className="footer_image"></div>
            </div>
            <div className="footer_links">
                <div className="footer_links_git"></div>
                <div className="footer_links_twitter"></div>
                <div className="footer_links_like"></div>
            </div>
            <div className="footer_year">
                2023
            </div>
        </div>
    )
}
