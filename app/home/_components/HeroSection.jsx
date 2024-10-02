"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn's button component

export default function HeroSection() {
  // Using React's useState hook to manage the menu's state
  const [expanded, setExpanded] = useState(false);

  // Scroll to About Us section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about'); // Ensure your About section has the id 'about'
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="shadow-md">
      <section className="py-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-5 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <h2 className="text-xl sm:text-2xl md:text-3xl mb-[-30px]">
                We are,
              </h2>
              <h1 className="text-4xl font-normal mb-[-20px] text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-black">
                  Kshetra Consulting
                </span>{" "}
                Inspiration
              </h1>
              <p className="max-w-lg text-xl font-normal text-gray-400">
                Kshetra is a Telangana, Karnataka, and Maharashtra-based
                non-profit political consulting organization that has spent the
                last 7 years working to strengthen Indian democracy. Initiated
                by Rishikesh Reddy an XLRI Alumini and later co-founded by
                alumni of top Indian institutes (IIT-Madras, Delhi and IIM-A),
                Kshetra provides non-partisan support ranging from grassroots
                mobilization to policy design to help political parties,
                leaders, groups and change-makers across the ideological
                spectrum.
              </p>
            </div>

            {/* Centered Button on larger screens */}
            <div className="mt-8 flex justify-start lg:justify-center">
              <Button onClick={scrollToAbout} className="bg-blue-500 text-white px-6 py-3 rounded-md">
                Scroll Down
              </Button>
            </div>

            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-30 md:right-0">
              <img
                className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                src="https://static.wixstatic.com/media/630fd8_634c9dff185040769f4a9c83312cf1d3~mv2.jpg/v1/fill/w_615,h_359,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Indian%20Parliament%20.jpg"
                alt="Indian Parliament"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
