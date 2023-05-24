import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-135449174-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'UA-135449174-1');
        `}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	   })(window,document,'script','dataLayer','GTM-WSP5QPV');
      `}
      </Script>

      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
