import Link from "next/link";
import feedPlantOffice from "../../public/projects/feed_plant_office.png" 
import feedPlant from "../../public/projects/feed_plant.png"
import road from "../../public/projects/road_construction.png"

const Projects = () => {
    const projectList = [
        {
            id: 1,
            name: "Construction of office building of Nepal Wellhope Agri-tech Pvt. Ltd.",
            image: feedPlantOffice
        },
        {
            id: 2, 
            name: "Construction of feed plant of Nepal Wellhope Agri-tech Pvt. Ltd.",
            image: feedPlant
        },
        {
            id: 3, 
            name: "Road Construction Project in Dhading",
            image: road
        }
    ]
  return (
    <div className="featured-projects bg-white py-[5rem]">
      <div className="wrapper flex flex-col gap-[3.2rem]">
        <header className="flex justify-between items-center">
          <h2 className="header-text text-[2.4rem] md:text-[3.2rem] font-bold">
            Featured Projects
          </h2>
          <Link href={'/projects'} className="text-[var(--clr-primary)] text-[1.8rem] flex items-center underline font-semibold">View All</Link>
        </header>
        <ul className="featured-project-list grid grid-cols-[repeat(auto-fill,minmax(min(30rem,100%),1fr))] gap-[2.5rem]">
            {projectList.map(project => (
                <li className="project relative flex flex-col" key={project.id}>
                    <div className="img-container w-full h-[21rem] rounded-t-xl overflow-hidden">
                        <img src={project.image.src} className="w-full object-cover h-full" alt="" />
                    </div>
                    <h2 className="project-name p-[0.8rem_2.5rem] border border-neutral-600 rounded-b-xl text-[1.8rem] shadow-lg bg-white grow">{project.name}</h2>
                </li>
            ))}
        </ul>
        <Link href={'/projects'} className="bg-[var(--clr-primary)] text-white rounded-xl text-[1.6rem] inline-flex mx-auto p-[1rem_2rem]">View More</Link>
      </div>
    </div>
  );
};

export default Projects;
