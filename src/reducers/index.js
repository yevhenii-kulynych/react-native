import { combineReducers } from 'redux';
import { rootReducer } from './rootReducer';
import { link } from './link';

export const allReducers = combineReducers({
    rootReducer,
    link
});

