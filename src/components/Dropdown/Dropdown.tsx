import React, { useState, useEffect } from "react";
import "./Dropdown.scss";

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const options: string[] = ["Character", "Location", "Episode"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOptions((prevSelectedOptions) =>
            prevSelectedOptions.includes(option)
                ? prevSelectedOptions.filter((item) => item !== option)
                : [...prevSelectedOptions, option]
        );
    };

    const closeDropdown = () => {
        setIsOpen(false);
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
          {selectedOptions.length === 0
              ? "Select item"
              : selectedOptions.join(", ")}
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
                                        checked={selectedOptions.includes(option)}
                                        onChange={() => handleOptionClick(option)}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};