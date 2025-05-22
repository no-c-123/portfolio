/*import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BackgroundScrollVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const src = video?.currentSrc || video?.src;

    const once = (el, event, fn, opts) => {
      const onceFn = function (...args) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, args);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    };

    // iOS fix
    once(document.documentElement, "touchstart", () => {
      video.play();
      video.pause();
    });

    // Dynamically import ScrollTrigger to prevent SSR issues
    const loadScrollTrigger = async () => {
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      once(video, "loadedmetadata", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: "#scroll-container",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }).fromTo(video, { currentTime: 0 }, { currentTime: video.duration || 1 });
      });
    };

    loadScrollTrigger();

    // Optional: load video blob to prevent frame drops
    setTimeout(() => {
      if ("fetch" in window) {
        fetch(src)
          .then((res) => res.blob())
          .then((blob) => {
            const blobURL = URL.createObjectURL(blob);
            const t = video.currentTime;
            video.setAttribute("src", blobURL);
            video.currentTime = t + 0.01;
          });
      }
    }, 1000);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      preload="auto"
      playsInline
      className="fixed top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 z-[-1] object-cover"
      src="video/video-optimized.mp4"
    />
  );
}*/
