import React, { useEffect, useRef, useState } from "react";
import "./Star.css";
import { motion } from "framer-motion";
import rabbit from "../assets/rabbit.png";

interface StarProps {
  isDarkMode: boolean;
}

const Star: React.FC<StarProps> = ({ isDarkMode }) => {
  const starRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  const [coordi, setCoordi] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const x = event.clientX;
    const y = event.clientY;

    setCoordi({ x, y });

    if (circleRef.current) {
      circleRef.current.style.transform = `translate(${
        x - circleRef.current.offsetWidth / 2
      }px, ${y - circleRef.current.offsetHeight / 2}px)`;
    }
  };

  const createStars = () => {
    const container = starRef.current;

    if (container) {
      const oldStarContainer = container.querySelector(".star-container");
      if (oldStarContainer) {
        container.removeChild(oldStarContainer);
      }

      let starContainer = document.createElement("div");
      starContainer.className = "star-container";
      starContainer.innerHTML = "";

      container.appendChild(starContainer);
      for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.className = "star";
        // 별 크기 여기서 조정
        let size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        starContainer.appendChild(star);
      }
    }
  };

  useEffect(() => {
    let resizeTimeout: number;
    const handleResize = () => {
      // 이전에 예약된 함수가 있다면 호출 취소
      clearTimeout(resizeTimeout);
      // 0.5초 후에 함수 호출 예약
      resizeTimeout = window.setTimeout(createStars, 500);
      console.log("stars");
    };

    createStars();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="stars"
      className={isDarkMode ? "dark-mode" : ""}
      onMouseMove={handleMouseMove}
    >
      <div ref={starRef} />

      <div
        ref={circleRef}
        className={isDarkMode ? "dark-mode circle" : "circle"}
      >
        <img src={rabbit} alt="rabbit" className="rabbit w-[110px]"></img>
        <div className="text-box">
          <div className="text">
            <motion.div
              transition={{ delay: 0.7, type: "spring" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="font-intelon flex flex-col justify-center items-center h-2/3 mb-10 text-3xl"
            >
              <p>Hello World :)</p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div style={{ height: "100vh" }}>
        <h1>Mouse Tracker</h1>
        <p>Move your mouse around!</p>
        <p>
          Mouse coordinates: ({coordi.x}, {coordi.y})
        </p>
      </div> */}
    </div>
  );
};

export default Star;
