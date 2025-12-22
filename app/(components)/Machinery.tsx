import mixer from "../../public/machinery/mixer.png";
import buildingHoist from "../../public/machinery/building_hoist.png";
import needleVibratorElectric from "../../public/machinery/needle_vibrator_electric.png";
import needleVibratorDiesel from "../../public/machinery/needle_vibrator_diesel.png";
import barCutter from "../../public/machinery/bar_cutter.png";
import weldingMachine from "../../public/machinery/welding_machine.png";
import earthCompactor from "../../public/machinery/earth_compactor.png";
import generator from "../../public/machinery/generator.png";
import waterPump from "../../public/machinery/water_pump.png";
import wheelBarrow from "../../public/machinery/wheel_barrow.png";

const Machinery = () => {
  const machineryList = [
    {
      id: 1,
      name: "Concerte Mixer",
      quantity: 4,
      image: mixer,
    },
    {
      id: 2,
      name: "Building Hoist",
      quantity: 1,
      image: buildingHoist,
    },
    {
      id: 3,
      name: "(Electric) Needle Vibrator",
      quantity: 10,
      image: needleVibratorElectric,
    },
    {
      id: 4,
      name: "(Diesel) Needle Vibrator",
      quantity: 2,
      image: needleVibratorDiesel,
    },
    {
      id: 5,
      name: "Bar Cutter Machine",
      quantity: 2,
      image: barCutter,
    },
    {
      id: 6,
      name: "Welding Machine",
      quantity: 2,
      image: weldingMachine,
    },
    {
      id: 7,
      name: "Earth Compactor",
      quantity: 2,
      image: earthCompactor,
    },
    {
      id: 8,
      name: "Generator",
      quantity: 2,
      image: generator,
    },
    {
      id: 9,
      name: "Water Pump",
      quantity: 4,
      image: waterPump,
    },
    {
      id: 10,
      name: "Wheel Barrow",
      quantity: 20,
      image: wheelBarrow,
    },
  ];

  return (
    <div className="machinery-list bg-blue-50 py-[5rem]">
      <div className="wrapper">
        <h2 className="header-text text-[2.4rem] md:text-[3.2rem] font-bold mb-[3.5rem] text-center">
          Machinery We Have
        </h2>
        <ul className="machinery-list grid grid-cols-[repeat(auto-fill,minmax(min(22rem,100%),1fr))] gap-[2.5rem]">
          {machineryList.map((machine) => (
            <li className="machine bg-white shadow-lg rounded-lg p-[1.5rem] flex flex-col items-center justify-between gap-[1.5rem]" key={machine.id}>
              <div className="img-container w-[60%] max-h-[15rem] flex items-center justify-center mt-auto">
                <img src={machine.image.src} alt="machine" className="w-full h-full object-contain" />
              </div>
              <div className="data flex items-center gap-[1.5rem]">
                <span className="number text-[2.5rem] font-bold">{machine.quantity}</span>
                <span className="name text-[1.7rem] font-medium">{machine.name}{machine.quantity > 1 ? "s" : ''}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Machinery;
