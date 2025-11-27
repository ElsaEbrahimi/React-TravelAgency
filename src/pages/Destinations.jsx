import { useOutletContext } from "react-router";
import Card from "../components/Card";

const Destinations = () => {
  const destinations = useOutletContext();

  return (
    <div className="min-h-screen bg-linear-to-l from-[#94bdbd] to-[#176c81] p-8">
      <h1 className="text-white text-4xl font-bold pt-4 mb-8 text-center">
        Our Popular Destinations
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {destinations.map((des) => (
          <Card des={des} key={des.id} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
