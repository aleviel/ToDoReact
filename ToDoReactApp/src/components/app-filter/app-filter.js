import React from 'react';

import './app-filter.css'

export default function AppFiler() {
	return (
		<div className='btn-group'>
			<button
				type='button'
				className='btn btn-outline-info' >All</button>
			<button
				type='button'
				className='btn btn-outline-secondary'>Marked</button>
		</div>
	)
};
