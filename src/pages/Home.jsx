import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";
import "../styles/Home.scss";
import bannerImage from "../assets/images/banner-home.svg";

export default function Home() {
  return (
    <section className="home">
      <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />
      <div className="cards-container">
        {logements.map((offer) => (
          <Card
            key={offer.id}
            title={offer.title}
            cover={offer.cover}
            id={offer.id}
          />
        ))}
      </div>
    </section>
  );
}
