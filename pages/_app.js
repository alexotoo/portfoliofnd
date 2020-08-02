import resetStyles from "../styles/reset.scss";
import Navbar from "../components/navbar/Navbar";
import MobiNavbar from "../components/navbar/mobilnav/MobiNavbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <Navbar />
        <MobiNavbar />
      </header>
      <Component {...pageProps} />
      <footer>footer here</footer>
    </>
  );
}
