import "../styles/globals.css";
import { api } from "../utils/api";
import Head from "./head";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head></Head>
      <body>{children}</body>
    </html>
  );
};
export default api.withTRPC(RootLayout);
