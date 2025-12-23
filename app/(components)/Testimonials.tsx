"use client";

import { useEffect, useState } from "react";

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
        <ul className="testimonial-list w-[100%] overflow-hidden cursor-pointer">
          <li
            className={`flex testimonial w-full transition-transform ease-in`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((test) => (
              <div
                className="inner-container min-w-[100%] bg-blue-50"
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
