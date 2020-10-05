import * as types from './../constants/ActionTypes';
import * as messages from './../constants/Message';

var initialState = messages.MSG_CARD_EMPTY;

var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.CARD_SELECTED:
			state = messages.MSG_ADD_TO_CARD_SUCCESS;
			return state;
		case types.DECREASE:
			state = messages.MSG_UPDATE_TO_CARD_SUCCESS;
			return state;
		case types.INCREASE:
			state = messages.MSG_UPDATE_TO_CARD_SUCCESS;
			return state;
		case types.DELETE_ITEM:
			state = messages.MSG_DELETE_TO_CARD_SUCCESS;
			return state;
		default:
			return state;
	}
}

export default myReducer;