import "../styles/Banner.scss";

export default function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="Paysage montagneux" className="banner-image" />
      <h1 className="banner-title">{title}</h1>
    </div>
  );
}
