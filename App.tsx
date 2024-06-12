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

const MESH_LINK_TOKEN = 'aHR0cHM6Ly9mcm9udC13ZWItcGxhdGZvcm0tZGV2LmF6dXJld2Vic2l0ZXMubmV0L2IyYi1pZnJhbWUvYTAwZjRhNjQtYmE0MS00ZWRkLWJmZTQtMDhkYjkzNjA0OWVhL2Jyb2tlci1jb25uZWN0P2F1dGhfY29kZT1WSXRjYW9MY0w0VE56REZRX1dkOHhPX0M4bm92V2gtaDNvTm9MTlg4R3g3Z1VCdm9YUHQ0NmFKOGZzUHRRYjBPRnFqRG9PY0lqSjVYei1CRThETTBXZyZ0cmFuc2Zlcl90b2tlbj16Nm93NndKYzhFM0ZmV2lCeFQ5T3d3JTNkJTNkLno5RVhRcEFZMjhjUlVHT25GWXI2JTJmZGpXV1BxWnJ0Qjl5aDRjUE4yWUhBb2U4YmVXRlZvJTJmQWNqNHpkdXl4a2IyUzh0JTJiZFp3bUdkMGhXUHFyMTdMM1pMbFNsNGc3b0VvODBCUk1HOGgyV2FGZ3k4V3o2WEh1JTJmN0tZSEVqMTVqVGVLVXBnNjNWOGdYdDUlMmZjU1E4VHlQMnclM2QlM2Q=';

function App(): React.JSX.Element {
  return (
    <NetworkChoiceBackground>
      <MeshLinkConnect meshLinkToken={MESH_LINK_TOKEN} />
    </NetworkChoiceBackground>
  );
}

export default App;
