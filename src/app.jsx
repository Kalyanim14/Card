import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import preactLogo from "./assets/man.png";
import Praharsha from "./assets/praharsha.png";
import arrow from "./assets/arrow.svg";
import arrow2 from "./assets/arrow2.png";
import below from "./assets/man (1).png";
import bottom from "./assets/man (2).png";
import top from "./assets/man(3).png";
import "./index.css";


export function App() {
  const hoverContainerRef = useRef(null); // ✅ new ref for full hover area
  const boxRef = useRef(null);
  const arrow1Ref = useRef(null);
  const arrow2Ref = useRef(null);

  useEffect(() => {
    const hoverContainer = hoverContainerRef.current;
    const box = boxRef.current;
    const arrow1 = arrow1Ref.current;
    const arrow2 = arrow2Ref.current;

    gsap.set([box, arrow1, arrow2], { clearProps: "all" });
    gsap.set(box, { background: "#FFF" });
    gsap.set(arrow2, { opacity: 0 });

    const handleEnter = () => {
      gsap.killTweensOf([box, arrow1, arrow2]);

      const tl = gsap.timeline();

      tl.to(arrow1, {
        x: 40,
        y: -40,
        opacity: 0,
        duration: 0.2,
        ease: "none",
      });

      tl.to(
        [box, arrow2],
        {
          background: "linear-gradient(135deg, #FF008A 0%, #0877FC 100%)",
          opacity: (i, el) => (el === arrow2 ? 1 : undefined),
          duration: 0.1,
          ease: "power3.out",
        },
      );
    };

    const handleLeave = () => {
      gsap.killTweensOf([box, arrow1, arrow2]);
      gsap.set(box, { background: "#FFF" });
      gsap.set(arrow1, { x: 0, y: 0, opacity: 1 });
      gsap.set(arrow2, { opacity: 0 });
    };

    // ✅ Attach hover listeners to the whole image area now
    hoverContainer.addEventListener("mouseenter", handleEnter);
    hoverContainer.addEventListener("mouseleave", handleLeave);

    return () => {
      hoverContainer.removeEventListener("mouseenter", handleEnter);
      hoverContainer.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="w-[498px] h-[551px] bg-[#F3F4F6] flex justify-center items-center">
      
      <div className="flex p-[12px] items-center justify-center gap-[10px] rounded-[24px] bg-white w-[294px] h-[382px] shadow-[0_0_2px_0_rgba(102,112,133,0.24)] relative">
        {/* ✅ Wrap this entire section */}
        <div  className="relative cursor-pointer">
          <div className="flex p-3 items-center justify-center absolute left-[-46px] top-[26px] w-[96px] h-[96px] rounded-[1000px] bg-white">
            <div ref={hoverContainerRef} className="flex p-3 justify-center items-center rounded-[1000px] w-[72px] h-[72px] bg-white shadow-[inset_0_0_8px_0_rgba(236,9,146,0.12),inset_0_0_8px_0_rgba(8,119,252,0.12)]">
              <div className="flex items-center justify-center p-[1px] rounded-[1000px] bg-gradient-to-r from-[#FF008A] to-[#0877FC]">
                <div className="flex items-center justify-center w-10 h-10 shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.1)] rounded-[1000px] bg-white">
                  <div
                    ref={boxRef}
                    className="w-8 h-8 relative overflow-hidden rounded-full flex items-center justify-center"
                  >
                    <img
                      ref={arrow1Ref}
                      src={arrow}
                      alt="arrow"
                      className="w-3.5 h-3.5 absolute left-[9.34px] top-[9.33px]"
                    />
                    
                    <img
                      ref={arrow2Ref}
                      src={arrow2}
                      alt="arrow2"
                      className="w-3.5 h-3.5 absolute left-[9.34px] top-[9.33px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ The main image also now triggers animation */}
          <img
            src={top}
            alt="Preact logo"
            className=" w-[272px] h-[26px] object-cover bg-white "/>
            <img
            src={below}
            alt="Preact logo"
            className=" w-[272px] h-[97px] object-cover bg-white "/>
            <img
            src={bottom}
            alt="Preact logo"
            className=" w-[272px] h-[237px] object-cover bg-white"/>

          {/* Overlay content */}
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-[6px] p-2 rounded-[1000px] border border-[rgba(255,255,255,0.52)] bg-[linear-gradient(0deg,rgba(240,227,219,0.67)_0%,rgba(240,227,219,0.67)_100%),linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.41)_100%)] shadow-[inset_0_1.676px_1.676px_rgba(255,255,255,0.25),inset_0_-1.676px_1.676px_rgba(255,255,255,0.25)] backdrop-blur-[26.81px]">
            <div className="w-10 h-10 relative rounded-[837.84px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-gradient-to-b from-pink-600 to-blue-600">
              <img
                src={Praharsha}
                alt="Praharsha"
                className="w-full h-full rounded-[837.84px] object-cover rounded-tl-[20px]"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-0.5">
              <div className="w-32 h-5 text-slate-800 text-base font-medium font-['Poppins'] [text-shadow:_0px_0px_0px_rgb(0_0_0_/_0.09)]">
                Praharsha
              </div>
              <div className="text-zinc-900/60 text-xs font-normal font-['Poppins']">
                Seeking for an opportunity
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}