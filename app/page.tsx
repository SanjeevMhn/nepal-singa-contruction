import Image from "next/image";

export default function Home() {
  const experienceList = [
    {
      id: 1,
      name: "Experience",
      data: 25,
      desc: "Years in Business",
    },
    {
      id: 2,
      name: "Projects",
      data: 50,
      desc: "Projects Completed",
    },
    {
      id: 3,
      name: "Clients",
      data: 40,
      desc: "Happy Clients",
    },
  ];
  return (
    <main className="main-wrapper">
      <div className="hero-container flex items-center">
        <div className="w-[min(90%,95rem)] mx-auto header-info flex flex-col gap-[2.5rem] md:pr-[25rem] lg:pr-[50rem]">
          <div className="establised-date">
            <span className="p-[0.5rem_1.5rem] backdrop-blur-xs border border-neutral-300 rounded-xl text-white text-[2rem] font-semibold">
              EST. 2050 BS
            </span>
          </div>

          <h2 className="header-text text-[5.2rem] text-white font-extrabold leading-20">
            Building Vision into Reality
          </h2>
          <p className="description text-[2rem] text-white backdrop-blur-xs p-[1.2rem] border border-white rounded-xl leading-10 font-sans">
            Your trusted partner for commercial and residential construction
            excellence. We deliver quality, safety and innovation in every
            project we undertake.
          </p>
          <div className="btn-group flex items-center gap-[2rem]">
            <button
              type="button"
              className="btn p-[1.2rem_2.5rem] bg-[var(--clr-primary)] text-white rounded-xl text-[1.8rem] font-medium cursor-pointer"
            >
              View Our Work
            </button>
            <button
              type="button"
              className="btn p-[1.2rem_2.5rem] text-[var(--clr-primary)] rounded-xl bg-white text-[1.8rem] font-medium cursor-pointer"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>
      <div className="experience-cards bg-neutral-200 py-[4.5rem]">
        <div className="wrapper">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(30rem,100%),1fr))] gap-[2.5rem]">
            {experienceList.map((exp) => (
              <div
                className=" bg-white rounded-xl p-[2.5rem] shadow-md"
                key={exp.id}
              >
                <p className="text-neutral-500 text-[1.6rem] font-medium uppercase">{exp.name}</p>
                <h2 className="data text-[var(--clr-primary)] text-[4.2rem] font-bold">
                  {exp.data}+
                </h2>
                <p className="text-neutral-800 text-[1.8rem] font-semibold">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
