import ActiveStar from "../assets/images/star-active.svg";
import InactiveStar from "../assets/images/star-inactive.svg";
import "../styles/Rate.scss";

export default function Rate({ rating }) {
  const totalStars = 5;
  const activeStars = parseInt(rating);
  const inactiveStars = totalStars - activeStars;

  const stars = [];
  for (let i = 0; i < activeStars; i++) {
    stars.push(
      <img src={ActiveStar} alt="active star" className="star" key={i} />,
    );
  }
  for (let i = 0; i < inactiveStars; i++) {
    stars.push(
      <img
        src={InactiveStar}
        alt="inactive star"
        className="star"
        key={i + activeStars}
      />,
    );
  }

  return <div className="rate">{stars}</div>;
}
