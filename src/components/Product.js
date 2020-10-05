import React, { Component } from 'react';
import * as actions from './../actions/index';
import {connect} from 'react-redux';

class Product extends Component {
 	showRating = (rating) => {
 		var result = [];
 		for(var i = 0; i < rating; i++){
 			result.push(<i key={i} className="fa fa-star"></i>);
 		}
 		for(var j = 0; j < 5 - rating; j++){
 			result.push(<i key={j+i} className="fa fa-star-o"></i>);
 		}	
 		return result;
 	}
 	cardSelected = (product) => {
 		this.props.onCardSelected(product);
 	}
	render() {
		var {product, onCardSelected} = this.props;

		return (
			<div  className="col-lg-4 col-md-6 mb-r">
				<div  className="card text-center card-cascade narrower">
					<div  className="view overlay hm-white-slight z-depth-1">
						<img 
							 className="img-fluid" alt="" />
						<div>
							<div  className="mask waves-light waves-effect waves-light"></div>
						</div>
					</div>
					<div  className="card-body">
						<h4  className="card-title">
							<strong>
								<div>{product.name}</div>
							</strong>
						</h4>
						<ul  className="rating">
							<li>
							{this.showRating(product.rating)}
							</li>
						</ul>
						<p  className="card-text">
							{product.description}
                		</p>
						<div  className="card-footer">
							<span  className="left">{product.price}$</span>
							<span onClick={() => this.cardSelected(this.props.product)} className="right">
								<div className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
									<i className="fa fa-shopping-cart"></i>
								</div>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}



export default Product;