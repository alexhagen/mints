import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Image from 'react-native-remote-svg'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {prog: 0, statusdark: '#176417', status: '#2f7f2f'};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { prog: previousState.prog + 1 };
      });
    }, 1000);

    setInterval(() => {
      this.setState(previousState => {
        return { status: '#ff5555', statusdark: '#ff0000'}
      });
    }, 5000);
  }
  render() {
    let prog = this.state.prog + '%';
    return (
      <View style={styles.container}>
        <View style={styles.status} backgroundColor={this.state.status}></View>
        <View style={styles.progress} height={prog} backgroundColor={this.state.statusdark}></View>
        <Image source={require('./img/clockface.svg')} style={styles.clockface} />
        <View style={styles.digitalclock}>
          <Text style={styles.laptime}>2:34.15 s</Text>
          <View style={styles.clockrow2}>
            <Text style={styles.pacename}>Pace</Text>
            <Text style={styles.pace}>5:55 /mile</Text>
          </View>
          <View style={styles.clockrow3}>
            <Text style={styles.ttimename}>Total</Text>
            <Text style={styles.ttime}>10:45 s</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockface: {
    position: 'absolute',
    width: 350,
    height: 350
  },
  status: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%'
  },
  progress: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%'
  },
  digitalclock: {
    flex: 1,
    width: 250,
    height: 250,
    alignItems:'center',
    justifyContent:'center'
  },
  laptime: {
    color: 'white',
    fontSize: 54
  },
  clockrow2: {
    width: '100%',
    height: 28
  },
  pacename: {
    color: 'white',
    fontSize: 28,
    textAlign: 'left',
    fontStyle: 'italic',
    position: 'absolute',
    left: 0,
  },
  pace: {
    color: 'white',
    textAlign: 'right',
    fontSize: 28,
    position: 'absolute',
    right: 0
  },
  clockrow3: {
    width: '100%',
    height: 28
  },
  ttimename: {
    color: 'white',
    fontSize: 28,
    textAlign: 'left',
    fontStyle: 'italic',
    position: 'absolute',
    left: 0,
  },
  ttime: {
    color: 'white',
    textAlign: 'right',
    fontSize: 28,
    position: 'absolute',
    right: 0
  }
});
