"use client";
import React, { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

const Testimonials = () => {
  useEffect(() => {
    const slider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const prevButton = document.getElementById('keen-slider-previous');
    const nextButton = document.getElementById('keen-slider-next');
    const prevButtonDesktop = document.getElementById('keen-slider-previous-desktop');
    const nextButtonDesktop = document.getElementById('keen-slider-next-desktop');

    prevButton?.addEventListener('click', () => slider.prev());
    nextButton?.addEventListener('click', () => slider.next());
    prevButtonDesktop?.addEventListener('click', () => slider.prev());
    nextButtonDesktop?.addEventListener('click', () => slider.next());

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <section className="shadow-md">
      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Alumni
            </h2>
            <p className="mt-4 text-gray-700">
              Amazing Story at Kshetra
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                <div className="bg-white shadow-lg px-4 py-6 max-w-[1000px] h-auto mx-auto rounded-lg border border-gray-300">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <div className="mt-4">
                        <p className="text-xl font-bold text-rose-600 sm:text-2xl">Ananya Saha</p>
                        <p className="mt-2 leading-relaxed text-gray-700 text-sm md:text-base">
                          Working as a media fellow at Kshetra Consulting has provided valuable experience for me in various aspects of media production, content creation, and communication. This role showcased different opportunities to learn from professionals, gain hands-on experience, and build a portfolio. From this role, I'm able to enhance my social media knowledge and creativity. This involves time management, team coordination, and research analysis. It's a great way to explore different roles within the media industry and network with professionals. 
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>

              {/* Add more slides as needed */}
            </div>

            {/* Mobile Navigation */}
            <div className="mt-8 flex justify-center gap-4 lg:hidden">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
