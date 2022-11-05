import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, lightTheme} from '@rainbow-me/rainbowkit';
import {chain, configureChains, createClient, WagmiConfig} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import "./style/index.css"

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.goerli, chain.polygonMumbai],
  [
    alchemyProvider({ apiKey: 'sj0gL5OTojko0WdhPjtxROpfuwtsx3hU' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'ETH-SF',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}
              theme={lightTheme({
                accentColor: '#4f45e4',
                accentColorForeground: 'white',
                borderRadius: 'medium',
              })} coolMode>
      <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider zIndex={2077}>
        <React.StrictMode>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </React.StrictMode>
        </NotificationsProvider>
      </MantineProvider>
    </RainbowKitProvider>
  </WagmiConfig>
);

