import "../styles/Offer.scss";
import { useParams, Navigate } from "react-router";
import logements from "../data/logements.json";
import Carrousel from "../components/Carrousel";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";

export default function Offer() {
  const { id } = useParams();

  const getOffer = (offerId) => {
    return logements.find((offer) => offer.id === offerId);
  };

  const offer = getOffer(id);

  if (!offer) {
    return <Navigate to="/404" replace />;
  }

  const firstName = offer.host.name.split(" ")[0];
  const lastName = offer.host.name.split(" ")[1];

  return (
    <section className="offer">
      <Carrousel images={offer.pictures} />
      <div className="offer-header">
        <div className="offer-info">
          <h1 className="title">{offer.title}</h1>
          <p className="location">{offer.location}</p>
          <div className="tags">
            {offer.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="offer-host">
          <div className="host-info">
            <p>
              {firstName}
              <br />
              {lastName}
            </p>
            {offer.host.picture ? (
              <img
                src={offer.host.picture}
                alt={offer.host.name ?? "host picture"}
                className="host-picture"
              />
            ) : (
              <div className="host-picture-placeholder"></div>
            )}
          </div>
          <Rate rating={offer.rating} />
        </div>
      </div>
      <div className="offer-details">
        <Collapse title="Description" description={offer.description} />
        <Collapse
          title="Équipements"
          description={
            <ul>
              {offer.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
}
