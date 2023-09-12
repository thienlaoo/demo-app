import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Buttons } from "../Buttons/Buttons";
import { updateMyformDataAction } from "../Redux/actions";
import { MyformData } from "../types/MyformData";
import "./Filter.scss";

export const Filter = () => {
    const [isFilterApplied, setIsFilterApplied] = useState(false);

    const toggleFilter = () => {
        setIsFilterApplied(!isFilterApplied);
    };

    return (
        <>
            {!isFilterApplied ? (
                <button
                    className="main_button"
                    onClick={toggleFilter}
                >
                    Filter
                </button>
            ) : (
                <div className="filter_container">
                    <button
                        className="main_button"
                        type="button"
                        onClick={toggleFilter}
                    >
                        Remove Filter
                    </button>
                    <Buttons />
                </div>
            )}
        </>


    );
};
