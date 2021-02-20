import React from 'react';

import AppPostsListItem from '../app-posts-list-item';

import './app-posts-list.css'

export default function AppPostsList() {
	return (
		<ul className='app-list list-group'>
			<AppPostsListItem />
			<AppPostsListItem />
			<AppPostsListItem />
			<AppPostsListItem />
		</ul>
	)
};
