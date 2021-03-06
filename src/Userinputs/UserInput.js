import { useState, useEffect } from 'react';

export default function UserInput(props) {
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
	const url = 'https://api.opendota.com/api/players/' + input;
	const [error, setError] = useState('');
	const [currentUser, setCurrentUser] = useState(null);
	const [info, setInfo] = useState();
	function getsSearch() {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.error === 'Not Found') {
					return setError(data.error);
				}
				console.log(data);
				setInfo(data);

				setCurrentUser(data);
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
				{!error ? (
					<>
						<div>
							<h2>Steam name: {info?.profile.name}</h2>
							<img src={info?.profile.avatarfull}></img>
						</div>
						<div>Leaderboard: {info?.leaderboard_rank}</div>
						<div>Rank tier: {info?.rank_tier} </div>
						<div>mmr estimate: {info?.mmr_estimate.estimate}</div>
					</>
				) : (
					error
				)}
			</section>
			<br></br>
		</div>
	);
}
