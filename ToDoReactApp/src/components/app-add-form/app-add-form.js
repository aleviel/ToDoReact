import React, { Component } from 'react';

import './app-add-form.css'



export default class AppAddForm extends Component {
	state = {
		inputBody: ''
	}

	onTextChange = (e) => {
		this.setState({
			inputBody: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		if (this.state.inputBody !== '') {
			this.props.addFunc(this.state.inputBody)
		}

		this.setState({
			inputBody: ''
		})
	}

	render() {
		const { inputBody } = this.state;
		return (
			<form className='botton-panel d-flex'
				onSubmit={this.onSubmit}>
				<input
					type="text"
					className='form-control new-post-label'
					placeholder='type here...'
					onChange={this.onTextChange}
					value={inputBody} />
				<button
					type='submit'
					className='btn btn-outline-secondary'>
					Add
				</button>
			</form >
		);
	}
}
