import React from 'react';
import Accordion from './components/Accordion';

const items = [
	{
		title: 'What is React?',
		content: 'Frontend JS framework',
	},
	{
		title: 'Why React?',
		content: 'It is the shit',
	},
	{
		title: 'How to React?',
		content: 'Use components',
	},
];

const App = () => {
	return (
		<div>
			<Accordion items={items} />
		</div>
	);
};

export default App;
