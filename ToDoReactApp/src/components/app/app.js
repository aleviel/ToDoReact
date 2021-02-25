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
		]
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

	onToggleImportant = (id) => {
		this.setState(
			({ data }) => {
				const index = data.findIndex(item => item.id === id)
				const oldItem = data[index];
				const newItem = { ...oldItem, important: !oldItem.important };
				const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
				return {
					data: newData
				}
			}
		)
	}

	onToggleDone = (id) => {
		this.setState(
			({ data }) => {
				const index = data.findIndex(item => item.id === id);
				const oldItem = data[index];
				const newItem = { ...oldItem, done: !oldItem.done };
				const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
				return {
					data: newData
				}
			}
		)
	}

	render() {
		const { data } = this.state;

		const allPosts = data.length;
		const donePosts = data.filter(item => item.done).length;

		return (
			<div className='app'>
				<AppHeader
					allPosts={allPosts}
					donePosts={donePosts}
				/>
				<div className='search-panel d-flex'>
					<AppSearch />
					<AppFilter />
				</div>
				<AppPostsList
					posts={data}
					delFunc={this.onDelete}
					toggleImpFunc={this.onToggleImportant}
					toggleDone={this.onToggleDone} />
				<AppAddForm
					addFunc={this.onAdd} />
			</div>
		)
	}
}
