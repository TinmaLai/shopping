import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './../components/Card';
import CardItem from './../components/CardItem';
import CardResult from './../components/CardResult';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';

 class CardContainer extends Component {

	render() {
		var {cardList} = this.props;
		if(cardList.length > 0){
			var elmCard = cardList.map((item,index) => {
			return <CardItem
						item={item}
						key={item.product.id}
						index={index}
						onDecrease={this.props.onDecrease}
						onIncrease={this.props.onIncrease}
						onDelete={this.props.onDelete}
						
					/>
			})
			var result = <CardResult cardList={cardList}/>
		}
		
		return (
			<Card>
				{elmCard}
				{result}
			</Card>
		);
	}
}



const mapStateToProps = (state) => {
    return {
        cardList: state.cardList,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
    	onDecrease: (id) => {
    		dispatch(actions.decrease(id))
    	},
    	onIncrease: (id) => {
    		dispatch(actions.increase(id))
    	},
    	onDelete: (id) => {
    		dispatch(actions.deleteItem(id))
    	}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardContainer);
