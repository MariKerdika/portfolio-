import "./index.scss";
import LogoS from "../../../assets/images/m.svg";
import { useEffect, useRef } from "react";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      });
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        ref={solidLogoRef}
        className="solid-logo"
        src={LogoS}
        alt="visual Letter"
      />

      <svg
        width="800px"
        height="800px"
        viewBox="0 0 128 128"
        aria-hidden="true"
        role="img"
        class="iconify iconify--noto"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          ref={outlineLogoRef}
          className="svg-container"
          d="M111.53 18.49c-.01-.01-.01-.03-.02-.04c-.02-.25-.1-.5-.2-.74c-.03-.06-.06-.11-.09-.17c-.04-.07-.07-.14-.11-.21c-.08-.12-.19-.23-.29-.33c-.03-.02-.04-.05-.07-.07c-.18-.17-.4-.29-.63-.4a1.22 1.22 0 0 1-.17-.07a2.56 2.56 0 0 0-.78-.14h-22.3c-.31 0-.59.07-.87.18c-.08.03-.14.07-.23.11c-.19.11-.37.23-.53.38c-.03.04-.09.06-.13.1c-.03.03-.04.07-.05.1c-.16.19-.28.4-.38.64c-.02.04-.05.08-.07.13c0 .01-.01.02-.01.03L64 85.16L43.39 17.99c0-.01-.01-.02-.01-.03c-.02-.05-.05-.09-.07-.13a2.38 2.38 0 0 0-.37-.64c-.03-.03-.04-.07-.06-.1c-.04-.04-.1-.06-.13-.1c-.16-.15-.33-.28-.52-.38c-.08-.04-.15-.08-.23-.11c-.28-.11-.56-.18-.87-.18h-22.3c-.27 0-.52.06-.78.14c-.05.02-.11.04-.17.07c-.24.11-.45.23-.64.4c-.03.03-.04.05-.06.07c-.11.11-.21.21-.3.33c-.05.07-.07.14-.11.21c-.03.06-.07.11-.09.17c-.1.24-.17.48-.21.74c0 .01-.01.03-.01.04l-8.45 99.96c-.06.66.17 1.31.61 1.8c.45.48 1.09.77 1.74.77h20.91c1.22 0 2.23-.92 2.36-2.14l4.19-42.6l16.15 43.2c.01.01.02.02.03.04c.07.19.17.38.29.54l.03.03c.02.04.07.07.09.1c.12.13.24.24.37.35l.18.12c.13.08.27.14.4.2a2.254 2.254 0 0 0 .83.17H71.8c.22 0 .44-.04.65-.1c.06-.02.12-.04.18-.07c.15-.05.28-.12.4-.2c.06-.04.12-.08.17-.12c.14-.1.25-.22.37-.35c.03-.04.07-.07.1-.1c0-.01.02-.02.03-.03c.12-.17.22-.35.3-.54c0-.01.01-.02.02-.04l16.15-43.2l4.2 42.61a2.366 2.366 0 0 0 2.35 2.14h20.9c.66 0 1.3-.28 1.74-.77c.45-.49.67-1.14.62-1.8l-8.45-99.97z"
          fill="#022c43"
        ></path>
      </svg>
    </div>
  );
};

export default Logo;
