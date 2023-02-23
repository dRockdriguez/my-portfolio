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

    gsap.to(".vertical-scroll", {
      toggleActions: "restart pause resume pause",
      scroller: ".vertical-scroll",
      pin: true,
      scrub: 1,
    });

    const sections = gsap.utils.toArray(".panel");
    const horizontalScroll = document.querySelector(
      ".horizontal-scroll",
    ) as HTMLElement;

    const offestWidth = horizontalScroll.offsetWidth;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-scroll",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + offestWidth,
      },
    });

    setPreload(false);
  }, []);

  return (
    <>
      <div class={preload ? "vertical-scroll preload" : "vertical-scroll"}>
        <Presentation></Presentation>
      </div>
      <div
        class={preload ? "horizontal-scroll preload" : "horizontal-scroll"}
      >
        <div class="panel" style="background:blue">
          <AboutMe aboutme={aboutme}></AboutMe>
        </div>

        <section class="panel">
          ONE
        </section>
        <section class="panel">
          TWO
        </section>
        <section class="panel">
          THREE
        </section>
      </div>
    </>
  );
}
