"use client";
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import "@/styles/globals.css";

const TypingEffect = ({ text }) => {
  const [isClient, setIsClient] = useState(false);
  const typingDelay = 35;
  const totalTypingTime = typingDelay * text.length + 5000;

  useEffect(() => {
    setIsClient(true); // Set the flag to indicate that we are on the client

    const timer = setTimeout(() => {
      const cursor = document.querySelector('.my-custom-cursor');
      if (cursor) {
        cursor.classList.add('hide-cursor');
      }
    }, totalTypingTime);

    return () => clearTimeout(timer);
  }, [totalTypingTime, text]);

  if (!isClient) {
    return null; // Return null when rendering on the server
  }

  return (
    <Typewriter
      key={text}
      options={{
        cursorClassName: 'my-custom-cursor',
      }}
      onInit={(typewriter) => {
        typewriter
          .changeDelay(typingDelay)
          .typeString(text)
          .pauseFor(50)
          .start();
      }}
    />
  );
};

export default TypingEffect;
