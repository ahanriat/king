import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Dimensions,
  DeviceEventEmitter,
  LayoutAnimation,
} from 'react-native';

import App from './src/containers/App';

class king extends Component {
  constructor() {
    super();
    this.state = {
      visibleHeight: Dimensions.get('window').height,
    };
  }
  componentWillMount() {
    this.keyboardDidShowListener = DeviceEventEmitter.addListener(
      'keyboardDidShow',
      this.keyboardDidShow.bind(this)
    );
    this.keyboardDidHideListener = DeviceEventEmitter.addListener(
      'keyboardDidHide',
      this.keyboardDidHide.bind(this)
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow(e) {
    const newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({
      visibleHeight: newSize,
    });
  }

  keyboardDidHide() {
    this.setState({
      visibleHeight: Dimensions.get('window').height,
      topLogo: { width: Dimensions.get('window').width },
    });
  }

  render() {
    return (
      <View style={{ height: this.state.visibleHeight }}>
        <App style={{ backgroundColor: '#000000' }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('king', () => king);
