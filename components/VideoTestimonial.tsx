"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function VideoTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
      author: "Jason Staczek",
      bgColor: "bg-setapp-purple",
    },
    {
      quote:
        "Creative professionals rely on  to streamline their toolbox and focus on what truly matters: their craft.",
      author: "Elena Rossi",
      bgColor: "bg-setapp-blue",
    },
    {
      quote:
        "Developers find Setapp indispensable for managing complex projects with ease and speed.",
      author: "Marcus Chen",
      bgColor: "bg-setapp-dark",
    },
    {
      quote:
        "Designers use Setapp to access premium tools that help bring their vision to life with precision.",
      author: "Sarah Jenkins",
      bgColor: "bg-setapp-lavender",
    },
  ];

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onInit = () => {
      onSelect();
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);

    // Call onSelect once after everything is set up via timeout to avoid synchronous setState lint
    const timeout = setTimeout(() => {
      onSelect();
    }, 0);

    return () => {
      clearTimeout(timeout);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onInit);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, var(--color-setapp-dark) 0%, var(--color-setapp-dark) 50%, var(--color-setapp-white) 50%, var(--color-setapp-white) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1395px] pt-10 lg:pt-[130px] px-6 lg:px-10 relative">
        {/* Main Carousel Container */}
        <div className="relative pt-7.5">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div
                    className={`rounded-[20px] overflow-hidden relative flex flex-col lg:flex-row items-start min-h-[600px] lg:min-h-[720px] ${testimonial.bgColor}`}
                  >
                    {/* Left Content Area */}
                    <div className="w-full lg:w-[556px] flex flex-col justify-center pt-8 pl-8 lg:pt-[209px] lg:pl-[91px] z-10 relative">
                      <div className="flex flex-col gap-5">
                        {/* Quote */}
                        <div className="max-w-[556px]">
                          <p className="text-white text-[26px] font-medium leading-[40.04px] align-middle">
                            {testimonial.quote}
                          </p>
                        </div>

                        {/* Author */}
                        <div>
                          <p className="text-white text-[16px] font-normal leading-none align-middle">
                            {testimonial.author}
                          </p>
                        </div>
                      </div>

                      {/* Play Button */}
                      <button
                        className="w-[74px] h-[74px] rounded-full bg-white flex items-center justify-center hover:bg-white/95 transition-colors shadow-lg mt-10 lg:mt-[132px] cursor-pointer"
                        aria-label="Watch video"
                      >
                        <Play className="w-6 h-6 text-setapp-gray fill-setapp-gray ml-1" />
                      </button>
                    </div>

                    {/* Right Image Area */}
                    <div className="w-full lg:w-auto lg:flex-1 flex items-end justify-end relative lg:absolute lg:right-0 lg:bottom-0 lg:top-0 min-h-[300px] lg:min-h-0">
                      <Image
                        src="/assests/jason-image.png"
                        alt={testimonial.author}
                        width={670}
                        height={690}
                        className="w-full h-full lg:w-[670px] lg:h-[690px] object-cover object-center lg:object-bottom"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden lg:flex absolute right-[46px] top-[90px] gap-[46px] z-20">
            <button
              onClick={scrollPrev}
              className="text-white opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={scrollNext}
              className="text-white opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-[25px] mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === selectedIndex
                    ? "bg-setapp-darkHover"
                    : "bg-setapp-dot"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
