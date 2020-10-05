import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import * as actions from './../actions/index';
import PropTypes from 'prop-types';

 class ProductsContainer extends Component {

	render() {
		// console.log(1);
		var {products, onCardSelected} = this.props;
		var elmProducts = products.map((product, index) => {
			return <Product
						product={product}
						key={product.id}
						index={index}
						onCardSelected={onCardSelected}
					/>
		});
		return (
			<Products>
				{elmProducts}
			</Products>
		);
	}
}

ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired
}


const mapStateToProps = (state) => {
    return {
        products: state.product,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
    	onCardSelected: (product, quantity) => {
    		dispatch(actions.cardSelected(product, 1));
    	}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
