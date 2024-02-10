/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';

interface Image {
  url: string;
}

interface SliderProps {
  images: Image[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.sliderContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        >
          <img
            className={styles.sliderImage}
            src={image.url}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
