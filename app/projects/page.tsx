import Link from "next/link";
import ContactUs from "../(components)/ContactUs";

const ProjectPage = () => {
  const projects = [
    {
      description: "Construction and Renovation of John Dewey School",
      location: "Baluwatar, Kathmandu",
      completed: "100%",
      date: "2076/2077",
    },
    {
      description:
        "Renovation work of PICU/NICU Ward of Pediatric Department at Teaching Hospital, Maharagunj, Kathmandu founded by Agni Foundation Pvt. Ltd.",
      location: "Maharajgunj, Kathmandu",
      completed: "100%",
      date: "2076/2077",
    },
    {
      description:
        "Construction of Factory building of Lekali coffee estate Pvt. Ltd",
      location: "Dumbarahi, Kathmandu",
      completed: "100%",
      date: "2077/2078",
    },
    {
      description:
        "Construction of Bio gas Plant of Dumkibas Poultry Farm Pvt. Ltd.",
      location: "Dumkibas, Nawalparasi",
      completed: "100%",
      date: "2077/2078",
    },
    {
      description:
        "Renovation of office building and boundary wall of Australlian Embassy",
      location: "Bansbari, Kathmandu",
      completed: "100%",
      date: "2078/2079",
    },
    {
      description:
        "Construction of office building of Nepal Wellhope Agri-tech Pvt. Ltd.",
      location: "Kalyanpur, Chitwan",
      completed: "100%",
      date: "2078/2079",
    },
    {
      description: "Costruction of Residence building of Nayan Tara Bista",
      location: "Mandikhatar, Kathmandu",
      completed: "100%",
      date: "2079/2080",
    },
    {
      description:
        "Construction of Showroom, other building and allied structure of Agni Incorporated Pvt. Ltd",
      location: "Kurintar, Chitwan",
      completed: "100%",
      date: "2079/2080",
    },
    {
      description:
        "Renovation and Maintenance of flooring work at showroom of Agni Incorporated Pvt. Ltd. Head office",
      location: "Panipokhari, Kathmandu and Thapathali Kathmandu",
      completed: "100%",
      date: "2079/2080",
    },
    {
      description:
        "Construction of Residence building of Mr. Kalsang Paljour Sherpa ",
      location: "Budhanilkantha, Kathmandu",
      completed: "100%",
      date: "2079/2080",
    },
    {
      description: "Construction of Residence building of Mr. Vijaya Baidya.",
      location: "Budhanilkantha, Kathmandu",
      completed: "100%",
      date: "2079/2080",
    },
    {
      description:
        "Construction of Branch Office building of Rastriya Banijya Bank.",
      location: "Basantapur, Kathmandu",
      completed: "100%",
      date: "2079/2080",
    },
    {
      description:
        "Construction of Res/Com building of Mr. Maheshwor/Purneshowor Shrestha ",
      location: "Newroad, Kathmandu",
      completed: "100%",
      date: "2079/2080",
    },
    {
      description: "Costruction of Residence building of Mr. Shyam Kafle.",
      location: "Thimi, Bhaktapur",
      completed: "100%",
      date: "2079/2080",
    },
    {
      description:
        "Construction of G.P Layer and G.P Pullet Building & other structure of Vizu breeders Pvt. Ltd. at Hille, Dhankuta",
      location: "Hille, Dhankuta",
      completed: "90%",
    },
    {
      description:
        "Construction of Feed Plant and office building of Nepal wellhope Pvt. Ltd.",
      location: "Jhorahat, Biratnagar",
      completed: "90%",
    },
    {
      description:
        "Construction of Residence building of Mrs. Yunduk Dolma Sherpa & Kalang Sonam Sherpa",
      location: "Budhanilkantha, Kathmandu",
      completed: "85%",
    },
    {
      description:
        "Construction of office building of Vizu Poultry Farm Pvt. Ltd.",
      location: "Kalyanpur, Chitwan",
      completed: "80%",
    },
    {
      description: "Costruction of Commercial building of Mr. Prajwol Maharjan",
      location: "Emadol, Lalitpur",
      completed: "70%",
    },
  ];
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
                {projects.map((project, index) => (
                  <tr
                    key={index}
                  >
                    <td>
                     {index + 1}
                    </td>
                    <td>{project.description}</td>
                    <td>{project.location}</td>
                    <td>{project.date ?? 2082}</td>
                    <td>
                      <div className="p-[1.5rem] pl-0">
                        <progress
                          max={100}
                          value={Number(project.completed.split("%")[0])}
                          className="rounded-full"
                        ></progress>
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
