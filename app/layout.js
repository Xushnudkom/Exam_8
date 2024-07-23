import { Inter } from "next/font/google";
import Header from '@/components/header'
import Footer from '@/components/footer'
import ThenHeader from '@/components/main/thenheader'
import IntroSection from '@/components/main/introsection'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="bg-[#F2F2F2] text-black">
        
        <Header />
      
        <div className="h-screen flex flex-col justify-between font-sans bg-[#F2F2F2]">
        
        <main className="justify-between">
          {children}
          <ThenHeader />
          
          <IntroSection />
        </main>
        
        
        </div>
       
        <Footer />
        </div>
        
      
      </body>
      
    </html>
  );
}
// container mx-auto px-10 max-w-1240
