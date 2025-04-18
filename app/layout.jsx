import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({
  subsets: ["latin"],
});
export const metadata = {
  title: "Paimon Drive",
  description: "Traveller's Paimon Drive",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
