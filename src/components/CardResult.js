import React, { Component } from 'react';

 class CardResult extends Component {

	render() {
		var {cardList} = this.props;
		return (
			<tr>
				<td colSpan="3"></td>
				<td>
					<h4>
						<strong>Tổng Tiền</strong>
					</h4>
				</td>
				<td>
					<h4>
						<strong>{this.showSubTotal(cardList)}</strong>
					</h4>
				</td>
				<td colSpan="3">
					<button type="button"  className="btn btn-primary waves-effect waves-light">Complete purchase
                <i  className="fa fa-angle-right right"></i>
					</button>
				</td>
			</tr>
		);
	}

	showSubTotal = (card) => {
		var total = 0;
		for(let index in card){
			total += card[index].product.price * card[index].quantity;
		}
		return total;
	}
}

export default CardResult;
