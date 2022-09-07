import React, { Component } from "react";

import "./ViewCustomer.css";

const ViewCustomer = () => {
  return (
    <div>
      <section className="header-wrap">
        <div>
          <img
            src="https://placeimg.com/80/80/people"
            className="w-36 rounded-full"
          />
        </div>
        <div>
          <h1>Bekele Girirma</h1>
          <p>0913228892</p>
          <p>Addis Ababa, Ethiopia</p>
          <p>abenikeb7@gmail.com</p>
        </div>
      </section>
      <hr />
      <br />
      <section>
        <h1>About this contact</h1>

        <div>
          <p>Email</p>
          <h3>abenikeb7@gmail.com</h3>
        </div>

        <div>
          <p>Phone</p>
          <h3>0913228892</h3>
        </div>

        <div>
          <p>Email</p>
          <h3>abenikeb7@gmail.com</h3>
        </div>
      </section>
    </div>
  );
};

export default ViewCustomer;
