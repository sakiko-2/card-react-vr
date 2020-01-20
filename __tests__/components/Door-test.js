import 'react-native';
import 'react-vr';
import React from 'react';
import Door from '../../src/components/Door';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Door />
  );
});
