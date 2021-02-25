import React, { Component } from 'react';

import './app-posts-list-item.css'

export default class AppPostsListItem extends Component {
	render() {
		const { label, deleteItem, toggleImportant, toggleDone, important, done } = this.props;

		let classNames = 'app-list-item d-flex justify-content-between';
		if (important) {
			classNames += ' important';
		}
		if (done) {
			classNames += ' done';
		}

		return (
			<div className={classNames} >
				<span
					onClick={toggleDone}
					className='app-list-item-label'>
					{label}
				</span>
				<div className="d-flex justify-content-center align-items-center">
					<button className='btn-star btn-sm'
						onClick={toggleImportant}>
						<i className='fa fa-star'></i>
					</button>
					<button className='btn-trash btn-sm'
						onClick={deleteItem}>
						<i className='fas fa-trash'></i>
					</button>
					<button className='btn-done btn-sm'
						onClick={toggleDone}>
						<i className="fas fa-check-circle"></i>
					</button>
				</div>
			</div>
		)
	}
}