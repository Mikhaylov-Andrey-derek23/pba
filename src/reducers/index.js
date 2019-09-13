import {combineReducers} from 'redux';
import avtorisation from './avtorisation';
import data from './data';

export default combineReducers({
    data,
    avtorisation
});
