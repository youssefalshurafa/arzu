import { ClerkProvider } from '@clerk/nextjs';

import '../globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Arzu',
  description: 'A Next.js 13 Meta Threads Application',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="  flex flex-col  min-h-screen font-sans">
            <Navbar />
            <div className=" -mt-42">{children}</div>
            <div className="absolute bottom-0  text-center w-full">
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
