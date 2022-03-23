import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import { CellRendererProps } from 'tui-grid/types/renderer';
import { Button } from '@mui/material';

function MuiButton() {
	return <Button>MuiButton</Button>;
}

class RendererTest {
	el: HTMLDivElement;
	constructor(props: CellRendererProps) {
		this.el = document.createElement('div');

		this.render(props);
	}

	getElement() {
		return this.el;
	}

	render(props: CellRendererProps) {
		if (props.columnInfo.renderer.options) {
			const { onClickButton } = props.columnInfo.renderer.options;
			ReactDOM.render(
				<Button
					onClick={() => {
						onClickButton();
					}}
				>
					MuiButton
				</Button>,
				this.el,
			);
		}
	}
}

function App() {
	const [columns] = useState([
		{
			header: 'NO.',
			name: 'number',
			renderer: {
				type: RendererTest,
				options: {
					onClickButton: () => {
						alert('onClick!');
					},
				},
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
