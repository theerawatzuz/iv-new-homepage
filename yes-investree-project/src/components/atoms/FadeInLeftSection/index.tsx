import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

function FadeInSection(props: any) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);
  return (
    <div
      className={`${style["fade-in-section"]} ${isVisible ? style["is-visible"] : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
