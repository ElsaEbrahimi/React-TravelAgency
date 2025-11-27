import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="hero min-h-screen bg-[url('/home-bg.jpg')]  ">
        <div className="hero-content flex-col items-start">
          <div className="flex-col bg-white/30 rounded-2xl mx-8 p-6 items-start backdrop-blur-sm">
            <span className="text-gray-700 text-sm ">
              Beaches . Plains . Mountains
            </span>
            <h1 className="text-gray-700 text-6xl font-bold leading-tight">
              Spend your vacation <br></br>with our activites
            </h1>
          </div>

          <div className="bg-white/30 grid grid-cols-3 gap-6 p-4 rounded-xl backdrop-blur-md shadow-lg">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-800">Check-in</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full bg-white/40 focus:bg-transparent border-white/40 focus:border-white/60"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-800">Check-out</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full bg-white/40 focus:bg-transparent border-white/40 focus:border-white/60"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={() => navigate("/destinations")}
                className="btn w-full bg-white/70 hover:text-gray-400"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
