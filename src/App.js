import './App.css';
import { useEffect, useState } from 'react';
import UserInput from './UserInput';
function App() {
	return (
		<div>
			<h1>Your Dota 2 stats</h1>
			<UserInput />
		</div>
	);
}

export default App;
