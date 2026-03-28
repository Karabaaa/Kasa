import Banner from "../components/Banner";
import bannerImage from "../assets/images/banner-about.svg";
import "../styles/About.scss";
import Collapse from "../components/Collapse";

export default function About() {
  return (
    <section className="about">
      <Banner title="" image={bannerImage} />
      <div className="collapses-container">
        <Collapse title="Fiabilité" description="" />
        <Collapse title="Respect" description="" />
        <Collapse title="Service" description="" />
        <Collapse title="Sécurité" description="" />
      </div>
    </section>
  );
}
