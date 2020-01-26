import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from '../Style';
import Svg, { Rect } from 'react-native-svg';
import { AnimatedEmoji } from 'react-native-animated-emoji';
import Emoji from 'react-native-emoji';


const Bar = ({ size = 300, color, max, value }) => {
    let absVal = Math.abs(value)
    if (absVal > max) { absVal = max }
    const multiplicator = size / max
    //console.log("absval: " + absVal)
    //console.log("absval * size: " + (absVal * size))
    return (
        <Svg width={size} height={50} >
            <Rect x={0} y={0} width={absVal * multiplicator} height={50} fill={color} />
        </Svg>
    )
}


const TenSteps = ({ color, value, number }) => {

    if (value > 20) {
        return (
            <SafeAreaView>
                <AnimatedEmoji
                    index={1}
                    name={'sports_medal'}
                    style={{ bottom: 10 }}
                    size={50}
                    duration={8000}
                />
                <Text style={{ fontSize: 20, color: color, marginTop: 20, textAlign: 'center' }}>You completed the daily goal. Congratulations! <Emoji name="clap" style={{ fontSize: 20 }} />{"\n"}See you tomorrow for another goal.</Text>

            </SafeAreaView>
        )
    } else {
        return (<Text style={{ fontSize: 20, color: color, marginTop: 20 }}>According to a study there is a minimum number
                                               of steps people should do every day to stay fit. 10 thousand steps, what do you think? Can you do it? <Emoji name="runner" style={{ fontSize: 20 }} /></Text>)
    }



}

export default class HomeCounterComponent extends Component {


    componentDidMount() {
        this.props.getSteps();

    }

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <Text style={styles.title2}>Your current steps: {this.props.currentSteps}</Text>
                <Text style={styles.title2}>Today's goal is 10 000 </Text>

                <SafeAreaView style={styles.bar}>
                    <Bar height="100" color="#aed581" value={this.props.currentSteps} max={10000} />
                </SafeAreaView>
                <SafeAreaView style={styles.tensteps}>

                    <TenSteps color="white" value={this.props.currentSteps} number={9000} />
                </SafeAreaView>

            </SafeAreaView>


        );
    }
}
