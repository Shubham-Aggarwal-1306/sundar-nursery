import React from "react";
import img2 from "./images/img2.avif";
import img3 from "./images/img3.avif";
import img4 from "./images/img4.avif";
import dam from "./images/Damascus.avif";
import rkr from "./images/rkr.avif";
import jasm from "./images/jasm.avif";
import md from "./images/md.avif";
import eb from "./images/eb.avif";
import rose from "./images/rose.avif";
import hm from "./images/hm.webp";
import al from "./images/al.webp";
import port from "./images/port.webp";
import hb from "./images/hb.webp";
import Cards from "./Cards";

const Home = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
              <div className="col-span-3">
                <img
                  className="rounded-xl"
                  src={img2}
                  alt="Image Description"
                />
              </div>

              <div className="col-span-4">
                <img
                  className="rounded-xl"
                  src={img3}
                  alt="Image Description"
                />
              </div>

              <div className="col-span-5">
                <img
                  className="rounded-xl"
                  src={img4}
                  alt="Image Description"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-green-500 font-info tracking-wider">
                  Transforming spaces with greenery
                </h2>
                <p className="text-black space-x-2 font-custom">
                  Discover a world of vibrant plants and captivating greenery
                  that will transform your spaces into stunning sanctuaries.
                </p>
              </div>

              <ul role="list" className="space-y-2 sm:space-y-4">
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span class="text-sm sm:text-base text-black font-custom">
                    <span class="font-bold text-orange-500 font-custom ">
                      Unearth Beauty in Every Corner
                    </span>{" "}
                    – Discover a world of vibrant plants and captivating
                    greenery that will transform your spaces into stunning
                    sanctuaries
                  </span>
                </li>

                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span class="text-sm sm:text-base text-black font-custom">
                    <span class="font-bold text-orange-500 font-custom ">
                      Nature's Haven Awaits
                    </span>
                    – Immerse yourself in the enchanting embrace of nature at
                    our nursery
                  </span>
                </li>

                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span class="text-sm sm:text-base text-black font-custom">
                    <span class="font-bold text-orange-500 font-custom ">
                      Elevate Your Garden Game
                    </span>
                    – Elevate your gardening experience with our carefully
                    nurtured plants
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-20">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <span className="text-green-500 font-info text-4xl text-center font-bold">
            <span className="font-bold text-orange-500 font-info tracking-wider">
              Botanical Beauty
            </span>
            : Our Plant Highlights
          </span>
        </div>

        <div className="flex flex-row gap-4 flex-wrap">
          <Cards imgSrc={dam} name="Damascus Rose" />
          <Cards imgSrc={rkr} name="Rat Ki Rani" />
          <Cards imgSrc={jasm} name="Jasminum sambac" />
          <Cards imgSrc={md} name="Madhumalti Dwarf" />
          <Cards imgSrc={eb} name="Elephant Bush" />
          <Cards imgSrc={rose} name="Rose" />
          <Cards imgSrc={hm} name="Hydrangea macrophylla" />
          <Cards imgSrc={port} name="Portulaca" />
          <Cards imgSrc={al} name="Aloevera" />
          <Cards imgSrc={hb} name="Hibiscus" />
        </div>
      </div>
    </>
  );
};

export default Home;