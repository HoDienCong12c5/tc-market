import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css'
import 'antd/dist/reset.css';
import 'aos/dist/aos.css'
import '../styles/styleBasic.scss'
import React, { useMemo, useState } from 'react';
import Container from './container';
import ReduxConnectIntl from '@/static/lang';
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from '@/redux/configureStore';
import { Provider } from 'react-redux';
import Head from 'next/head';

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
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no' />
      </Head>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store} >
          <PersistGate loading={null} persistor={persistor }>
            <ReduxConnectIntl >
              <Container >
                <Component {...pageProps} />
              </Container>
            </ReduxConnectIntl>
          </PersistGate>
        </Provider>

      </Hydrate>
    </QueryClientProvider>
  )

}

export default MyApp
