import React from "react";
import fStyle from "./Footer.module.css";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <div>
      <div className={fStyle["wrapper"]}>
        <input
          type="checkbox"
          id="toggle"
          className={fStyle["hidden-trigger"]}
        />
        <label htmlFor="toggle" className={fStyle["circle"]}>
          <svg
            className={fStyle["svg"]}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="48"
            height="48"
            version="1.1"
            viewBox="0 0 48 48"
          >
            <image
              width="48"
              height="48"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAbElEQVR4Ae3XwQnFQAiE4eVVsGAP1mkPFjwvQvYSWCQYCYGZv4Dv5MGB5ghcIiDQI+kCftCzNsAR8y5gYu2rwCBAgMBTgEC3rek2yQEtAZoDjso8AyaKexmIDJUZD40AAQIE0gwx449GgMC9/t0b7GTsa7J+AAAAAElFTkSuQmCC"
            ></image>
          </svg>
        </label>

        <div className={fStyle["subs"]}>
          <button className={fStyle["sub-circle"]}>
            <a
              href="https://www.linkedin.com/company/engajmedia/"
              target={"_blank"}
            >
              <input
                value="1"
                name="sub-circle"
                type="radio"
                id="sub1"
                className={fStyle["hidden-sub-trigger"]}
              />
              <FaLinkedinIn />
            </a>
          </button>

          <button className={fStyle["sub-circle"]}>
            <a
              href="https://www.instagram.com/engajmedia_backup/"
              target={"_blank"}
            >
              <input
                value="1"
                name="sub-circle"
                type="radio"
                id="sub2"
                className={fStyle["hidden-sub-trigger"]}
              />
              <FaInstagram />
            </a>
          </button>

          <button className={fStyle["sub-circle"]}>
            <a href="https://twitter.com/Engajmedia" target={"_blank"}>
              <input
                value="1"
                name="sub-circle"
                type="radio"
                id="sub3"
                className={fStyle["hidden-sub-trigger"]}
              />
              <FaXTwitter />
            </a>
          </button>

          <button className={fStyle["sub-circle"]}>
            <a href="mailto:team.engajmedia.com" target={"_blank"}>
              <input
                value="1"
                name="sub-circle"
                type="radio"
                id="sub4"
                className={fStyle["hidden-sub-trigger"]}
              />
              <FiMail />
            </a>
          </button>
        </div>
        <div className={fStyle["copywrite"]}>&copy;{"engajmedia"}</div>
      </div>
    </div>
  );
}

export default Footer;
