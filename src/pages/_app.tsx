import "@/utils/front/styles/globals.css";
import type { AppProps } from "next/app";
import { ProviderLoading } from "@/utils/front/provider/provider_loading";
import { ProviderAlert } from "@/utils/front/provider/provider_alert";
import { Montserrat } from "next/font/google";
import Central from "@/utils/front/components/ui/central";

const montFont = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderLoading>
      <ProviderAlert>
        <main
          className={`${montFont.className} bg-white h-screen w-full relative overscroll-none overflow-x-hidden`}
        >
          <div
            className={`relative w-full h-full lg:flex lg:justify-center lg:items-center`}
          >
            <Component {...pageProps} />
          </div>
        </main>
      </ProviderAlert>
    </ProviderLoading>
  );
}
