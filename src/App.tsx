import React, { useEffect, useState } from 'react';

function App() {
	const [a, setA] = useState('a');
	const [b, setB] = useState('b');

	useEffect(() => {
		console.log('a: ', a);
		console.log('b: ', b);
	}, [a, b]);

	const onClickA = () => {
		setA(a + 'a');
	};

	const onClickB = () => {
		setB(b + 'b');
	};

	const onClickBoth = () => {
		setA(a + 'a');
		addA(a + 'a');
	};

	const addA = (value: string) => {
		setA(value + 'a');
	};

	return (
		<>
			<button onClick={onClickA}>A</button>
			<button onClick={onClickB}>B</button>
			<button onClick={onClickBoth}>Both</button>
		</>
	);
}

export default App;
