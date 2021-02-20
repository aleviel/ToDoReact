import React from 'react';

import './app-posts-list-item.css'

export default function AppPostsListItem() {
	return (
		<li className='app-list-item d-flex justify-content-between'>
			<span className='app-list-item-label'>Запись № </span>
			<div className="d-flex justify-content-center align-items-center">
				<button className='btn-star btn-sm'>
					<i className='fa fa-star'></i>
				</button>
				<button className='btn-trash btn-sm'>
					<i className='fas fa-trash'></i>
				</button>
				<button className='btn-done btn-sm'>
					<i className="fas fa-check-circle"></i>
				</button>
			</div>
		</li>
	)
};
