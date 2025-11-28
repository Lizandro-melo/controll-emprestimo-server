import { ProviderAlert } from "@/presentation/provider/provider_alert";
import { ProviderLoading } from "@/presentation/provider/provider_loading";
import "@/presentation/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderAlert>
      <ProviderLoading>
        <Component {...pageProps} />
      </ProviderLoading>
    </ProviderAlert>
  );
}
