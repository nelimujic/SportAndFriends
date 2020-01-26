import { Container } from 'unstated'
import { Pedometer } from 'expo-sensors';

class HomeCounterContainer extends Container {


  state = {

    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
  }


  getSteps = () => {
    this._subscribe();

  }


  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );



  };
}

export default HomeCounterContainer