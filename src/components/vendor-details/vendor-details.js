import React, { Component } from "react";
import "./vendor-details.scss";

class VendorDetails extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-12">
            <div className="direct-wrapper">
              <i className="fa fa-envelope g-fs-10 text-info mr-2" aria-hidden="true" />
              <span className="l-labels g-fs-10">Direct</span>
            </div>
          </div>
          <div className="col-12">
            <span className="l-labels">VENDOR</span>
            <h3>Freguesia Cheese</h3>
            <span className="l-vendor-mapping">
              <i
                className="fa fa-check-circle-o mr-1 g-fs-14"
                aria-hidden="true"
              />
              This vendor is mapped.
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default VendorDetails;
