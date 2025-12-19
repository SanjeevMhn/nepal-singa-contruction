"use client";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mr. Sanjeev Khanel (Senior Manager)",
      company: "Dumbikas Poultry Farm PVT. LTD",
      testimonial: ` We appreciate their excellence site management, highest standard of
        quality ond professional spirit shown during the project period.`,
    },
    {
      id: 2,
      name: "Mr. Tek Nath Pandey   (Chief Finance Officer)",
      company: "Nepal WellHope Agri-Tech LTD",
      testimonial: `The Contractor has duly executed the work as per contract documents and specification to our
        entire satisfaction.`,
    },
    {
      id: 3,
      name: "Mr. Uddab Chaulagain   (Head-Administraion",
      company: "Agni Incorporated PVT LTD.",
      testimonial: `I strongly recomment the company for the biggest projects of the kind in future.`,
    },
  ];

  return (
    <section className="testimonial-container py-[5rem] bg-blue-50">
      <div className="wrapper flex flex-col gap-[3.2rem]">
        <header className="text-black">
          <p className="title text-[2rem]">Testimonials</p>
          <h2 className="text-[3.2rem] font-bold">Client Reviews</h2>
        </header>
        <ul className="testimonial-list grid grid-cols-[repeat(auto-fill,minmax(min(30rem,100%),1fr))] gap-[1.5rem] overflow-x-auto">
          {testimonials.map((test) => (
            <li className="testimonial flex" key={test.id}>
              <div className="inner-container my-auto p-[2.5rem] shadow-lg border border-neutral-600 bg-white rounded-xl flex flex-col  gap-[2rem]">
                <p className="desc text-[1.8rem] text-neutral-800 grow flex items-center">
                  {test.testimonial}
                </p>
                <div className="footer mt-auto">
                  <h2 className="name text-[1.8rem] font-bold">{test.name}</h2>
                  <p className="company text-[1.6rem] font-semibold">
                    {test.company}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
