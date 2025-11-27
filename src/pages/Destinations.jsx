import Card from "../components/Card";
import { useOutletContext } from "react-router";

const Destinations = () => {
  // const [destinations, setDestinations] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await loadDes();
  //     console.log("Data:", data);
  //     setDestinations(data);
  //   };
  //   fetchData();
  // }, []);
  const destinations = useOutletContext();
  return (
    <>
      <h1>Destinationsssss</h1>
      <div className="grid grid-cols-4">
        {destinations.map((des) => (
          <Card des={des} key={des.id} />
        ))}
      </div>
    </>
  );
};

export default Destinations;
