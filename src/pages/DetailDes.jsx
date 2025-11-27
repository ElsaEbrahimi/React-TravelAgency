import { Link, useOutletContext, useParams } from "react-router";

const DetailDes = () => {
  // const [destination, setDestination] = useState([]);
  const { slug } = useParams();
  const destinations = useOutletContext();
  const destination = destinations.find((d) => d.slug === slug);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await loadDes();
  //     console.log("Data:", data);
  //     const d = data.find((destination) => destination.slug === slug);
  //     setDestination(d);
  //   };
  //   fetchData();
  // }, []);
  return (
    <Link to="/">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${destination.image})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{destination.title}</h1>
            <p className="mb-5">{destination.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DetailDes;
