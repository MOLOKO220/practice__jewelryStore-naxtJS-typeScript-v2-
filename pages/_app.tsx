import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { storage } from "../storage";

import Head from "next/head";
import Wrapper from "../component/Wrapper/Wrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={storage}>
      <Head>
        <link href="./Gilroy/stylesheet.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  );
}
