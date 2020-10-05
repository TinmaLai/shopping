import {combineReducers} from 'redux';
import product from './product';
import cardSelected from './cardSelected';
import cardList from './cardList';
import message from './message';

const appReducers = combineReducers({
	product,
	cardSelected,
	cardList,
	message,
})

export default appReducers;
