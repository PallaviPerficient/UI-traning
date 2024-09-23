import "./globals.css";

export default function RootLayout({ children, params }) {
  console.log("params -1", params);
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
