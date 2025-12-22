import Link from "next/link";

const ProjectPage = () => {
  return (
    <section className="projects-page bg-white">
      <header className="project-hero py-[8.5rem]">
        <div className="wrapper">
          <h2 className="text-[4.8rem] font-bold text-white text-center">Our Projects</h2>
          <div className="breadcrumb text-center text-white text-[2rem]">
            <Link href={'/'}>Home /</Link>
            <Link href={"/projects"}> Projects</Link>
          </div>
        </div>
      </header>
    </section>
  );
};

export default ProjectPage;
