import React from "react";
import "./LargeCard.css";

const LargeCard = ({ cardInfo }) => {
  return (
    <div className="card-container">
      <h1 className="card-title">{cardInfo.title}</h1>
      <div className="card-body-wrap">
        <section>
          <div>
            <h2>Total</h2>
            <img src="" alt="total-price" />
            <span>{cardInfo.total}</span>
            <p>{cardInfo.sub_title}</p>
          </div>
          <p>{cardInfo.description}</p>
        </section>
        <section>Graphs</section>
      </div>
    </div>
  );
};
export default LargeCard;
