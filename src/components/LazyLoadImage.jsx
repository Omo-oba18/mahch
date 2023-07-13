import React, { useRef, useEffect, useState } from "react";

const useLazyImage = (src) => {
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = new Image();
          image.src = src;
          image.onload = () => {
            entry.target.src = src;
            setIsLoaded(true);
            observer.unobserve(imageRef.current);
          };
        }
      });
    });

    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, [src]);

  return { imageRef, isLoaded };
};

const LazyImage = ({ src, alt, width, height }) => {
  const { imageRef, isLoaded } = useLazyImage(src);

  return (
    <img
      ref={imageRef}
      alt={alt}
      style={{
        filter: isLoaded ? "none" : "blur(20px)",
        transition: "filter 0.5s ease",
        width,
        height
      }}
    />
  );
};

export default LazyImage;
