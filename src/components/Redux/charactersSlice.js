import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chars: null,
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setChars: (state, action) => {
            state.chars = action.payload;
        },
    },
});

export const { setChars } = charactersSlice.actions;
export default charactersSlice.reducer;
