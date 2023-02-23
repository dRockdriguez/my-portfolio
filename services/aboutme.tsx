import { extract } from "$std/encoding/front_matter/any.ts";
import { render } from "$gfm/mod.ts";

export async function loadAboutMeJson() {
  const raw = await Deno.readTextFile(`./content/aboutme.md`);

  const { attrs, body } = extract(raw);
  const params = attrs as Record<string, string>;

  const aboutme = {
    title: params.title,
    body: render(body),
  };

  return aboutme;
}
