import { AnyAction } from 'redux';
import { MyformData } from '../types/MyformData';

export const setOption = (option: string | null): AnyAction => ({
    type: "SET_SELECTED_OPTION",
    payload: option,
});

export const updateMyformDataAction = (data:MyformData | null) => ({
    type: 'UPDATE_FORM_DATA',
    payload: data,
  });
