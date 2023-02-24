export default function AboutMe(props) {
  const { aboutme } = props;

  return (
    <>
      <div class="about">
        <h2 class="text-5xl">
          S<span class="underlined">obre m</span>í 😉
        </h2>

        <div class="about-text">
          <p>
            Soy un apasionado de la tecnología y de probar nuevos frameworks y
            librerías de Frontend. Prueba de ello es este portfolio que he
            creado con Deno fresh. Mi enfoque se centra en crear experiencias de
            usuario <em>intuitivas y atractivas</em>, que sean <em>fáciles de usar</em> y que
            <em>aporten valor al usuario.</em>
          </p>
          <p>
            Más abajo algunos de mis proyectos que he creado con estas
            tecnologías
          </p>

          <p>
            Si estás buscando un desarrollador Frontent no dudes en contactar
            conmigo si algo de lo que ves te ha gustado.
          </p>
        </div>
        <div
          data-color-mode="dark"
          data-light-theme="light"
          data-dark-theme="dark"
          class="markdown-body technologies"
          dangerouslySetInnerHTML={{ __html: aboutme.body }}
        />
      </div>
    </>
  );
}
