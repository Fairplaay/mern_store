import React from 'react';
import { Grid } from '@material-ui/core';
import Map from './Map';

const Maps = props => (
	<Grid container spacing={8}>
		<Grid item xs={12}>
			<Map isMarkerShown />
		</Grid>
	</Grid>
);

// const enhance = compose(
// 	withGoogleMap,
// 	withScriptjs
// );
export default Maps;
