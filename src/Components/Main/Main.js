import React from "react";
import mStyle from "./Main.module.css";
import ebookPost from "../imgs/Information Technology Ebook Cover.png";
import Carousel from "../Carousel/Carousel";

function Main() {
  return (
    <div className={mStyle["wrapper"]}>
      <div className={mStyle["triangle-bg"]}></div>
      <div className={mStyle["container"]}>
        <div className={mStyle["ebook-discription"]}>
          <div className={mStyle["title"]}>
            <h2>AI for Personalization and Customer Engagement</h2>
          </div>
          <div className={mStyle["summary"]}>
            <p>
              Are you ready to supercharge your customer engagement strategies? <br />
              Dive into the captivating realm of AI-driven personalization and
              discover how it can transform your business. Our comprehensive
              e-book is your key to mastering the art of creating unique and
              unforgettable customer experiences.
            </p>
          </div>

          <Carousel />
        </div>
        <div className={mStyle["ebook-cover"]}>
          <img className={mStyle["ebook-img"]} src={ebookPost} />
          <p>
            Don't miss this opportunity to transform your customer engagement –
            download now!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
