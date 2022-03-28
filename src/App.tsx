import React, { useEffect, useState } from 'react';

function App() {
	const [firstEffect, setFirstEffect] = useState('first effect');
	const [secondEffect, setSecondEffect] = useState('second effect');

	// infinity loof!
	// useEffect(() => {
	// 	setFirstEffect(firstEffect + ' render');
	// }, [firstEffect]);

	console.log('Before first render');
	useEffect(() => {
		console.log(firstEffect);
		setSecondEffect(secondEffect + ' render');
	}, [firstEffect]);
	console.log('Affter first render');

	console.log('Before first render');
	useEffect(() => {
		console.log(secondEffect);
	}, [secondEffect]);
	console.log('Affter first render');

	return (
		<>
			{console.log('return')}
			<button
				onClick={() => {
					setFirstEffect(firstEffect + ' render');
				}}
			>
				first renderer
			</button>
		</>
	);
}

export default App;
