import { AppProps } from "next/app";
import { api } from "../utils/api";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};
export default api.withTRPC(App);
