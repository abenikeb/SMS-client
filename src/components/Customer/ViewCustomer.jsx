import React from "react";

import "./ViewCustomer.css";

const ViewCustomer = ({ customer }) => {
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
          <h1>{`${customer.first_name} ${customer.last_name}`}</h1>
          <p>{`${customer.tel}`}</p>
          <p>{`${customer.city}`}, Ethiopia</p>
          <p>{`${customer.email}`}</p>
        </div>
      </section>
      <hr />
      <br />
      <section>
        <h1>About this contact</h1>

        <div>
          <p>Email</p>
          <h3>{`${customer.email}`}</h3>
        </div>

        <div>
          <p>Phone</p>
          <h3>{`${customer.tel}`}</h3>
        </div>

        <div>
          <p>Terrotory</p>
          <h3>{`${customer.territory}`}</h3>
        </div>
      </section>
    </div>
  );
};

export default ViewCustomer;
