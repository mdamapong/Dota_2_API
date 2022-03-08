import './App.css';
import UserInput from './Userinputs/UserInput';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import WinloseData from './WinLoseData/WinloseData';
import ReactPlayer from 'react-player';
import Recent from './Userinputs/Recent';

function App() {
	return (
		<div className='body'>
			<nav className='navbar'>
				<Link className='home' to='/1'>
					HOME
				</Link>
				<Link className='rank-link' to='/input'>
					<h4 className='leader'>RANK</h4>
				</Link>
				<h4 className='wl'>
					<Link className='wl-link' to='/WL'>
						WIN/LOSE
					</Link>
				</h4>
				<h4 className='recent'>
					<Link className='recent-link' to='/Recent'>
						RECENT MATCH
					</Link>
				</h4>
			</nav>
			<div className='content'>
				<header>
					<Link className='header' to='/'>
						<h1>YOUR DOTA2 STATS</h1>
					</Link>
				</header>

				<main>
					<article>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/1' element={<Home />} />
						</Routes>
						<Routes>
							<Route path='/input' element={<UserInput />}></Route>
							<Route path='/WL' element={<WinloseData />}></Route>
							<Route path='Recent' element={<Recent />}></Route>
						</Routes>
						{/* <video className='vid' autoPlay loop muted>
							<source src={Video} type='video/mp4' />
						</video> */}
						<div className='react-player'>
							<ReactPlayer
								playing={true}
								loop={true}
								controls={false}
								url='https://www.youtube.com/watch?v=yoS1wMWUkoY'
								controls
							/>
							<ReactPlayer
								playing={true}
								loop={true}
								controls={false}
								url='https://www.twitch.tv/insan1a'
								controls
							/>
						</div>
					</article>
				</main>
			</div>
		</div>
	);
}

export default App;
