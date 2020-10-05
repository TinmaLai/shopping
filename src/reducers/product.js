import * as types from './../constants/ActionTypes';

var initialState = [
	{
		id: 1,
		name: 'Iphone X',
		description: 'Chip mạnh vãi cả l..',
		price: 500,
		iventory: 10,
		rating: 5,
	},
	{
		id: 2,
		name: 'Xiaomi Redmi 9',
		description: 'GPU cũng được',
		price: 400,
		iventory: 8,
		rating: 4,
	},
	{
		id: 3,
		name: 'Black Shark 3',
		description: 'Chơi game bao mượt',
		price: 500,
		iventory: 8,
		rating: 3,
	}
]

const myReducer = (state = initialState, action) => {
	switch(action.type){
		default: return [...state];
	}
}

export default myReducer;