import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = location => (
	<div style={{ padding: 16 }}>
		<h1>Page not found - 404</h1>
		<Link to="/">ir a dashboard</Link>
	</div>
);

export default NoMatch;
