import Link from "next/link";
import ContactUs from "../(components)/ContactUs";
import DataGrid from "../(components)/DataGrid";

const ProjectPage = async () => {
  const data = await fetch(
    "https://script.google.com/macros/s/AKfycbxKBiJpHSdqN4bJn1h8xVsoU5u8QBbmnzNAAHYtkR9qpM89deAOamiahXGDhSAz6BbY/exec",
  );
  const projects: Array<any> = await data.json();
  return (
    <section className="projects-page bg-white">
      <header className="project-hero py-[8.5rem]">
        <div className="wrapper">
          <h2 className="text-[4.8rem] font-bold text-white text-center">
            Our Projects
          </h2>
          <div className="breadcrumb text-center text-white text-[2rem]">
            <Link href={"/"}>Home /</Link>
            <Link href={"/projects"}> Projects</Link>
          </div>
        </div>
      </header>
      <div className="project-list-container bg-blue-50">
        <div className="wrapper py-[5rem]">
          <DataGrid data={projects} />
        </div>
      </div>
      <ContactUs />
    </section>
  );
};

export default ProjectPage;
