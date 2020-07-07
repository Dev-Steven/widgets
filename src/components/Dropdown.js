import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const refContains = event => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};

		document.body.addEventListener('click', refContains);

		return () => {
			document.body.removeEventListener('click', refContains);
		};
	}, []);

	const renderedOptions = options.map(option => {
		if (option === selected) {
			return null;
		}
		return (
			<div
				key={option.value}
				className='item'
				onClick={() => onSelectedChange(option)}
				style={{ color: option.value }}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className='ui form'>
			<div className='field'>
				<label className='label'>{label}</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${
						open ? 'visible active' : ''
					}`}
				>
					<i className='dropdown icon'></i>
					<div className='text' style={{ color: selected.value }}>
						{selected.label}
					</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;