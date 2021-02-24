import React from 'react';

import AppPostsListItem from '../app-posts-list-item';

import './app-posts-list.css'

export default function AppPostsList({ posts, delFunc }) {

	const post = posts.map(item => {
		const { id, ...items } = item;
		return (
			<li key={id} className='list-group-item'>
				<AppPostsListItem
					{...items}
					deleteItem={() => { delFunc(id) }} />
			</li>
		)
	})

	return (
		<ul className='app-list list-group'>
			{post}
		</ul>
	)
};
