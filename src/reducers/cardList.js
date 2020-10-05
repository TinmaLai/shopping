import * as types from './../constants/ActionTypes';

var initialState = [


];

var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.CARD_SELECTED:
			var {product, quantity} = action;		
			var flag = 1;
			for(let index in state){
				if(state[index].product === product){
					state[index].quantity++;
					flag = 0;
					break;
				}
			}
			if(flag === 1){
				state.push({
					product,
					quantity
				});
			}
			console.log(state);
			return [...state];
		case types.DECREASE:
			for(let index in state){
				if(state[index].product.id === action.id){
					state[index].quantity = state[index].quantity - 1;
				}
			}
			// console.log(action);
			return [...state];
		case types.INCREASE:
			for(let index in state){
				if(state[index].product.id === action.id){
					state[index].quantity = state[index].quantity + 1;
				}
			}
			// console.log(action);
			return [...state];
		case types.DELETE_ITEM:
			for(let index in state){
				if(state[index].product.id === action.id){
					// 1 2 3 4 4 3 2
					//   1
					let temp = [];
					for(let i = state.length - 1; i >= index; i--){
						temp.push(state.pop());
					}
					for(let i = temp.length - 2; i >= 0; i--){
						state.push(temp[i]);
					}
					return [...state];
				}
			}
			// console.log(action);
		default:
			return [...state];
	}
}

export default myReducer;