import Link from "next/link";
import ContactUs from "../(components)/ContactUs";

const AboutPage = () => {
  return (
    <section className="about-page bg-white">
      <header className="project-hero py-[8.5rem]">
        <div className="wrapper">
          <h2 className="text-[4.8rem] font-bold text-white text-center">
            About Us
          </h2>
          <div className="breadcrumb text-center text-white text-[2rem]">
            <Link href={"/"}>Home /</Link>
            <Link href={"/about"}> About Us</Link>
          </div>
        </div>
      </header>
      <div className="wrapper py-[5rem]">
        {/* <article className="background mb-[2rem]">
          <h2 className="text-[2.2rem] font-bold mb-[1.5rem]">Background</h2>
          <p className="text-[1.7rem] font-semibold text-neutral-700">
            The development of any country depends upon the development of
            infrastructures. Construction industry, in view of its direct and
            indirect contributions to the GDP and employment has a major role in
            overall social and economic development. It produces not only
            infrastructures required for transportation, communication, water
            supply, power etc., but also buildings and other structures that
            shelter economic and social activities. Nepal has a long history in
            the field of Construction / Architectural work which dates back to
            hundreds of years. Our construction quality and workmanship were
            appreciated and recognized worldwide and in this connection it is
            worthwhile to mention the name of our famous architect Araniko. But
            in the past few decades, construction industry is growing and making
            significant strides. However despite the increase in the number of
            construction companies, the technological base is still very weak.
            The quality and timely construction of the infrastructure could not
            be achieved due to incompetent working style. There is a need to
            modernize the construction industry and its management to cut down
            cost and time, to improve the quality and aesthetics and to bring
            all round productivity enhancement. We have therefore, decided to
            come up in this prestigious field in order to bring about massive
            changes in the present working environment. Our objective is to
            prove ourselves as one of the best construction companies in Nepal.
            We are therefore, committed to stringent quality control confirming
            to international standard and our motto is to satisfy our valuable
            client and maintain the tradition of excellence through the
            involvement of experienced personnel and high tech construction
            equipment. We are committed to expand and remain in this field
            forever by providing quality and time bound services to our valuable
            client by providing complete satisfaction.
          </p>
        </article> */}

        <article className="introduction">
          <h2 className="text-[2.2rem] font-bold mb-[1.5rem] pb-[1.2rem] underline underline-offset-[2rem] text-center mx-auto">
            About our company
          </h2>
          <p className="text-[1.7rem] font-semibold text-neutral-700 pb-[1.2rem]">
            Nepal Singa Construction Pvt. Ltd. is one of the leading
            construction company in the field of construction business in Nepal.
            It is a private company registered under the HMG Company Act, with
            the registered office in Pulchowk, Lalitpur. Looking ahead, the
            focus is steering construction business forward by adopting new
            technologies and innovations. Its field of expertise includes all
            professional activities related to the construction works of
            buildings, roads, water supply, housing projects and other related
            disciplines.{" "}
          </p>
          <p className="text-[1.7rem] font-semibold text-neutral-700 pb-[1.2rem]">
            It is an organization of expert, dedicated and resourceful
            professionals representing a wide range of expertise. It has
            capacity of utilizing diverse talents and technologies, planning,
            coordinating and executing the work with prime quality. The company
            focuses in prime quality in their output and has immense reputation
            when it comes to completion of the projects in time.
          </p>
          <p className="text-[1.7rem] font-semibold text-neutral-700 pb-[1.2rem]">
            At present, the organization has 20 full time staffs consisting of
            Project Director, Project Manager, Civil Engineer, Electrical
            Engineer, Surveyor, Technical Support staff and Administrative
            staff, and 70 full time skilled labors. It has undertaken projects
            for various clients, which include HMG, INGO and Private sector.{" "}
          </p>

          <p className="text-[1.7rem] font-semibold text-neutral-700 pb-[1.2rem]">
            The company is confidently inclined towards the usage of computer
            applications in the modern day construction business. Nevertheless,
            it also implements the use of computer application for proper
            managerial activities in the office, site and store. These are a few
            software that revolve around our work.
            <ul className="list list-disc pl-[5rem] pt-[2rem]">
              <li>Primavera </li>
              <li>Microsoft Project</li>
              <li>AutoCAD</li>
              <li>Bar bending Software</li>
              <li>Structural Analysis</li>
              <li>Microsoft Office</li>
            </ul>
          </p>

          <p className="text-[1.7rem] font-semibold text-neutral-700  pb-[1.2rem]">
            We are applying latest technology Lean Construction Management for
            more efficient and effective construction. It also help to complete
            the project on time. We are committed to provide professional
            service to our clients with our team of experienced staff, a large
            fleet of plant, equipment and with sound financing. This has
            engineered a good understanding with our clients and hence given us
            a much needed confidence. We hope to keep the momentum by continuing
            to work par excellence.
          </p>
        </article>
      </div>
      <ContactUs />
    </section>
  );
};

export default AboutPage;
