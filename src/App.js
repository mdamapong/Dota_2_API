import './App.css';
import UserInput from './Userinputs/UserInput';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import WinloseData from './WinLoseData/WinloseData';

function App() {
	return (
		<div class='body'>
			<nav class='navbar'>
				<Link to='/input'>
					<h4>Leaderboard, rank, mmr</h4>
				</Link>
				<Link to='/WL'>Win/Lose</Link>
			</nav>
			<div class='content'>
				<header>
					<Link to='/'>
						<h1>Your Dota 2 stats</h1>
					</Link>
				</header>

				<main>
					<article>
						<Routes>
							<Route path='/' element={<Home />} />
						</Routes>
						<Routes>
							<Route path='/input' element={<UserInput />}></Route>
							<Route path='/WL' element={<WinloseData />}></Route>
						</Routes>
					</article>
				</main>
			</div>
		</div>
	);
}

export default App;
