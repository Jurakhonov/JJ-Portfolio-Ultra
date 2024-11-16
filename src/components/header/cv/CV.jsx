import React, { useState, useEffect } from "react";
import "./cv.css";
import Me from "../../../assets/me.png";
import "../header.css";
import { motion } from "framer-motion";
import C1 from "../../../assets/Ellipse1.svg";
import C2 from "../../../assets/Ellipse2.svg";
import C3 from "../../../assets/Ellipse3.svg";

const CV = () => {
  return (
    <div className="cv">
      <div className="img">
        <img src={Me} className="cv__photo" />
      </div>
      <div className="cv__data">
        <div className="my__data">
          <h2 className="title">ID</h2>
          <ul className="skils__list">
            <li className="skils__each skils__edu">
              <h3 className="study__place">Jurakhonov Javohkirbek</h3>
              <p className="edu__time">22 years / 04.27.2002</p>
              <p className="fac">Frontend Developer</p>
            </li>
            <li className="skils__each skils__edu">
              <h3 className="study__place">Contacts</h3>
              <p className="edu__time">Phone: <a href="">+998993277848</a></p>
              <p className="edu__time">Tg: <a href="">@vax_machin</a></p>
              <p className="edu__time">Email: <a href="">jjurakhonov17@gmail.com</a></p>
            </li>
          </ul>
        </div>
        <div className="exp">
          <h2 className="title">Experience</h2>
          <ul className="skils__list">
            <li className="skils__each skils__edu">
              <h3 className="study__place">Scotch Paper Pack</h3>
              <p className="edu__time">{`Owner -> 2022 - ....`}</p>
              <p className="fac">Office Supplies Resale</p>
            </li>
            <li className="skils__each skils__edu">
              <h3 className="study__place">SAMI SM LLC</h3>
              <p className="edu__time">{`Education Consultant -> 2022 - 2023`}</p>
              <p className="edu__time">Consultation on Foreign Education and Visas</p>
            </li>
          </ul>
        </div>
        <div className="skils">
          <h2 className="title">Skills</h2>
          <ul className="skils__list">
            <li className="skils__each">HTML</li>
            <li className="skils__each">CSS</li>
            <li className="skils__each">JS</li>
            <li className="skils__each">React</li>
            <li className="skils__each">TS</li>
            <li className="skils__each">Node.js</li>
            <li className="skils__each">Figma</li>
            <li className="skils__each">Redux Toolkit</li>
            <li className="skils__each">Router</li>
            <li className="skils__each">RESTfull API</li>
            <li className="skils__each">Axios</li>
            <li className="skils__each">Tailwind</li>
            <li className="skils__each">SCSS</li>
            <li className="skils__each">Bootstrap</li>
            <li className="skils__each">Next.js</li>
            <li className="skils__each">Framer Motion</li>
          </ul>
        </div>
        <div className="lang">
          <h2 className="title">Language</h2>
          <ul className="skils__list">
            <li className="skils__each">Russian</li>
            <li className="skils__each">English</li>
            <li className="skils__each">Uzbek</li>
          </ul>
        </div>
        <div className="edu">
          <h2 className="title">Education</h2>
          <ul className="skils__list">
            <li className="skils__each skils__edu">
              <h3 className="study__place">Webster</h3>
              <p className="edu__time">2021 - 2022</p>
              <p className="fac">Information Managment Systems</p>
            </li>
            <li className="skils__each skils__edu">
              <h3 className="study__place">42 Abu-Dhabi</h3>
              <p className="edu__time">2022 - 2023</p>
              <p className="fac">Software Engenering</p>
            </li>
            <li className="skils__each skils__edu">
              <h3 className="study__place">ProWeb</h3>
              <p className="edu__time">2024</p>
              <p className="fac">Frontend Development</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CV;
