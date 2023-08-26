import "../styles/globals.css";
import { NhostProvider, NhostClient } from "@nhost/nextjs";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <Component {...pageProps} />
    </NhostProvider>
  );
}

export default MyApp;
