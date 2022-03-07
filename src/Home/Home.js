import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Simple app to Check your Dota 2 MMR!</h1>
			<p>
				This app will search for your steam profile linked to your Dota 2
				account. You will need steam ID32
			</p>
			<p>
				You will need steamID32 which can be found by using Steam ID finder
				following this link "https://steamid.xyz/"
			</p>
			<p>id example 86745912</p>
		</div>
	);
};

export default Home;
