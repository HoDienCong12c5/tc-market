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

function MyApp({ Component, pageProps }) {
  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        retry:2
      },
    },
  }), [])

  return (
    <QueryClientProvider client={queryClient}>
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
