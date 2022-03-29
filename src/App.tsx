import React from 'react';
import axios from 'axios';
import { format } from 'date-fns';

function App() {
	const date = new Date('2015-10-12 12:00:00');

	console.log(date.toJSON());
	return (
		<>
			<button
				onClick={() => {
					const dateFormatting = format(date, 'yyyy-MM-dd hh:mm');
					const params = {
						dateFormatting: dateFormatting,
					};
					axios.post('url', params);
				}}
			>
				date param test!
			</button>
		</>
	);
}

export default App;
