import Networks from "./Networks.tsx";
import { cv } from "../utils/assets.tsx";
import { getLinks } from "../repositories/links.tsx";

export default function Presentation() {
  const links = getLinks();

  return (
    <>
      <div class="presentation h-full flex flex-col justify-center items-center text-center p-9 relative">
        <h2 class="text-xl">Hola ✋, soy</h2>
        <h1 class="title mt-4">David Rodríguez</h1>
        <h2 class="text-xl mt-4">
          Desarrollador con experiencia Full stack, aunque apasionado por el
          Frontend
        </h2>

        <div class="btn-container mt-5">
          <a
            target="_blank"
            href={cv}
            class="btn-icon"
          >
            Descargar CV
            <i class="fa fa-download" aria-hidden="true"></i>
          </a>

          <a
            target="_blank"
            href={links.linkedin}
            class="btn-icon"
          >
            Contáctame
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </div>
        <Networks></Networks>
      </div>
    </>
  );
}
