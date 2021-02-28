import React, { Component } from 'react';

import './app-filter.css'

export default class AppFiler extends Component {

	buttons = [
		{ name: 'all', label: 'All' },
		{ name: 'done', label: 'Done' }
	]

	render() {
		const buttons = this.buttons.map(({ name, label }) => {
			const { filterPost, filter } = this.props;
			const classz = name === filter;
			const classBtn = classz ? 'btn btn-info' : 'btn btn-outline-info'
			return (
				<button
					key={name}
					type='button'
					className={classBtn}
					onClick={() => { filterPost(name) }}>
					{ label}
				</button >
			)
		})

		return (
			<div className='btn-group' >
				{ buttons}
			</div>
		)
	}
};
