import React, { Component } from 'react';
import CardItem from './CardItem';
import CardResult from './CardResult';
import {connect} from 'react-redux';


 class Card extends Component {
	
	render() {
		return (
			<div>			
				<section  className="section">
					<div  className="table-responsive">
						<table  className="table product-table">
							<thead>
								<tr>
									<th></th>
									<th>Sản Phẩm</th>
									<th>Giá</th>
									<th>Số Lượng</th>
									<th>Tổng Cộng</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{this.props.children}
							</tbody>
						</table>
					</div>
				</section>
			</div>
		);
	}
}


export default Card;

