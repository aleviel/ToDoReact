import React, { Component } from 'react';

import AppHeader from '../app-header';
import AppFilter from '../app-filter';
import AppSearch from '../app-search';
import AppPostsList from '../app-posts-list';
import AppAddForm from '../app-add-form';

import './app.css';

export default class App extends Component {
	state = {
		data: [
			{ label: 'first', important: false, done: false, id: '0' },
			{ label: 'second', important: true, done: false, id: '1' },
			{ label: 'third', important: false, done: true, id: '2' }
		],
		term: '',
		filter: 'all'
	}

	maxId = 3;

	onDelete = (id) => {
		this.setState(
			({ data }) => {
				const index = data.findIndex(item => item.id === id);
				const newData = [...data.slice(0, index), ...data.slice(index + 1)];
				return {
					data: newData
				}
			});
	}

	onAdd = (body) => {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++
		}
		this.setState(
			({ data }) => {
				const newArr = [...data, newItem]
				return {
					data: newArr
				}
			}
		)
	}

	onSearchPosts = (text) => {
		this.setState(
			{ term: text }
		)
	}

	searchPosts = (items, term) => {
		if (term.length === 0) {
			return items
		}
		return items.filter(item => item.label.indexOf(term) > -1)
	}

	filterPosts = (items, filter) => {
		if (filter === 'done') {
			return (items.filter(item => item.done));
		}
		return items
	}

	onChangeFilter = (filter) => {
		this.setState(
			{ filter: filter }
		)
	}

	onToggleStatus = (id, selector) => {
		this.setState(
			({ data }) => {
				const index = data.findIndex(item => item.id === id);
				const oldItem = data[index];
				const newItem = { ...oldItem, [selector]: !oldItem[selector] };
				const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
				return {
					data: newData
				}
			}
		)
	}

	render() {
		const
			{ data, term, filter } = this.state,
			allPosts = data.length,
			donePosts = data.filter(item => item.done).length,
			visiblePosts = this.filterPosts(this.searchPosts(data, term), filter);
		return (
			<div className='app'>
				<AppHeader
					allPosts={allPosts}
					donePosts={donePosts}
				/>
				<div className='search-panel d-flex'>
					<AppSearch
						term={term}
						searchFunc={this.onSearchPosts} />
					<AppFilter
						filterPost={this.onChangeFilter}
						filter={this.state.filter} />
				</div>
				<AppPostsList
					posts={visiblePosts}
					delFunc={this.onDelete}
					toggleStatus={this.onToggleStatus} />
				<AppAddForm
					addFunc={this.onAdd} />
			</div>
		)
	}
}
