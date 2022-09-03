import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <main className="ml-64 mr-4 pt-14">{children}</main>
      <Footer />
    </>
  );
}
