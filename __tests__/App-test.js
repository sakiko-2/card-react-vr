import 'react-native';
import 'react-vr';
import React from 'react';
import App from '../src/App';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});
