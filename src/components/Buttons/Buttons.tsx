import React from "react";
import "./Buttons.scss";
import { Dropdown } from "../Dropdown/Dropdown";
import { Controller, Control, FieldValues } from "react-hook-form";

type ButtonsProps = {
    control: Control<FieldValues>;
};

export const Buttons = ({ control }: ButtonsProps) => {
    return (
        <div className="buttons_wrapper">
            <Dropdown />
            <Controller
                name="keywords"
                control={control}
                render={({ field }: { field: any }) => (
                    <input
                        className="buttons_input"
                        type="text"
                        placeholder="Add keywords to find"
                        {...field}
                    />
                )}
            />
            <button className="buttons_find" type="submit">
                Find
            </button>
        </div>
    );
};
