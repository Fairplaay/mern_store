import React from 'react';
import { compose, withProps } from 'recompose';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `500px` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withScriptjs,
	withGoogleMap
)(props => (
	<GoogleMap defaultZoom={8} defaultCenter={{ lat: 10.4880104, lng: -66.8791885 }}>
		{props.isMarkerShown && <Marker position={{ lat: 10.4880104, lng: -66.8791885 }} />}
	</GoogleMap>
));

export default Map;
