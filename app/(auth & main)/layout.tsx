import Providers from '@store/provider';
import '@styles/globals.css';
import localFont from 'next/font/local';
import ToastContainerWrapper from '../_components/molecules/m-toast-wrapper';
import Navbar from '../_components/molecules/m-navbar';
import Footer from '../_components/molecules/m-footer';

/**
 * Documentaion for the entry layout
 * @example
 * this is not the auth layout, but rather the index.ts layout
 * any component added to this layout would appear in every page of the application.
 * specifically root related pages. localhost:3000/about, etc.
 */

const museo = localFont({
  src: [
    {
      path: '../../public/assets/fonts1/GraphikArabic-Thin.ttf',
      weight: '100',
    },
    {
      path: '../../public/assets/fonts1/GraphikArabic-Extralight.ttf',
      weight: '200',
    },
    {
      path: '../../public/assets/fonts1/GraphikArabic-Light.ttf',
      weight: '300',
    },
    {
      path: '../../public/assets/fonts1/PlusJakartaSans-Light.ttf',
      weight: '350',
    },
    {
      path: '../../public/assets/fonts1/GraphikArabic-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts1/GraphikArabic-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/assets/fonts1/PlusJakartaSans-Medium.ttf',
      weight: '550',
    },
    {
      path: '../../public/assets/fonts1/PlusJakartaSans-Regular.ttf',
      weight: '600',
    },
    {
      path: '../../public/assets/fonts1/GraphikArabic-Bold.ttf',
      weight: '800',
    },
    {
      path: '../../public/assets/fonts1/GraphikArabic-Black.ttf',
      weight: '900',
    },
    {
      path: '../../public/assets/fonts1/GraphikArabic-Super.ttf',
      weight: '1000',
    },
  ],
  variable: '--font-museo',
});

export const metadata = {
  title: 'Livwell Dashboard',
  description: 'Livwell Dashboard',
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${museo.variable} font-sans`}>
          <ToastContainerWrapper />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}

export default Layout;
