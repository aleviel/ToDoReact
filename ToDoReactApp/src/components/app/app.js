import React from 'react';

import AppHeader from '../app-header';
import AppFilter from '../app-filter';
import AppSearch from '../app-search';
import AppPostsList from '../app-posts-list';
import AppAddForm from '../app-add-form';

import './app.css';

export default function App() {

	const data = [
		{ label: 'first', important: false, id: 'qwer' },
		{ label: 'second', important: true, id: 'rdsf' },
		{ label: 'third', important: false, id: 'gfsd' }
	]

	return (
		<div className='app'>
			<AppHeader />
			<div className='search-panel d-flex'>
				<AppSearch />
				<AppFilter />
			</div>
			<AppPostsList posts={data} />
			<AppAddForm />
		</div>
	)
};
