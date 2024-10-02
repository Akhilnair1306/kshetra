"use client"
import React, { useEffect, useState } from 'react';

const AboutSection = () => {
  const [text, setText] = useState('');
  const fullText = `We are dedicated to providing the best AI-powered form builder to simplify your data collection process.
                    Our platform offers a user-friendly interface, customizable templates, and seamless integration
                    to help you create dynamic forms effortlessly.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index += 1;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed here (in milliseconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [fullText]);

  return (
    <section id= "about" className="flex flex-col items-center py-10 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 animate-pulse">About Us</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl">
        {text}
      </p>
    </section>
  );
};

export default AboutSection;
