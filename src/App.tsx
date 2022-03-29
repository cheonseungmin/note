import React, { useState } from 'react';

function App() {
	const [users, setUsers] = useState([
		{ name: 'foo', age: 26 },
		{ name: 'bar', age: 27 },
	]);

	return (
		<>
			{users.map((user) => {
				return (
					<div key={user.name}>
						<div>{user.name}</div>
						<div>{user.age}</div>
					</div>
				);
			})}
		</>
	);
}

export default App;
