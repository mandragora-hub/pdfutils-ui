import "../styles/globals.css";
import PlausibleProvider from "next-plausible";
import getConfig from "next/config";

function MyApp({ Component, pageProps }) {
  const { publicRuntimeConfig } = getConfig();

  return (
    <PlausibleProvider
      selfHosted
      enabled
      domain={publicRuntimeConfig.plausibleDomain}
      customDomain={publicRuntimeConfig.plausibleCustomDomain}
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
