export default function AboutMe(props) {
  const { aboutme } = props;

  return (
    <>
      <div class="about">
        <h2 class="text-3xl">Sobre mí 😉</h2>

        <div
          data-color-mode="dark"
          data-light-theme="light"
          data-dark-theme="dark"
          class="markdown-body"
          dangerouslySetInnerHTML={{ __html: aboutme.body }}
        />
      </div>
    </>
  );
}
