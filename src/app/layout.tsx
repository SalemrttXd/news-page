import "./globals.css";
import {Bree_Serif} from "next/font/google";
const robotoHeading = Bree_Serif ({
  weight: ["400"],
  subsets: ["latin"],
});

export default function NEWSPAPER({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>News</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
