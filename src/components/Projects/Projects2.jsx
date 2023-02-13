import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreens";

const images = [
  {
    src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Project Number 1",
    subtitle: "Live Site / Code",
    category: "React / Tailwind , Etc",
  },
  {
    src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "Project Number 2",
    subtitle: "Live Site / Code",
    category: "React / Tailwind , Etc",
  },
  {
    src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Project Number 3",
    subtitle: "Live Site / Code",
    category: "React / Tailwind , Etc",
  },
  {
    src: "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Project Number 4",
    subtitle: "Live Site / Code",
    category: "React / Tailwind , Etc",
  },
];
gsap.registerPlugin(ScrollTrigger);

export const Projects2 = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const [activeImage, setActiveImage] = useState(1);

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    setTimeout(() => {
      const totalPanels = panels.current.length;

      gsap.to(panels.current, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: true,
          snap: 1 / (totalPanels - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + panelsContainer.current.offsetWidth,
        },
      });
    }, 1000);
  }, []);

  return (
    <>
      <section className="gallery-wrap" ref={panelsContainer}>
        <h1 className="text-4xl"> Projects (unfinished)</h1>
        {/* <div className="description panel " ref={(e) => createPanelsRefs(e, 0)}>
       
        </div> */}
        <div className="gallery">
          <div className="absolute left-[3vw] w-4 z-1 translate-y-[70vh] font-semibold text-[#dbd8d6] leading-4 mix-blend-difference inline-block">
            <span>{activeImage}</span>
            <span className="divider" />
            <span>{images.length}</span>
          </div>
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="gallery-item-wrapper "
                ref={(e) => createPanelsRefs(e, index)}
              >
                <div></div>
                <div className="gallery-item">
                  <div className="gallery-item-info">
                    <h1 className="gallery-info-title">{image.title}</h1>
                    <h2 className="gallery-info-subtitle">{image.subtitle}</h2>
                    <p className="gallery-info-category">{image.category}</p>
                  </div>
                  <div
                    className="gallery-item-image"
                    style={{ backgroundImage: `url(${image.src})` }}
                  ></div>
                </div>
                <div></div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
