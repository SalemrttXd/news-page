import "./globals.css";
export default function RootLayout({
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
