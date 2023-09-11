import React, { useState } from 'react';
import './More.scss';

export const More = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <>
            {!isOpen ? (
                <>
                    <div className="cardlist_more_wrapper">
                        <button
                            className="cardlist_more"
                            onClick={handleClick}
                        ></button>
                    </div>
                </>
            ) : (
                <>
                    <div className='cardlist_alert_wrapper'>
                        <div className='cardlist_alert'></div>
                    </div>
                    <div className='cardlist_download_wrapper'>
                        <div className='cardlist_download'></div>
                    </div>

                    <div className="cardlist_more_wrapper">
                        <button
                            className="cardlist_close"
                            onClick={handleClick}
                        >X</button>
                    </div>
                </>
            )}
        </>
    );
}
