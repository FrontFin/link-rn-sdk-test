/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {View} from 'react-native';
import {MeshLinkConnect} from './MeshLinkConnect';

const NetworkChoiceBackground = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}>
      {children}
    </View>
  );
};

const MESH_LINK_TOKEN = '';

function App(): React.JSX.Element {
  return (
    <NetworkChoiceBackground>
      <MeshLinkConnect meshLinkToken={MESH_LINK_TOKEN} />
    </NetworkChoiceBackground>
  );
}

export default App;
