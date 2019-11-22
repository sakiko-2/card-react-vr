import React, { Component } from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: false
    };

    this.changeScene = this.changeScene.bind(this);
  }

  changeScene() {
    this.setState(state => ({
      entered: !state.entered
    }));
  };

  render() {
    const { entered } = this.state;
    const background = entered ? 'space.jpg' : 'chess-world.jpg';
    const message = entered ? 'happy birthday' : 'click me';

    return (
      <View>
        <Pano source={asset(background)}/>
        <VrButton onClick={this.changeScene}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}],
            }}>
            {message}
          </Text>
        </VrButton>
      </View>
    );
  }
};
