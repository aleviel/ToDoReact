import React, { Component } from 'react';

import './app-search.css'

export default class AppSearch extends Component {

	searchFunc = (e) => {
		this.props.searchFunc(e.target.value)
	}

	render() {
		const { term } = this.props
		return (
			<input
				className='form-control search-input'
				type="text"
				placeholder='search...'
				onChange={this.searchFunc}
				value={term} />
		)
	}
}