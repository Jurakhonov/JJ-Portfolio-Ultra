import React, { useState, useEffect } from "react";
import "./header.css";
import { motion } from "framer-motion";
import C1 from "../../assets/Ellipse1.svg";
import C2 from "../../assets/Ellipse2.svg";
import C3 from "../../assets/Ellipse3.svg";
import Arrow from "../../assets/Arrow.svg";
import Logo from "../../assets/LOGO.svg";
import LogoBrown from "../../assets/LOGObrown.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [progress, setProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="header">
      <div className={`header__logo ${isHovered ? "active" : ""}`}>
        <div className="move-to-mainh"></div>
        <img src={Logo} alt="" className="logoh" />
        <img src={LogoBrown} alt="" className="logobrownh" />
        <div className="color__boxh">
          <div className="inner__circles">
            <div className="venileplate">
              {[C1, C2, C3].map((circle, index) => (
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

      <div
        className="wallpaper"
        style={{
          backgroundColor: hoveredIndex !== null ? "black" : "transparent",
        }}
      >
        {["wallpaper__0", "wallpaper__1", "wallpaper__2"].map(
          (wallpaperClass, index) => (
            <motion.div
              key={index}
              className={`${wallpaperClass} ${
                hoveredIndex === index ? "active" : ""
              }`}
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: hoveredIndex === index ? 1 : 0,
              }}
            ></motion.div>
          )
        )}
      </div>

      <div className="nav">
        <motion.img
          src={Arrow}
          alt=""
          className={`arrow ${isHovered ? "active" : ""}`}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ position: "relative" }}
        />
        <ul className="menu">
          {["CV", "Work", "Contact"].map((item, index) => (
            <motion.li
              className={`obj${index}`}
              key={item}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1 + index * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
              onHoverStart={() => {
                setHoveredIndex(index);
                setIsHovered(true);
              }}
              onHoverEnd={() => {
                setHoveredIndex(null);
                setIsHovered(false);
              }}
            >
              <div className={`dot ${isHovered ? "active" : ""}`}></div>
              <Link
                to={`/${item.toLowerCase()}`}
                className={`menu__link link__obj${index} ${
                  hoveredIndex === index ? "link-active" : ""
                }`}
                style={{
                  opacity:
                    hoveredIndex !== null && hoveredIndex !== index ? 0 : 1,
                }}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
