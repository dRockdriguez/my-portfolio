import { getLinks } from "../repositories/links.tsx";

export default function Networks() {
  const links = getLinks();

  return (
    <>
      <div class="networks">
        <a
          target="_blank"
          href={links.email}
          class="btn-network"
        >
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
        <a
          target="_blank"
          href={links.linkedin}
          class="btn-network"
        >
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a
          target="_blank"
          href={links.github}
          class="btn-network"
        >
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
}
