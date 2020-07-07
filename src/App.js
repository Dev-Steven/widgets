import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const options = [
	{
		label: 'A shade of Blue',
		value: 'blue',
	},
	{
		label: 'A shade of Orange',
		value: 'orange',
	},
	{
		label: 'A shade of Red',
		value: 'red',
	},
];

const App = () => {
	return (
		<div>
			<Translate />
		</div>
	);
};

export default App;
