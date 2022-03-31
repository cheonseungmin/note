import React, { useEffect, useState } from 'react';

function App() {
	const [toggle, setToggle] = useState(true);
	const [count, setCount] = useState(0);

	console.log('first');
	useEffect(() => {
		console.log('first useEffect');
		setToggle(false);
	}, [count]);

	console.log('second');
	useEffect(() => {
		console.log('second useEffect');
	}, [count]);

	return (
		<>
			{console.log('render')}
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				test order of useEffect
			</button>
		</>
	);
}

export default App;
