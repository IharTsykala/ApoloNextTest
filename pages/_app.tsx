import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from "../redux/store";
export type RootState = ReturnType<typeof store.getState>
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/appollo-client/appollo-client";
import MainLayout from "../layouts/MainLayout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ApolloProvider>
    </Provider>
  )

}

export default MyApp