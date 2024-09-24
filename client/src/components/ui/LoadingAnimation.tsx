import { useEffect } from "react";
import { gsap } from "gsap";
import "../../index.css";

const LoadingAnimation = ({ onComplete }: any) => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to(
        ".loading-container",
        {
          y: "-100%",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(".loading-text", { opacity: 1, duration: 3 }, "<")
      .eventCallback("onComplete", onComplete);

    return () => {
      timeline.kill();
    };

    return () => timeline.kill();
  }, [onComplete]);

  return (
    <>
      <div className="loading-container">
        <div className="loading-text">OSU @ ACM</div>
      </div>
    </>
  );
};

export default LoadingAnimation;
