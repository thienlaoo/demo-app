import { combineReducers } from 'redux';
import charactersReducer from './charactersSlice';
import { formReducer } from './formReducer';

const selectedOptionReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_SELECTED_OPTION':
            return action.payload;
        default:
            return state;
    }
};



const rootReducer = combineReducers({
    characters: charactersReducer,
    selectedOption: selectedOptionReducer,
    updatedData: formReducer,
});

export default rootReducer;
