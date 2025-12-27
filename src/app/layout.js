import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import QuoteModalProvider from "@/components/QuoteModalProvider";

export const metadata = {
  /* unchanged */
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QuoteModalProvider>
          <Nav />
          <main>{children}</main> {/* <-- no py-12 here */}
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
