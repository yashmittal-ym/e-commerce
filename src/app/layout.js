"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import store from "./redux/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body suppressHydrationWarning={true} className={inter.className}>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </body>
      </Provider>
    </html>
  
  );
}
