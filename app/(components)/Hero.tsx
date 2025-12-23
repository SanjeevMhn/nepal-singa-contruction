import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-container flex items-center h-[calc(100vh-9rem)] md:h-[calc(100vh-10)]">
      <div className="w-[min(90%,95rem)] mx-auto header-info flex flex-col gap-[2.5rem] md:pr-[25rem] lg:pr-[50rem]">
        <div className="establised-date">
          <span className="p-[0.5rem_1.5rem] backdrop-blur-xs border border-neutral-300 rounded-xl text-white text-[1.6rem] md:text-[2rem] font-semibold">
            EST. 2050 BS
          </span>
        </div>

        <h2 className="header-text text-[3.5rem] md:text-[5.2rem] text-white font-bold md:font-extrabold leading-20">
          Building Vision into Reality
        </h2>
        <p className="description text-[1.75rem] md:text-[2rem] text-white backdrop-blur-xs p-[1.2rem] border border-white rounded-xl leading-10 font-sans">
          Your trusted partner for commercial and residential construction
          excellence. We deliver quality, safety and innovation in every project
          we undertake.
        </p>
        <div className="btn-group flex items-center gap-[2rem]">
          <Link
            href={"/projects"}
            className="btn p-[0.5rem_1rem] md:p-[1.2rem_2.5rem] bg-[var(--clr-primary)] text-white rounded-xl text-[1.5rem] md:text-[1.8rem] font-medium cursor-pointer"
          >
            View Our Work
          </Link>
          <Link
            href={"/contact"}
            className="btn p-[0.5rem_1rem] md:p-[1.2rem_2.5rem] text-[var(--clr-primary)] rounded-xl bg-white text-[1.5rem] md:text-[1.8rem] font-medium cursor-pointer"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
