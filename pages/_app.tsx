import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets, lightTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { NotificationsProvider } from '@mantine/notifications';

const skale = {
  id: 0x2696efe5,
  name: 'Skale',
  network: 'Skale',
  nativeCurrency: {
    decimals: 18,
    name: 'Skale Network ',
    symbol: 'SKALE',
  },
  rpcUrls: {
    default: 'https://eth-sf.skalenodes.com/v1/hackathon-complex-easy-naos',
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  testnet: true,
}

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.polygonMumbai,
    skale
  ],
  [
    alchemyProvider({
      apiKey: 'sj0gL5OTojko0WdhPjtxROpfuwtsx3hU',
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}
              theme={lightTheme({
                accentColor: '#4f45e4',
                accentColorForeground: 'white',
                borderRadius: 'medium',
              })} coolMode>
        <NotificationsProvider>
        <Component {...pageProps} />
        </NotificationsProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
