import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {

  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=optional" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon.ico"
        />
      </Head>
      <body id="kt_body" className="header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled" data-kt-scrolltop="on">
        <Main />
        <NextScript />
        <div id="backdrop" />
      </body>
    </Html>
  )
}