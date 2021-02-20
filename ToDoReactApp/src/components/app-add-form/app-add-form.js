import React from 'react';

import './app-add-form.css'

export default function AppAddForm() {
	return (

		<form className='botton-panel d-flex'>
			<input
				type="text"
				className='form-control new-post-label'
				placeholder='type here...' />
			<button
				type='submit'
				className='btn btn-outline-secondary'>
				Add
			</button>
		</form>

	)
};
