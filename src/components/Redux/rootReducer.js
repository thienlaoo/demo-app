import { combineReducers } from 'redux';
import charactersReducer from './charactersSlice';

const rootReducer = combineReducers({
    characters: charactersReducer,
});

export default rootReducer;
