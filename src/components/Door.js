import React from 'react';
import {
  asset,
  Box,
} from 'react-vr';

const Door = () => (
  <Box
    dimWidth={0.72}
    dimDepth={0.1}
    dimHeight={1.2}
    style={{
      opacity: 0.9,
      layoutOrigin: [0.5, 0.5],
      paddingLeft: 0.2,
      paddingRight: 0.2,
      position: 'absolute',
      transform: [{ translate: [0, 0, -3] }],
    }}
    texture={asset('door.png')}
  />
);

export default Door;
