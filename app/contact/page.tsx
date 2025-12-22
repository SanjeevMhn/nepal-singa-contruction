import Link from "next/link";

const ContactPage = () => {
  return (
    <section className="about-page bg-white">
      <header className="project-hero py-[8.5rem]">
        <div className="wrapper">
          <h2 className="text-[4.8rem] font-bold text-white text-center">
            Contact
          </h2>
          <div className="breadcrumb text-center text-white text-[2rem]">
            <Link href={"/"}>Home /</Link>
            <Link href={"/contact"}> Contact</Link>
          </div>
        </div>
      </header>
    </section>
  );
};

export default ContactPage;
