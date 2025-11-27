import { Link } from "react-router";
const Card = ({ des }) => {
  const { image, title, description, slug } = des;

  return (
    <div className="card bg-white/70 max-w-xs w-full shadow-sm rounded-xl">
      <figure className="p-1">
        <img
          src={image}
          alt={title}
          className="rounded-xl object-cover w-full h-[200px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link
            to={`/destinations/${slug}`}
            className="btn btn-primary bg-[#176c81] hover:bg-[#94bdbd] border-0"
          >
            See Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
