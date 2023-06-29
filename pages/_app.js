import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css'
import 'antd/dist/reset.css';
import 'aos/dist/aos.css'
import '../styles/styleBasic.scss'
import React, { useEffect } from 'react';
import ThemeSC from '@/components/ThemsSC';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Head from 'next/head';
import Container from './container';
import ReduxConnectIntl from '@/static/lang';
function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <ThemeSC>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            <ReduxConnectIntl >
              <Container >
                <Component {...pageProps} />

              </Container>
            </ReduxConnectIntl>

          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </ThemeSC>
  )

}

export default MyApp
