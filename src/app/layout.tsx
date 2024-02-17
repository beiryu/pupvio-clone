import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import Script from 'next/script';
import { cn } from '@/lib/utils';
import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';
import { ToastContainer } from 'react-toastify';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web3App',
  description: 'Web3App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en" className="h-full">
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          className={cn(
            'relative h-full font-sans antialiased',
            inter.className,
          )}
        >
          <main className="relative flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow flex-1 bg-black">{children}</div>
            <Footer />
          </main>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme={'colored'}
          />
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
      </html>
    </StoreProvider>
  );
}
