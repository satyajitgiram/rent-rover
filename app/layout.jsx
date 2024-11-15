import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Rent Rover | Find the perfect Rental",
  description: "Find Your Dream Rental Property",
  keywords: "Rental, find rentals, find properties, rent",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar></Navbar>
          <main>{children}</main>
          <Footer></Footer>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
