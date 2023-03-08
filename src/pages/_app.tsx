import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // if studio, then render without layout
    // otherwise, render with layout
    <>
      {Component.name === "StudioPage" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
