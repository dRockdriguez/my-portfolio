import { Head } from "$fresh/runtime.ts";
import Layout from "../islands/Layout.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { loadAboutMeJson } from "../services/aboutme.tsx";
import { CSS } from "$gfm/mod.ts";

export const handler: Handlers = {
  async GET(_, context) {
    const aboutme = await loadAboutMeJson();

    return context.render({ aboutme });
  },
};

export default function Home(props: PageProps) {
  const { aboutme } = props.data;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/styles.css" />
        <title>David Rodríguez</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Layout aboutme={aboutme} />
    </>
  );
}
