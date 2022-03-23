import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import { Button } from '@mui/material';

function MuiButton() {
	return <Button>MuiButton</Button>;
}

class RendererTest {
	el: HTMLDivElement;
	constructor(props: any) {
		this.el = document.createElement('div');

		this.render();
	}

	getElement() {
		return this.el;
	}

	render() {
		ReactDOM.render(<MuiButton />, this.el);
	}
}

function App() {
	const [columns] = useState([
		{
			header: 'NO.',
			name: 'number',
			renderer: {
				type: RendererTest,
			},
		},
		{
			header: 'name',
			name: 'name',
		},
	]);
	const [rowData] = useState([
		{
			number: '1',
			name: 'foo',
		},
		{
			number: '2',
			name: 'bar',
		},
	]);
	return (
		<div>
			<Grid columns={columns} data={rowData} />
			<MuiButton />
		</div>
	);
}

export default App;
