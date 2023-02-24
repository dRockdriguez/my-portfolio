import gsap from "gsap/";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "preact/hooks";
import AboutMe from "./AboutMe.tsx";
import Presentation from "../components/Presentation.tsx";

export default function Layout(props) {
  const { aboutme } = props;

  const [preload, setPreload] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".layout-container",
    });

    setPreload(false);
  }, []);

  return (
    <>
      <div
        class={preload ? "layout-container preload" : "layout-container"}
      >
        <div class="panel">
          <Presentation></Presentation>
        </div>

        <div class="panel panel-aboutme">
          <AboutMe aboutme={aboutme}></AboutMe>
        </div>
      </div>
    </>
  );
}
