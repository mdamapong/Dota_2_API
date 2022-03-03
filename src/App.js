import './App.css';
import { useEffect, useState } from 'react';
import UserInput from './UserInput';
function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		fetch('https://api.opendota.com/api/players/86745912')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data.profile);
				setCurrentUser(data.profile);
			})
			.catch(console.error);
	}, []);
	return (
		<div>
			<h1>Your Dota 2 stats</h1>
			<UserInput />
		</div>
	);
}

export default App;
