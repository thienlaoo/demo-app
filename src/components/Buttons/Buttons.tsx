import React from "react";
import "./Buttons.scss";
import cn from 'classnames';
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
    const hiddenChar = selectedOption !== "Character" ? 'hidden' : 'text';
    const hiddenLoc = selectedOption !== "Location" ? 'hidden' : 'text';
    const hiddenEpi = selectedOption !== "Episodes" ? 'hidden' : 'text';
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
            

                    <div className="control_wrapper">
                        <Controller
                            name="keyword_char_name"
                            control={control}
                            render={({ field }: { field: any }) => (
                                <InputField name="keywords" type={hiddenChar} placeholder="Add Name" field={field} />
                            )}
                        />
                        <Controller
                            name="keyword_char_status"
                            control={control}
                            render={({ field }: { field: any }) => (
                                <InputField name="keywords" type={hiddenChar} placeholder="Add Status" field={field} />
                            )}
                        />
                        <Controller
                            name="keyword_char_species"
                            control={control}
                            render={({ field }: { field: any }) => (
                                <InputField name="keywords" type={hiddenChar} placeholder="Add Species" field={field} />
                            )}
                        />
                        <Controller
                            name="keyword_char_type"
                            control={control}
                            render={({ field }: { field: any }) => (
                                <InputField name="keywords" type={hiddenChar} placeholder="Add Type" field={field} />
                            )}
                        />
                        <Controller
                            name="keyword_char_gender"
                            control={control}
                            render={({ field }: { field: any }) => (
                                <InputField name="keywords" type={hiddenChar} placeholder="Add Gender" field={field} />
                            )}
                        />
                    </div>
                
            
          
                <div className="control_wrapper">
                    <Controller
                        name="keyword_loc_name"
                        control={control}
                        render={({ field }: { field: any }) => (
                            <InputField name="keywords" type={hiddenLoc} placeholder="Add Name" field={field} />
                        )}
                    />
                    <Controller
                        name="keyword_loc_type"
                        control={control}
                        render={({ field }: { field: any }) => (
                            <InputField name="keywords" type={hiddenLoc} placeholder="Add Type" field={field} />
                        )}
                    />
                    <Controller
                        name="keyword_loc_dimention"
                        control={control}
                        render={({ field }: { field: any }) => (
                            <InputField name="keywords" type={hiddenLoc} placeholder="Add Dimention" field={field} />
                        )}
                    />
                </div>



                <div className="control_wrapper">
                    <Controller
                        name="keyword_epi_name"
                        control={control}
                        render={({ field }: { field: any }) => (
                            <InputField name="keywords" type={hiddenEpi} placeholder="Add Name" field={field} />
                        )}
                    />
                    <Controller
                        name="keyword_epi_episode"
                        control={control}
                        render={({ field }: { field: any }) => (
                            <InputField name="keywords" type={hiddenEpi} placeholder="Add Episodes" field={field} />
                        )}
                    />
                </div>



            <button className="buttons_find" type="submit">
                Find
            </button>
        </div>
    );
};
