import "./globals.css";

export const metadata = {
  /* unchanged */
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
