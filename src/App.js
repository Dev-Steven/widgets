import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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
			<Search />
		</div>
	);
};

export default App;
