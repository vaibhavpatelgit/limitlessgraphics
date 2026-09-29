import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import QuoteModalProvider from "@/components/QuoteModalProvider";

export default function WebsiteLayout({ children }) {
  return (
    <QuoteModalProvider>
      <Nav />

      <main>{children}</main>

      <Footer />
    </QuoteModalProvider>
  );
}
