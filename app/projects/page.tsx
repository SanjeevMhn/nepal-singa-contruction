import Link from "next/link";
import ContactUs from "../(components)/ContactUs";

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
          <div className="project-list-table-container bg-white overflow-x-auto py-[2.5rem] rounded-[1.2rem] shadow-xl">
            <table className="w-full table">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Description</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project: any, index: number) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{project.name}</td>
                    <td>{project.location}</td>
                    <td>
                      {project.completed_date !== "" ? (
                        project.completed_date
                      ) : (
                        <p className="text-amber-800 font-medium p-[0.25rem_1.5rem] bg-amber-200 border-2 border-amber-600 rounded-full text-[1.4rem]">
                          ONGOING
                        </p>
                      )}
                    </td>
                    <td>
                      <div className="p-[1.5rem] pl-0">
                        <div className="progress-bar-container">
                          <label htmlFor="" className="progress-label">
                            {project.completed_percent}%
                          </label>
                          <progress
                            max={100}
                            value={Number(project.completed_percent)}
                          ></progress>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ContactUs />
    </section>
  );
};

export default ProjectPage;
