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
			{ label: 'first', important: false, id: '0' },
			{ label: 'second', important: true, id: '1' },
			{ label: 'third', important: false, id: '2' }
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

	render() {
		const { data } = this.state;
		return (
			<div className='app'>
				<AppHeader />
				<div className='search-panel d-flex'>
					<AppSearch />
					<AppFilter />
				</div>
				<AppPostsList
					posts={data}
					delFunc={this.onDelete} />
				<AppAddForm
					addFunc={this.onAdd} />
			</div>
		)
	}
}
