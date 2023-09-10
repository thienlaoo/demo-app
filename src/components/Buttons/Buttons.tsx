import React from "react";
import "./Buttons.scss";
import { Dropdown } from "../Dropdown/Dropdown";
import {Controller, Control, FieldValues, useForm, SubmitHandler} from "react-hook-form";
import { useSelector } from "react-redux";
import {getSelectedOption} from "../Redux/selectors";
import {InputField} from "../InputField/InputField";


type ButtonsProps = {
    control: Control<FieldValues>;
};

export const Buttons = ({ control }: ButtonsProps) => {
    const selectedOption = useSelector(getSelectedOption);

    return (
        <div className="buttons_wrapper">
            <Dropdown/>
            {!selectedOption && (
                <Controller
                    name="keywords"
                    control={control}
                    defaultValue=""
                    render={({ field }: { field: any }) => (
                        <input
                            className="buttons_input"
                            type="text"
                            placeholder="Add keywords to find"
                            {...field}
                        />
                    )}
                />
            )}
            {
                selectedOption === "Character" && (
                    <div className="control_wrapper">
                        <Controller
                            name="keyword_char_name"
                            control={control}
                            render={({ field }: { field: any }) => (
                                <InputField name="keywords" type="text" placeholder="Add Name" field={field} />
                            )}
                        />
                        <Controller
                            name="keyword_char_status"
                            control={control}
                            render={({ field }: { field: any }) => (
                                <InputField name="keywords" type="text" placeholder="Add Status" field={field} />
                            )}
                        />
                        <Controller
                            name="keyword_char_species"
                            control={control}
                            render={({ field }: { field: any }) => (
                                <InputField name="keywords" type="text" placeholder="Add Species" field={field} />
                            )}
                        />
                        <Controller
                            name="keyword_char_type"
                            control={control}
                            render={({ field }: { field: any }) => (
                                <InputField name="keywords" type="text" placeholder="Add Type" field={field} />
                            )}
                        />
                        <Controller
                            name="keyword_char_gender"
                            control={control}
                            render={({ field }: { field: any }) => (
                                <InputField name="keywords" type="text" placeholder="Add Gender" field={field} />
                            )}
                        />
                    </div>
                )
            }
            {selectedOption === "Location" && (
                <div className="control_wrapper">
                    <Controller
                        name="keyword_loc_name"
                        control={control}
                        render={({ field }: { field: any }) => (
                            <InputField name="keywords" type="text" placeholder="Add Name" field={field} />
                        )}
                    />
                    <Controller
                        name="keyword_loc_type"
                        control={control}
                        render={({ field }: { field: any }) => (
                            <InputField name="keywords" type="text" placeholder="Add Type" field={field} />
                        )}
                    />
                    <Controller
                        name="keyword_loc_dimention"
                        control={control}
                        render={({ field }: { field: any }) => (
                            <InputField name="keywords" type="text" placeholder="Add Dimention" field={field} />
                        )}
                    />
                </div>
            )}

            {selectedOption === "Episodes" && (
                <div className="control_wrapper">
                    <Controller
                        name="keyword_epi_name"
                        control={control}
                        render={({ field }: { field: any }) => (
                            <InputField name="keywords" type="text" placeholder="Add Name" field={field} />
                        )}
                    />
                    <Controller
                        name="keyword_epi_episode"
                        control={control}
                        render={({ field }: { field: any }) => (
                            <InputField name="keywords" type="text" placeholder="Add Episodes" field={field} />
                        )}
                    />
                </div>


            )}
            <button className="buttons_find" type="submit">
                Find
            </button>
        </div>
    );
};
