import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
          <head>

          <script src="https://kit.fontawesome.com/6702496442.js" />
          </head>
        

        <Component {...pageProps} />
        

            {/* <Head> */}

               {/* <script src="https://kit.fontawesome.com/34b1c5b1c5.js"></script> */}
               
            {/* </Head> */}

            
      </Container>
    );
  }
}

export default MyApp;