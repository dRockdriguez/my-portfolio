import { Head } from "$fresh/runtime.ts";
import Layout from "../islands/Layout.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/styles.css" />
        <title>David Rodríguez</title>
      </Head>
      <Layout />
    </>
  );
}
