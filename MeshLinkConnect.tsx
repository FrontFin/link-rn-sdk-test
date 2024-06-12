// /* eslint-disable no-console */
import React from 'react';
import {
  LinkConnect,
  LinkPayload,
  TransferFinishedPayload,
  TransferFinishedSuccessPayload,
  TransferFinishedErrorPayload,
  LinkEventType,
} from '@meshconnect/react-native-link-sdk';

interface MeshLinkConnectProps {
  meshLinkToken: string;
}

export const MeshLinkConnect: React.FC<MeshLinkConnectProps> = ({
  meshLinkToken,
}) => {
  if (!meshLinkToken) {
    return null; // Render nothing if meshLinkToken is not present
  }

  const handleIntegrationConnected = (payload: LinkPayload) => {
    console.log('onIntegrationConnected', payload);
  };

  const handleTransferFinished = (payload: TransferFinishedPayload) => {
    if (payload.status === 'success') {
      const successPayload = payload as TransferFinishedSuccessPayload;
      console.log('handleTransferFinished.successPayload', successPayload);
    } else {
      const errorPayload = payload as TransferFinishedErrorPayload;
      console.log('handleTransferFinished.errorPayload', errorPayload);
    }
  };

  const handleExit = (err?: string) => {
    console.log('onExit', err);
  };

  const handleEvent = (event: LinkEventType) => {
    console.log('onEvent', event);
  };

  return (
    <LinkConnect
      linkToken={meshLinkToken}
      settings={{
        accessTokens: [],
        transferDestinationTokens: [],
      }}
      onIntegrationConnected={handleIntegrationConnected}
      onTransferFinished={handleTransferFinished}
      onExit={handleExit}
      onEvent={handleEvent}
    />
  );
};
