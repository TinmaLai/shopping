import React, { Component } from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import Card from './components/Card';
import Footer from './components/Footer';
import CardContainer from './containers/CardContainer';
import MessageContainer from './containers/MessageContainer';

 class App extends Component {

	render() {
		return (
			<div>
				<Header/>
				<main id="mainContainer">
					<div  className="container">
						<ProductsContainer/>
						<MessageContainer/>
						<CardContainer/>
					</div>
				</main>			
				<Footer/>
			</div>
		);
	}
}

export default App;
