import React, { Component } from 'react';
import {connect} from 'react-redux';
import Message from './../components/Message';
import * as actions from './../actions/index';
import PropTypes from 'prop-types';

 class ProductsContainer extends Component {

	render() {
		var showMessage = this.props.message;
		return (
			<Message>
				{showMessage}
			</Message>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
    	
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
