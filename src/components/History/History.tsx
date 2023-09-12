import React, { useState } from 'react';

export const History = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='history_container'>
            <div className='history_desc'></div>
            <button>Close</button>
        </div>
    )
}