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
import plywood from "../../public/machinery/plywood_formwork.png"
import steelProps from "../../public/machinery/steel_props.png"
import steelPipes from "../../public/machinery/steel_pipes.png"
import clamps from "../../public/machinery/clamps.png"
import concreteBreaker from "../../public/machinery/concrete_breaker.png"

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
    {
      id: 11,
      name: "Plywood Formwork",
      quantity: "4000 sq.m.",
      image: plywood
    },
    {
      id: 12,
      name: "Steel Props",
      quantity: "5000 nos.",
      image: steelProps
    },
    {
      id: 13,
      name: "Steel Pipes",
      quantity: "10000 rm",
      image: steelPipes
    },
    {
      id: 14,
      name: "Clamps",
      quantity: "15000 pcs",
      image: clamps
    },
    {
      id: 15,
      name: "Concrete Breaker",
      quantity: "2 nos.",
      image: concreteBreaker
    }
  ];

  return (
    <div className="machinery-list bg-blue-50 py-[5rem] pb-[8rem]">
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
              <div className="data flex items-center flex-col gap-[0.5rem]">
                <span className="name text-[1.7rem] font-medium">{machine.name}</span>
                <span className="number text-[1.7rem] font-bold">Total: {machine.quantity}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Machinery;
