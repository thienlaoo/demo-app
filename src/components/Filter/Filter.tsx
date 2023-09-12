import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Buttons } from "../Buttons/Buttons";
import { updateFormDataAction } from "../Redux/actions";
import {FormData} from "../types/FormData";
import "./Filter.scss";

export const Filter = () => {
    const dispatch = useDispatch();
    const { control, handleSubmit, getValues } = useForm();
    const [formData, setData] = useState<FormData | null>(null);

    const onSubmit = async () => {
        const updatedData: FormData = {
          keywords: getValues("keywords"),
          keyword_char_name: getValues("keyword_char_name"),
          keyword_char_status: getValues("keyword_char_status"),
          keyword_char_spec: getValues("keyword_char_spec"),
          keyword_char_type: getValues("keyword_char_type"),
          keyword_char_gender: getValues("keyword_char_gender"),
          keyword_loc_name: getValues("keyword_loc_name"),
          keyword_loc_type: getValues("keyword_loc_type"),
          keyword_loc_dimention: getValues("keyword_loc_dimention"),
          keyword_epi_name: getValues("keyword_epi_name"),
          keyword_epi_epi: getValues("keyword_epi_epi"),
        };
      
        setData(updatedData)
        dispatch(updateFormDataAction(updatedData));
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
