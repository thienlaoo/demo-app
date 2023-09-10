import { AnyAction } from 'redux';
import { FormData } from '../types/FormData';

export const setOption = (option: string | null): AnyAction => ({
    type: "SET_SELECTED_OPTION",
    payload: option,
});

export const updateFormData = (data:FormData) => ({
    type: 'UPDATE_FORM_DATA',
    payload: data,
  });
