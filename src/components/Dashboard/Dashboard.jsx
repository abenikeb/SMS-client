import React, { Component } from "react";

import SmallCard from "../UI/SmallCard/SmallCard";
import LargeCard from "../UI/LargeCard/LargeCard";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    const { infoGraphicData, salesData } = this.props;
    return (
      <div>
        <p>Summary</p>

        <section className="card-report-section">
          {salesData.map((sales) => (
            <SmallCard cardInfo={sales} />
          ))}
        </section>

        <section className="info-graphics-card-section">
          {infoGraphicData.map((info_card) => (
            <LargeCard cardInfo={info_card} />
          ))}
        </section>
      </div>
    );
  }
}

export default Dashboard;
