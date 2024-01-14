import React, { useEffect, useRef, useState } from "react";
import "./Star.css";
import { motion } from "framer-motion";

interface StarProps {
  isDarkMode: boolean;
}

const Star: React.FC<StarProps> = ({ isDarkMode }) => {
  const starRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const starContainer = starRef.current;
    if (starContainer) {
      for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.className = "star";
        // 랜덤한 크기 (1px ~ 3px)
        let size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        // 랜덤한 위치
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        // 랜덤한 반짝이는 시간 (1s ~ 3s)
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        starContainer.appendChild(star);
      }
    }
  }, []);

  return (
    <div id="stars" className={isDarkMode ? "dark-mode" : ""} ref={starRef}>
      <div className="circle">
        <div className="text-box">
          <div className="text">
            <motion.div
              transition={{ delay: 0.7, type: "spring" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="font-intelon flex flex-col justify-center items-center h-2/3 mb-10 text-3xl"
            >
              Hello World!
              <br />
              yeomdogyeong :)
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Star;
