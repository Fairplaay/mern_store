import { TextField } from '@material-ui/core';
import React from 'react';

const RenderTextField = ({ input, label, meta, ...custom }) => {
	console.log('meta: ' + meta.touched);
	const err = meta.touched && !!meta.error;
	return (
		<div>
			<TextField
				error={err}
				helperText={err ? meta.error : ''}
				placeholder={label}
				label={label}
				{...input}
				{...custom}
			/>
		</div>
	);
};

export default RenderTextField;
