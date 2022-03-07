import './App.css';
import UserInput from './Userinputs/UserInput';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import WinloseData from './WinLoseData/WinloseData';
import ReactPlayer from 'react-player';
import Recent from './Userinputs/Recent';
import Video from './video/Dotavid.mp4';

function App() {
	return (
		<div class='body'>
			<nav class='navbar'>
				<Link to='/input'>
					<h4 class='leader'>RANK</h4>
				</Link>
				<h4 class='wl'>
					<Link to='/WL'>WIN/LOSE</Link>
				</h4>
				<h4 class='recent'>
					<Link to='/Recent'>RECENT MATCH</Link>
				</h4>
			</nav>
			<div class='content'>
				<header>
					<Link to='/'>
						<h1>YOUR DOTA2 STATS</h1>
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
							<Route path='Recent' element={<Recent />}></Route>
						</Routes>
						<video class='vid' autoPlay loop muted>
							<source src={Video} type='video/mp4' />
						</video>
						{/* <div class='react-player'>
							<ReactPlayer url='https://www.twitch.tv/wagamamatv' controls />
						</div> */}
					</article>
				</main>
			</div>
		</div>
	);
}

export default App;
