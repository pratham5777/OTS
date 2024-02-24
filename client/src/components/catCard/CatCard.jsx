import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ card }) {
  const catUrl = `/gigs?cat=${encodeURIComponent(card.desc)}`;

  return (
    <Link to={catUrl}>
      <div className="catCard">
        <img src={card.img} alt="" />
        <div class="overlay"></div>
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
       
      </div>
    </Link>
  );
}
export default CatCard;
