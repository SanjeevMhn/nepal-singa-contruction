import Link from "next/link";
import ContactUs from "../(components)/ContactUs";
import DataGrid from "../(components)/DataGrid";
import ImageGrid from "../(components)/ImageGrid";
import "../styles/projects.css";

const ProjectPage = async () => {
  const [imagesData, projectsData] = await Promise.all([
    fetch(
      "https://script.google.com/macros/s/AKfycbxT4hvXq-G55uiUwj90ttvMNTWbpdKIpBX2AXrgNWvdctSJkfzhlCh43xMq38LTFlk5/exec"
    ),
    fetch(
      "https://script.google.com/macros/s/AKfycbxKBiJpHSdqN4bJn1h8xVsoU5u8QBbmnzNAAHYtkR9qpM89deAOamiahXGDhSAz6BbY/exec",
    ),
  ]);
  const [images, projects] = await Promise.all([
    imagesData.json(),
    projectsData.json(),
  ]);
  return (
    <section className="projects-page bg-white">
      <header className="project-hero py-[8.5rem]" id="grid">
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
      <div className="project-list-container bg-blue-50" >
        <div className="wrapper py-[5rem] flex flex-col gap-[2.5rem]">
          <header className="view-type">
            <label htmlFor="grid_view" className="">
              <input
                type="radio"
                name="view"
                id="grid_view"
                className=""
                defaultChecked
              />
              Gallery
            </label>
            <label htmlFor="list_view" className="">
              <input type="radio" name="view" id="list_view" className="" />
              Project List
            </label>
          </header>
          <div className="image-grid-section hidden">
            <ImageGrid data={images} />
          </div>
          <div className="data-grid-section hidden">
            <DataGrid data={projects} />
          </div>
        </div>
      </div>
      <ContactUs />
    </section>
  );
};

export default ProjectPage;
