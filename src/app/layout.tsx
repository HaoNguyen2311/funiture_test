import { Manrope, Roboto } from "next/font/google";
import "antd/dist/reset.css";
import "./styles/globals.scss";
import Header from "./components/Header/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "800"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${roboto.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
