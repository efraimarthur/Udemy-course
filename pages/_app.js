import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HelloWorld from "../components/HelloWorld";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="min-h-screen p-3">
        <HelloWorld name="Arthur" />

        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
