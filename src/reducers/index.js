import { combineReducers } from 'redux';
import number from './number';
import color from './color';

const reducers = combineReducers({
  colorData: color,
  numberData: number
});

export default reducers;
