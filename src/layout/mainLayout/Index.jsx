import Footer from "../../components/template/footer/Footer";
import Navbar from "../../components/template/navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
