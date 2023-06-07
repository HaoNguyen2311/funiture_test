import { Manrope, Roboto } from "next/font/google";
import "antd/dist/reset.css";
import "./styles/globals.scss";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
