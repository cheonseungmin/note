import React, { useEffect, useState } from 'react';

function App() {
	const [firstEffect, setFirstEffect] = useState('first effect');
	const [secondEffect, setSecondEffect] = useState('second effect');
	const [thirdEffect, setThirdEffect] = useState('third effect');

	console.log('first useEffect');
	useEffect(() => {
		console.log('first useState');
		setSecondEffect(secondEffect + ' render');
	}, [firstEffect]);

	console.log('second useEffect');
	useEffect(() => {
		console.log('second useState');
		console.log(secondEffect);
		setThirdEffect(thirdEffect + ' render');
	}, [secondEffect]);

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
			<br />
			{firstEffect} <br />
			{secondEffect} <br />
			{thirdEffect} <br />
		</>
	);
}

export default App;
