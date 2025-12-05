import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-svh">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
export default LayoutWrapper;
