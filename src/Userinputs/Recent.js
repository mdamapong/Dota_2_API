import { useState, useEffect } from 'react';

export default function Recent(props) {
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
	const url =
		'https://api.opendota.com/api/players/' + input + '/recentMatches';

	const [currentUser, setCurrentUser] = useState(null);
	const [info, setInfo] = useState();
	function getsSearch() {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setInfo(data[0]);
				console.log(data[0]);
				setCurrentUser(data[0]);
			})
			.catch(console.error);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='steamId'>Steam ID32:</label>
				<input value={input} onChange={handleSteamIdChange} />
				<button type='submit'>Search</button>
			</form>
			<section>
				<h4>✴️ Hero: {info?.hero_id}</h4>
				<h4>⚔️ Kills: {info?.kills}</h4>
				<h4>☠️ Deaths: {info?.deaths}</h4>
				<h4>🤝 Assists: {info?.assists}</h4>
				<h4>🕹 xp per min: {info?.xp_per_min}</h4>
				<h4>💰 Gold per min: {info?.gold_per_min}</h4>
				<h4>💥 Heros Damage: {info?.hero_damage}</h4>
				<h4>🗼 Tower Damage: {info?.tower_damage}</h4>
			</section>
		</div>
	);
}
