import * as types from './../constants/ActionTypes';

export const cardSelected = (product, quantity) => {
	return {
		type: types.CARD_SELECTED,
		product,
		quantity,
	}
}

export const decrease = (id) => {
	return {
		type: types.DECREASE,
		id,
	}
}

export const increase = (id) => {
	return {
		type: types.INCREASE,
		id
	}
}

export const deleteItem = (id) => {
	return {
		type: types.DELETE_ITEM,
		id
	}
}