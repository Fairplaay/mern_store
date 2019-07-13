/**
	 __  __                    _         _ _
	|  \/  |_   ___      _____| |__  ___(_) |_ ___
	| |\/| | | | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
	| |  | | |_| |\ V  V /  __/ |_) \__ \ | ||  __/
	|_|  |_|\__, | \_/\_/ \___|_.__/|___/_|\__\___|
			|___/
 */
/**
 * @file RenderTextField
 * @param {Object} props
 */

import { TextField } from '@material-ui/core';
import React from 'react';

const RenderTextField = ({ input, label, meta, ...custom }) => {
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
