import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import configuration from "../config";
import { GA_TRACKING_ID } from "../utils/gtag";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {configuration.isProduction && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());
									gtag('config', '${GA_TRACKING_ID}', {
									page_path: window.location.pathname,
									});
								`,
              }}
            />
          </>
        )}
      </Head>
      <body className="bg-secondary p-5 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
