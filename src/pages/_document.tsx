import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/logo.png" sizes="any" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <Script
          async
          defer
          strategy="afterInteractive"
          id="google-translate-script"
          dangerouslySetInnerHTML={{
            __html: ` 
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement(
                    {
                      defaultLanguage: 'en',
                      pageLanguage: 'en',
                      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    },
                    'google_translate_element'
                  )
                };
            `,
          }}
        />
        <Script
          async
          defer
          strategy="afterInteractive"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
      </Html>
    );
  }
}

export default MyDocument;
