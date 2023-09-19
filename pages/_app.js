import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css'
import 'antd/dist/reset.css';
import 'aos/dist/aos.css'
import '../styles/styleBasic.scss'
import React, { useMemo } from 'react';
import Container from './container';
import ReduxConnectIntl from '@/static/lang';
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from '@/redux/configureStore';
import { Provider } from 'react-redux';
import Head from 'next/head';
import AntdProvider from '@/components/AntdProvider';

function MyApp({ Component, pageProps }) {
  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry:2
      },
    },
  }), [])

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />
      </Head>
      <Hydrate state={pageProps.dehydratedState}>
        <AntdProvider >
          <Provider store={store} >
            <PersistGate loading={null} persistor={persistor }>
              <ReduxConnectIntl >
                <Container >
                  <Component {...pageProps} />
                </Container>
              </ReduxConnectIntl>
            </PersistGate>
          </Provider>
        </AntdProvider>


      </Hydrate>
    </QueryClientProvider>
  )

}

export default MyApp
