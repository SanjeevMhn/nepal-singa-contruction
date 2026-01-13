"use client";

import { useEffect, useState } from "react";
import "../styles/testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mr. Sanjeev Khanel",
      post: "Senior Manager",
      company: "Dumbikas Poultry Farm PVT. LTD",
      testimonial: ` We appreciate their excellence site management, highest standard of
        quality ond professional spirit shown during the project period.`,
    },
    {
      id: 2,
      name: "Mr. Tek Nath Pandey",
      post: "Chief Finance Officer",
      company: "Nepal WellHope Agri-Tech LTD",
      testimonial: `The Contractor has duly executed the work as per contract documents and specification to our
        entire satisfaction.`,
    },
    {
      id: 3,
      name: "Mr. Uddab Chaulagain",
      post: "Head-Administraion",
      company: "Agni Incorporated PVT LTD.",
      testimonial: `I strongly recomment the company for the biggest projects of the kind in future.`,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrentSlide(
          currentSlide < testimonials.length - 1 ? currentSlide + 1 : 0
        );
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, paused]);

  const dots = testimonials.map((test) => test.id - 1);

  return (
    <section className="testimonial-container py-[5rem] bg-blue-50">
      <div className="wrapper flex flex-col gap-[3.2rem]">
        <header className="text-black">
          <p className="title text-[2rem]">Testimonials</p>
          <h2 className="text-[3.2rem] font-bold">Client Reviews</h2>
        </header>
        <div className="testimonial-list-wrapper">
          <ul className="testimonial-list w-[100%] overflow-hidden cursor-pointer">
            <li
              className={`flex testimonial w-full transition-transform ease-in`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((test) => (
                <div
                  className="inner-container min-w-[100%] bg-blue-50 flex items-center"
                  key={test.id}
                >
                  <div
                    className="p-[2.5rem] shadow-lg border border-neutral-600 bg-white rounded-xl flex flex-col gap-[2rem] md:w-1/2 md:mx-auto"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                  >
                    <p className="desc text-[2rem] text-neutral-800 grow flex items-center">
                      "{test.testimonial}"
                    </p>
                    <div className="footer mt-auto pt-[1.5rem] border-t border-t-neutral-600">
                      <h2 className="name text-[1.6rem] font-bold">
                        {test.name}
                      </h2>
                      <p className="company text-[1.5rem] font-semibold">
                        {test.post}
                      </p>
                      <p className="company text-[1.5rem] font-semibold">
                        {test.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </li>
          </ul>
          <button
            type="button"
            className={`btn prev-btn bg-white rounded-full w-[3.5rem] h-[3.5rem] items-center justify-center flex items-center justify-center shadow-lg border border-slate-600 `}
            onClick={() => {
              setCurrentSlide(
                currentSlide !== 0 ? currentSlide - 1 : testimonials.length - 1
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-[70%] h-[70%]"
            >
              <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
            </svg>
          </button>
          <button
            type="button"
            className={`btn next-btn bg-white rounded-full w-[3.5rem] h-[3.5rem] flex items-center justify-center shadown-lg border border-slate-600`}
            onClick={() => {
              setCurrentSlide(
                currentSlide < testimonials.length - 1 ? currentSlide + 1 : 0
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-[70%] h-[70%]"
            >
              <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
            </svg>
          </button>
        </div>
        <div className="carousel-dots flex items-center gap-[0.5rem] mx-auto">
          {dots.map((dot) => (
            <span
              className={`dot w-[1.5rem] h-[1.5rem] rounded-full cursor-pointer ${
                currentSlide == dot
                  ? "bg-[var(--clr-primary)]"
                  : "bg-neutral-400"
              } `}
              key={dot}
              onClick={() => setCurrentSlide(dot)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
