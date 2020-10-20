import resetStyles from "../styles/reset.scss";
import Navbar from "../components/navbar/Navbar";
import MobiNavbar from "../components/navbar/mobilnav/MobiNavbar";
import { FaGithubSquare, FaDev, FaTwitterSquare } from "react-icons/fa";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <Navbar />
        <MobiNavbar />
      </header>
      <Component {...pageProps} />
      <footer>
        <div className="footer_social">
          <a href="https://github.com/alexotoo" target="_blank">
            <FaGithubSquare />
          </a>
          <a href="https://dev.to/alexooo" target="_blank">
            <FaDev />
          </a>
          <a href="https://twitter.com/Qwesi_Alex" target="_blank">
            <FaTwitterSquare className="twitter" />
          </a>
        </div>
        <h1> alexooO &#169;2020</h1>
      </footer>
    </>
  );
}
