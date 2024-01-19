import Footer from "../components/footer";
import Header from "../components/header";

function Layout({children}) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}

export default Layout;