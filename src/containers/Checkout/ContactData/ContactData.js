import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button.js';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		},
		loading: false
	}

	 orderHandler = (event) => {
		event.preventDefault();
		this.setState({loading: true});
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Alex',
				adress: {
					street: 'Test street 1',
					zipCode: '12345',
					country: 'Ukraine'
				},
				email: 'test@test.com'
			},
			deliverMethod: 'fast'
		};
		axios.post('/orders.json', order)
			.then(response => {
				this.setState({loading: false});
				this.props.history.push('/');
			})
			.catch(error => {
				this.setState({loading: false})
			});
	 }

	render () {
		let form = (
			<from>
				<input className={classes.Input} type="text" name="name" placeholder="Your Name" />
				<input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
				<input className={classes.Input} type="text" name="street" placeholder="Street" />
				<input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
				<Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
			</from>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}
		return (
			<div className={classes.ContactData}>
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
