import React, { useState, useEffect } from "react";
import carouselStyles from "./Carousel.module.css";

const cardData = [
  {
    title: "🚀 Stay Ahead",
    description:
      "Gain an edge over competitors with AI-driven personalization.",
  },
  {
    title: "🤝 Build Relationships",
    description:
      "Create lasting customer connections with personalized experiences.",
  },
  {
    title: "📈 Boost Conversions",
    description: "Increase ROI with AI-powered strategies.",
  },
  {
    title: "🔒 Data Security",
    description: "Ensure data privacy while harnessing personalization.",
  },
  {
    title: "💡 Practical Tips",
    description: "Get actionable insights for immediate implementation.",
  },
  {
    title: "📊 Measure Impact",
    description: "Track progress with analytics and KPIs.",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={carouselStyles["carousel"]}>
      {cardData.map((item, index) => (
        <div
          key={index}
          className={`${carouselStyles["card"]} ${
            activeIndex === index ? carouselStyles["active"] : ""
          }`}
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
