// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import { GlobalStyle } from '../components/index.styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp