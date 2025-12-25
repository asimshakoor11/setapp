"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const testimonials = [
    {
      quote:
        "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
      author: "Arash Pourhabibi",
      handle: "@ArashPourhabibi",
      bgColor: "#71719A",
      social: "twitter",
    },
    {
      quote:
        "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
      author: "Mauricio Sanchez",
      handle: "@m741s",
      bgColor: "#D9AE89",
      social: "instagram",
    },
    {
      quote:
        "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
      author: "Meredith Sweet",
      handle: "@meredith.sweet.silberstein",
      bgColor: "#765070",
      social: "facebook",
    },
    {
      quote:
        "Setapp has completely changed how I use my Mac. The variety of apps is just incredible for the price.",
      author: "Sarah Jenkins",
      handle: "@sarah_j",
      bgColor: "#384C75",
      social: "twitter",
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

    const updateSnaps = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      updateSnaps();
      onSelect();
    });

    const timeout = setTimeout(() => {
      updateSnaps();
      onSelect();
    }, 0);

    return () => {
      clearTimeout(timeout);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#FEFEFE] pt-16 lg:pt-30">
      <div className="mx-auto max-w-[1260px] px-6 lg:px-7.5 border-b border-[#E5E5E5]">
        {/* Section Header */}
        <div className="">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-[100px]">
            {/* Title */}
            <div className="lg:w-[500px]">
              <h2 className="text-[#26262B] text-4xl lg:text-[36px] font-semibold leading-[48px] tracking-[1.3px]">
                Setapp in your words.
              </h2>
            </div>

            {/* Description and Social Icons */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between flex-1 gap-6">
              <div className="lg:max-w-[300px]">
                <p className="text-[#26262B] text-lg font-normal leading-[32px]">
                  What you say about how Setapp
                  <br className="hidden lg:block" /> powers you up.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2.5  pb-5 lg:pb-0 lg:pl-14">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 0C37.2554 0 48 10.7446 48 24C48 37.2554 37.2554 48 24 48C10.7446 48 0 37.2554 0 24C0 10.7446 10.7446 0 24 0ZM21.6185 18.504V21.0535H19.4991L19.5028 24.9065L22.0431 24.8769V33.3748H25.8591V24.8769H28.8258L29.2505 21.0554H25.8591V18.9305C25.8591 18.3249 25.9994 18.0812 26.7083 18.0812H29.2505L29.2062 14.4369C29.2062 14.4369 28.1686 14.2505 26.5477 14.2505C22.992 14.2505 21.6185 16.392 21.6185 18.504Z"
                      fill="#3A5792"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 0C37.2554 0 48 10.7446 48 24C48 37.2554 37.2554 48 24 48C10.7446 48 0 37.2554 0 24C0 10.7446 10.7446 0 24 0ZM28.6025 15.7495C26.2523 15.7495 24.3489 17.7138 24.3489 20.1342C24.3489 20.4775 24.3858 20.8117 24.4597 21.1329C20.9243 20.9502 17.7914 19.2055 15.6942 16.5526C15.3149 17.2253 15.1164 17.9847 15.1182 18.7569C15.1182 20.2763 15.8677 21.6185 17.0105 22.4049C16.3328 22.3829 15.6709 22.1946 15.0831 21.8566V21.912C15.0831 24.0351 16.5489 25.8074 18.4948 26.2117C17.8694 26.3862 17.2117 26.4115 16.5748 26.2855C17.1138 28.0265 18.6849 29.2948 20.5458 29.3317C19.6724 30.0418 18.6647 30.5685 17.583 30.8803C16.5013 31.1921 15.3679 31.2826 14.2505 31.1465C16.182 32.4306 18.4498 33.1159 20.7692 33.1163C28.5914 33.1163 32.8689 26.4351 32.8689 20.6418C32.8693 20.4529 32.8656 20.2639 32.8578 20.0751C33.6946 19.45 34.4135 18.6811 34.9809 17.8043C34.2065 18.159 33.3821 18.3925 32.5366 18.4966C33.4319 17.9397 34.096 17.0783 34.4068 16.0708C33.5753 16.58 32.6613 16.9398 31.7058 17.1342C31.3139 16.6994 30.8353 16.3516 30.3008 16.1132C29.7663 15.8747 29.1878 15.7508 28.6025 15.7495Z"
                      fill="#2691D5"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 0C37.2554 0 48 10.7446 48 24C48 37.2554 37.2554 48 24 48C10.7446 48 0 37.2554 0 24C0 10.7446 10.7446 0 24 0ZM20.5385 15C19.0696 15 17.6608 15.5835 16.6222 16.6222C15.5835 17.6608 15 19.0696 15 20.5385V27.4615C15 28.9304 15.5835 30.3392 16.6222 31.3778C17.6608 32.4165 19.0696 33 20.5385 33H27.4615C28.9304 33 30.3392 32.4165 31.3778 31.3778C32.4165 30.3392 33 28.9304 33 27.4615V20.5385C33 19.0696 32.4165 17.6608 31.3778 16.6222C30.3392 15.5835 28.9304 15 27.4615 15H20.5385ZM28.1132 18.7828C28.1071 18.6312 28.1316 18.4799 28.1854 18.338C28.2392 18.1961 28.3211 18.0666 28.4262 17.9572C28.5313 17.8477 28.6574 17.7606 28.797 17.7012C28.9366 17.6417 29.0867 17.611 29.2385 17.611C29.3902 17.611 29.5403 17.6417 29.6799 17.7012C29.8195 17.7606 29.9456 17.8477 30.0507 17.9572C30.1558 18.0666 30.2377 18.1961 30.2915 18.338C30.3453 18.4799 30.3698 18.6312 30.3637 18.7828C30.3519 19.0733 30.2282 19.348 30.0185 19.5495C29.8088 19.7509 29.5292 19.8633 29.2385 19.8633C28.9477 19.8633 28.6682 19.7509 28.4584 19.5495C28.2487 19.348 28.125 19.0733 28.1132 18.7828ZM24.0111 28.5009C22.8174 28.5009 21.6725 28.0267 20.8284 27.1826C19.9844 26.3385 19.5102 25.1937 19.5102 24C19.5102 22.8063 19.9844 21.6615 20.8284 20.8174C21.6725 19.9733 22.8174 19.4991 24.0111 19.4991C25.2048 19.4991 26.3496 19.9733 27.1937 20.8174C28.0378 21.6615 28.512 22.8063 28.512 24C28.512 25.1937 28.0378 26.3385 27.1937 27.1826C26.3496 28.0267 25.2048 28.5009 24.0111 28.5009ZM24 27.0203C24.7957 27.0203 25.5587 26.7042 26.1213 26.1416C26.6839 25.579 27 24.816 27 24.0203C27 23.2247 26.6839 22.4616 26.1213 21.899C25.5587 21.3364 24.7957 21.0203 24 21.0203C23.2044 21.0203 22.4413 21.3364 21.8787 21.899C21.3161 22.4616 21 23.2247 21 24.0203C21 24.816 21.3161 25.579 21.8787 26.1416C22.4413 26.7042 23.2044 27.0203 24 27.0203Z"
                      fill="#D41792"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 0C37.2554 0 48 10.7446 48 24C48 37.2554 37.2554 48 24 48C10.7446 48 0 37.2554 0 24C0 10.7446 10.7446 0 24 0ZM34.0615 18.8418C33.9449 18.3911 33.712 17.979 33.3861 17.6466C33.0601 17.3142 32.6526 17.0732 32.2043 16.9477C30.5668 16.5009 24 16.5009 24 16.5009C24 16.5009 17.4332 16.5009 15.7957 16.9477C15.3474 17.0732 14.9399 17.3142 14.6139 17.6466C14.288 17.979 14.0551 18.3911 13.9385 18.8418C13.5009 20.5126 13.5009 24 13.5009 24C13.5009 24 13.5009 27.4874 13.9385 29.1582C14.1785 30.0812 14.8911 30.8049 15.7957 31.0523C17.4332 31.4991 24 31.4991 24 31.4991C24 31.4991 30.5668 31.4991 32.2043 31.0523C32.6526 30.9268 33.0601 30.6858 33.3861 30.3534C33.712 30.021 33.9449 29.6089 34.0615 29.1582C34.5009 27.4874 34.5009 24 34.5009 24C34.5009 24 34.5009 20.5126 34.0615 18.8418ZM21.6794 27.4855V20.4148L27.9157 23.9502L21.6794 27.4855Z"
                      fill="#EB0C19"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Desktop */}
          <div className="hidden lg:flex w-full justify-end py-5 gap-[46px] z-10">
            <button
              onClick={scrollPrev}
              className=" opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-black w-8 h-8" />
            </button>
            <button
              onClick={scrollNext}
              className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="text-black w-8 h-8" />
            </button>
          </div>

          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_49%] lg:flex-[0_0_32.333%] min-w-0"
                >
                  <div className="bg-[#F5F5F5] rounded-[15px] p-[7px] flex flex-col h-full">
                    {/* Quote Card */}
                    <div
                      className="rounded-lg py-[38px] px-[22px]  min-h-[299px]"
                      style={{ backgroundColor: testimonial.bgColor }}
                    >
                      <p className="text-white text-[26px] font-medium leading-[36px]">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-end justify-between p-6 pt-9.5">
                      <div className="flex flex-col gap-0">
                        <p className="text-[#26262B] text-lg font-semibold leading-[32px]">
                          {testimonial.author}
                        </p>
                        <p className="text-[#9F9F9F] text-sm font-semibold leading-[24px]">
                          {testimonial.handle}
                        </p>
                      </div>

                      {/* Social Icon */}
                      <div className="flex items-center">
                        {testimonial.social === "twitter" && (
                          <svg
                            width="22"
                            height="18"
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.134 0C16.424 0 17.589 0.552 18.407 1.435C19.4124 1.2339 20.3755 0.860755 21.254 0.332C20.9228 1.38085 20.2225 2.27404 19.283 2.846C20.1728 2.73906 21.0413 2.49799 21.859 2.131C21.2584 3.04156 20.5006 3.83798 19.621 4.483C19.629 4.678 19.634 4.873 19.634 5.071C19.634 11.076 15.124 18 6.874 18C4.342 18 1.984 17.248 0 15.958C1.17623 16.101 2.36916 16.0083 3.50919 15.6853C4.64922 15.3624 5.71352 14.8156 6.64 14.077C4.677 14.04 3.02 12.726 2.45 10.921C3.12197 11.0516 3.81507 11.0249 4.475 10.843C2.424 10.426 0.878 8.59 0.878 6.387V6.33C1.483 6.67 2.175 6.875 2.91 6.898C2.29354 6.47881 1.78931 5.91482 1.44149 5.25546C1.09368 4.59609 0.912898 3.86148 0.915 3.116C0.915 2.283 1.136 1.503 1.522 0.832C3.734 3.58 7.038 5.39 10.765 5.58C10.6875 5.24013 10.6486 4.8926 10.649 4.544C10.649 2.034 12.657 0 15.134 0Z"
                              fill="#1C95E0"
                            />
                          </svg>
                        )}
                        {testimonial.social === "instagram" && (
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3 0H15.023C15.8186 0 16.5817 0.31607 17.1443 0.87868C17.7069 1.44129 18.023 2.20435 18.023 3V15C18.023 15.7956 17.7069 16.5587 17.1443 17.1213C16.5817 17.6839 15.8186 18 15.023 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15L0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0ZM13.13 3.783C13.1303 4.08163 13.2492 4.36793 13.4605 4.57891C13.6719 4.78989 13.9584 4.90827 14.257 4.908C14.5556 4.90773 14.8419 4.78885 15.0529 4.5775C15.2639 4.36614 15.3823 4.07963 15.382 3.781C15.3817 3.48237 15.2628 3.19607 15.0515 2.98509C14.8401 2.77411 14.5536 2.65573 14.255 2.656C13.9564 2.65627 13.6701 2.77515 13.4591 2.9865C13.2481 3.19786 13.1297 3.48437 13.13 3.783ZM9.023 13.5C9.61443 13.5005 10.2002 13.3845 10.7468 13.1587C11.2934 12.9328 11.7901 12.6015 12.2086 12.1836C12.6272 11.7657 12.9593 11.2695 13.186 10.7232C13.4127 10.177 13.5296 9.59143 13.53 9C13.53 6.515 11.513 4.5 9.024 4.5C8.43266 4.49961 7.84703 4.61569 7.30055 4.84162C6.75407 5.06756 6.25744 5.39891 5.83902 5.81678C5.4206 6.23464 5.08858 6.73083 4.86192 7.277C4.63526 7.82318 4.51839 8.40866 4.518 9C4.518 11.485 6.535 13.5 9.023 13.5ZM9.012 12.021C8.61777 12.0213 8.22735 11.9439 7.86303 11.7933C7.49871 11.6426 7.16763 11.4217 6.88868 11.1431C6.60973 10.8646 6.38839 10.5338 6.23728 10.1697C6.08617 9.80554 6.00826 9.41523 6.008 9.021C6.008 7.364 7.353 6.021 9.012 6.021C9.80801 6.02073 10.5715 6.33662 11.1347 6.8992C11.6978 7.46179 12.0145 8.22499 12.015 9.021C12.015 10.678 10.671 12.021 9.012 12.021Z"
                              fill="#E4009C"
                            />
                          </svg>
                        )}
                        {testimonial.social === "facebook" && (
                          <svg
                            width="9"
                            height="18"
                            viewBox="0 0 9 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.957 4.004V6.404H0L0.003 10.03L2.348 10.003V18H5.87V10.003H8.609L9 6.403H5.87V4.405C5.87 3.835 6 3.605 6.652 3.605H9L8.96 0.176C8.96 0.176 8.001 0 6.503 0C3.223 0 1.957 2.015 1.957 4.004Z"
                              fill="#3B5998"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Avatar Placeholder */}
                    <div
                      className="w-[50px] h-[50px] rounded-full bg-gray-300 absolute mt-[273px] ml-[22px] shadow-[0_1px_1px_0_rgba(0,0,0,0.45)]"
                      style={{
                        boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.45)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-[25px] py-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-[#1D1D22]" : "bg-[#D5D4D4]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
