import { Link } from "react-router";
const Card = ({ des }) => {
  const { image, title, description, slug } = des;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link to={`/destinations/${slug}`} className="btn btn-primary">
            See Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
