import agni from "../../public/clients/agni_incorporated.png";
import ministry from "../../public/clients/ministry.png";
import nea from "../../public/clients/nea.jpg";
import vizu from "../../public/clients/well_hope_agri.png";
import wellhope from "../../public/clients/vizu_breeders.jpg";

const Clients = () => {
  return (
    <div className="clients-list bg-white py-[5rem] pb-[8rem]">
      <div className="wrapper">
        <h2 className="header-text text-[2.4rem]  md:text-[3.2rem] font-bold mb-[3.5rem] text-center">
          Some of our happy clients.
        </h2>
        <ul className="client-grid grid grid-cols-[repeat(auto-fill,minmax(min(18rem,100%),1fr))] gap-[2.5rem]">
          {[agni, ministry, nea, vizu, wellhope].map((client, index) => (
            <li className="client flex items-center justify-center" key={index}>
              <img
                src={client.src}
                alt=""
                className="w-full object-contain max-h-[15rem]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Clients;
