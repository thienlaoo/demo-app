import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Buttons } from "../Buttons/Buttons";
import {FormData} from "../types/FormData";
import "./Filter.scss";

export const Filter = () => {
    const { control, handleSubmit, getValues } = useForm();
    const [formData, setData] = useState<Record<string, any> | null>(null);

    const onSubmit = async (data: Record<string, any>) => {
        const updatedData = getValues();
        console.log(updatedData);
    };

    const [isFilterApplied, setIsFilterApplied] = useState(false);

    const toggleFilter = () => {
        setIsFilterApplied(!isFilterApplied);
    };

    return (
        <form className="filter_wrapper" onSubmit={handleSubmit(onSubmit)}>
            {!isFilterApplied ? (
                <button
                    className="main_button"
                    onClick={toggleFilter}
                    type="submit">
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
                    <Buttons control={control} />
                </div>
            )}


        </form>
    );
};
