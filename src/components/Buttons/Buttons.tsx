import React from "react";
import "./Buttons.scss";
import { Dropdown } from "../Dropdown/Dropdown";
import { Controller, useForm } from "react-hook-form";
import { MyformData } from "../types/MyformData";
import { useDispatch, useSelector } from "react-redux";
import { updateMyformDataAction } from "../Redux/actions";
import { getSelectedOption } from "../Redux/selectors";
import { InputField } from "../InputField/InputField";


export const Buttons = () => {
    const dispatch = useDispatch();
    const { control, handleSubmit, getValues } = useForm();
    const selectedOption = useSelector(getSelectedOption);
    const hiddenChar = selectedOption !== "Character" ? 'hidden' : 'text';
    const hiddenLoc = selectedOption !== "Location" ? 'hidden' : 'text';
    const hiddenEpi = selectedOption !== "Episodes" ? 'hidden' : 'text';

    const onSubmit = async () => {
        const updatedData: MyformData = {
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

        dispatch(updateMyformDataAction(updatedData));
    };

    return (
        <form className="filter_wrapper" onSubmit={handleSubmit(onSubmit)}>
            <div className="buttons_wrapper">
                <Dropdown />
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
        </form>

    );
};
