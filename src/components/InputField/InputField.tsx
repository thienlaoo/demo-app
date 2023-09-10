import React from "react";

type InputFieldProps = {
    name: string;
    type: string;
    placeholder: string;
    field: any;
};

export const InputField = ({ name, type, placeholder, field }: InputFieldProps) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className="buttons_input"
            {...field}
        />
    );
};
