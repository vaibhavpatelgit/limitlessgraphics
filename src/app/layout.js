import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  /* unchanged */
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main> {/* <-- no py-12 here */}
        <Footer />
      </body>
    </html>
  );
}
