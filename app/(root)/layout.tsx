import { ClerkProvider, currentUser } from '@clerk/nextjs';

import '../globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {
  Inter,
  Roboto_Mono,
  DM_Serif_Display,
  Poppins,
} from 'next/font/google';
import { getUser } from '@/lib/controllers/user.controller';
import { UserInfo } from '@/lib/Types';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});
const dm_serif_display = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-dm-serif-display',
});

export const metadata = {
  title: 'Arzu',
  description: 'A Next.js 13 Meta Threads Application',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo: UserInfo = await JSON.parse(
    JSON.stringify(await getUser(user.id))
  );

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.variable} ${poppins.variable} ${roboto_mono.variable} ${dm_serif_display.variable}`}
        >
          <div className="  flex flex-col  min-h-screen font-sans">
            <Navbar user={userInfo} />
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
