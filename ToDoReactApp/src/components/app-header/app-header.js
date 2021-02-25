import React from 'react';

import './app-header.css'

export default function AppHeader({ allPosts, donePosts }) {
	return (
		<div className='app-header d-flex'>
			<h1>NameIs </h1>
			<h2>всего {allPosts} / выполнено {donePosts} </h2>
		</div>
	)
};
