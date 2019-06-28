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
          <Head>

          <script src="https://kit.fontawesome.com/6702496442.js" />
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6thY8torbKUXm0TrqXC_2mQlkiBnOLQU&libraries=places"></script>

          </Head>
        

        <Component {...pageProps} />
        

            {/* <Head> */}

               {/* <script src="https://kit.fontawesome.com/34b1c5b1c5.js"></script> */}
               
            {/* </Head> */}

            
      </Container>
    );
  }
}

export default MyApp;