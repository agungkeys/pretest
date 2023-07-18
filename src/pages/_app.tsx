import "@/styles/global.css"
import type { AppProps } from "next/app";
import { store } from "../redux";
import { Provider } from "react-redux";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div data-theme="corporate" className="dark:bg-skin-bgdark">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
