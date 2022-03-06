import { useState, useEffect } from 'react';

export default function WinloseData(props) {
	const [input, setInput] = useState('');

	const handleSubmit = (e) => {
		console.log('submit');
		e.preventDefault();
		getsSearch();

		console.log(input);
	};
	const handleSteamIdChange = (e) => {
		setInput(e.target.value);
	};
	const url = 'https://api.opendota.com/api/players/' + input + '/wl';
	const [currentUser, setCurrentUser] = useState(null);
	const [info, setInfo] = useState();

	function getsSearch() {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setInfo(data);
				console.log(data);
				setCurrentUser(data);
			})
			.catch(console.error);
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='steamId'>Steam ID32:</label>
				<input value={input} onChange={handleSteamIdChange} />
				<button type='submit'>Search</button>
			</form>
			<h4>Win: {info?.win} </h4>
			<h4>Lose: {info?.lose}</h4>
		</>
	);
}
