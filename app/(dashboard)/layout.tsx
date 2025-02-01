import Providers from '@store/provider';
import '@styles/globals.css';
import localFont from 'next/font/local';
import ToastContainerWrapper from '../_components/molecules/m-toast-wrapper';
import DashboardLayout from '../_components/layout/dashboard';
import Image from 'next/image';
import overlay from '@assets/webp/BackgroundWeb.webp';

/**
 * Documentaion for the dashboard layout
 * @example
 * any component added to this layout would appear in every dashboard pages of the application.
 * related pages such as. localhost:dashboard/settings, etc.
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
    // {
    //   path: '../../public/assets/fonts1/GraphikArabic-Normal.ttf',
    //   weight: '700',
    // },
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
          <DashboardLayout>
            <ToastContainerWrapper />
            <Image src={overlay?.src} alt="Background" fill priority className="object-cover opacity-100 -z-0" />
            <div className="">{children}</div>
          </DashboardLayout>
        </body>
      </Providers>
    </html>
  );
}

export default Layout;
