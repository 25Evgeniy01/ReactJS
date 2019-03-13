import {combineReducers} from 'redux';
import SettingsLines from './settingsLines';

const allReducers = combineReducers({
    settingsLine: SettingsLines,
});

export default allReducers;