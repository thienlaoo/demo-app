// actions.ts
import { AnyAction } from 'redux';

export const setOption = (option: string | null): AnyAction => ({
    type: "SET_SELECTED_OPTION",
    payload: option,
});
