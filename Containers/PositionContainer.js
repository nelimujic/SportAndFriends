import { Container } from "unstated";

export default class PositionContainer extends Container {
	
    state = {
		latitude: 46.49067, 
		longitude: 11.33982,
		geoLocation: null,
		loading: false,
		time:0,
    };

	
	geoLocate = async() => {
		if(this.state.time + 600000 < Date.parse(new Date())) {
			this.setState({time:Date.parse(new Date())});
			await navigator.geolocation.getCurrentPosition(
				position => {
					this.setState({ geoLocation: {lat:position.coords.latitude, lon: position.coords.longitude }});
				},
				error => Alert(error.message),
				{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
			);
		}
	}
	
	setCoordinates = (coords) => {
		this.setState({	latitude:coords.latitude, longitude:coords.longitude});
	}
	
}