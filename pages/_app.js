import React from 'react'
import App from "next/app";
import Head from "next/head";

import '../styles/globals.css'

export default class MyApp extends App {

  componentDidMount() {
    let comment = document.createComment(`
Author: Keenthemes
Product Name: Seven HTML Free  - Bootstrap 5 HTML Multipurpose Light/Dark Admin Dashboard Theme
Upgrade to Pro: https://keenthemes.com/products/seven-html-pro
Website: http://www.keenthemes.com
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Dribbble: www.dribbble.com/keenthemes
Like: www.facebook.com/keenthemes
License: For each use you must have a valid license purchased only from above link in order to legally use the theme for your project.
=========================================================
* UPDATED by Tofik Nuryanto (https://ndalu.id - https://caket.org)
=========================================================
`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, ctx }) {
    
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>caket.org | ndalu.id</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
            <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true" onClick={ (e) => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
            }}>
              <span className="svg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black"></rect>
                  <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black"></path>
                </svg>
              </span>
            </div>
        </Layout>
      </React.Fragment>
    );
  }
}