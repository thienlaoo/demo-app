import React, { useState, useEffect } from "react";
import "./Dropdown.scss";
import { useDispatch } from 'react-redux';
import { setOption } from "../Redux/actions";

export const Dropdown = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const options: string[] = ["Character", "Location", "Episodes"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleOptionClick = (option: string) => {
        dispatch(setOption(option));

        setSelectedOption((prevSelectedOption) => (
            prevSelectedOption === option ? null : option
        ));
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                closeDropdown();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                <span>
                    {!selectedOption ? "Select item" : selectedOption}
                </span>
                <span className="dropdown-icon">&#9660;</span>
            </button>
            {isOpen && (
                <div className="dropdown-overlay">
                    <ul className="dropdown-list">
                        {options.map((option) => (
                            <li key={option} className="dropdown-item">
                                <label>
                                    <input
                                        type="checkbox"
                                        className="dropdown-checkbox"
                                        checked={selectedOption === option}
                                        onChange={() => handleOptionClick(option)}
                                    />
                                    <div className="wrapper">
                                        {option}
                                    </div>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
