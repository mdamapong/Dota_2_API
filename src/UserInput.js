import { useState } from 'react';

export default function UserInput() {
	const [input, setInput] = useState('');
	return (
		<div>
			<label>Steam ID32:</label>
			<input value={input} onInput={(e) => setInput(e.target.value)} />
		</div>
	);
}
