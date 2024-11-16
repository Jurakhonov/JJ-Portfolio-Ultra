import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import C1 from "../../assets/Ellipse1.svg";
import C2 from "../../assets/Ellipse2.svg";
import C3 from "../../assets/Ellipse3.svg";
import C4 from "../../assets/Ellipse4.svg";
import C5 from "../../assets/Ellipse5.svg";
import Logo from "../../assets/LOGO.svg";
import LogoBrown from "../../assets/LOGObrown.svg";
import "./loader.css";
import { Link } from "react-router-dom";

const Loader = ({setGo, go}) => {
  const [progress, setProgress] = useState(0);
  const radius = 140;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const radiusSmall = 118.5;
  const circumferenceSmall = 2 * Math.PI * radiusSmall;
  const offsetSmall = progress === 100 ? 0 : circumferenceSmall;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={go === true ? "del" : "loader__bg"}>
      <div className={progress === 100 ? "del" : "progress-text"}>
        {progress}%
      </div>
      <Link to={'/header'} className="move-to-main" onClick={() => setGo(true)}></Link>
      <img src={Logo} alt="" className="logo" />
      <img src={LogoBrown} alt="" className="logobrown" />
      <div className="color__box">
        <div className="inner__circles">
          <div className="venileplate">
            <svg className="progress-ring" width="300" height="300">
              <circle
                className={
                  progress === 100 ? "rotate-baby" : "progress-ring__circle"
                }
                stroke="white"
                strokeWidth="1"
                fill="transparent"
                r={radius}
                cx="150"
                cy="150"
                style={{
                  strokeDasharray:
                    progress === 100
                      ? "55, 55"
                      : `${circumference} ${circumference}`,
                  strokeDashoffset: offset,
                  transform: "rotate(90deg)",
                  transformOrigin: "50% 50%",
                  transition: "stroke-dashoffset 0.35s",
                }}
              />
            </svg>
            <svg className="progress-ring--dashed" width="237" height="237">
              <circle
                className="progress-ring__circle dashed"
                stroke="white"
                strokeWidth="1"
                fill="transparent"
                r={radiusSmall}
                cx="118.5"
                cy="118.5"
                style={{
                  strokeDasharray: "5, 5",
                  strokeDashoffset: offsetSmall,
                  transform: "rotate(90deg)",
                  transformOrigin: "50% 50%",
                  transition: "stroke-dashoffset 0.35s, opacity 0.35s",
                  opacity: progress === 100 ? 1 : 0,
                }}
              />
            </svg>
            {[C1, C2, C3, C4, C5].map((circle, index) => (
              <motion.img
                key={index}
                src={circle}
                alt=""
                className={`inner__circles--${index + 1}`}
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{
                  scale: 1,
                  opacity: progress >= (index + 1) * 20 ? 1 : 0,
                  y: progress >= (index + 1) * 20 ? 0 : 20,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
