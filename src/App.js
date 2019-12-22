import React, { Component } from 'react';
import {
  asset,
  Pano,
  View,
  VrButton,
} from 'react-vr';
import Door from './components/Door';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: false,
    };

    this.changeScene = this.changeScene.bind(this);
  }

  changeScene() {
    this.setState((state) => ({
      entered: !state.entered,
    }));
  }

  render() {
    const { entered } = this.state;
    const background = entered ? 'space.jpg' : 'metro.jpg';

    return (
      <View>
        <Pano source={asset(background)}/>
        <VrButton onClick={this.changeScene}>
          <Door />
        </VrButton>
      </View>
    );
  }
}
