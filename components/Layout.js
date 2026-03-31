import Navbar from "./Navbar";
import Footer from "./Footer";
import Cursor from "./Cursor";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Cursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
