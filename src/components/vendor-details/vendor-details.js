import React, { Component } from "react";
import "./vendor-details.scss";

class VendorDetails extends Component {
  render() {
    return (
      <section className="l-vendor-details-panel">
        <div className="row">
          <div className="col-12">
            <div className="l-direct-wrapper">
              <i
                className="fa fa-envelope g-fs-10 text-info mr-2"
                aria-hidden="true"
              />
              <span className="l-labels">Direct</span>
              <div className="l-actions">
                <div className="btn l-more-btn mr-2 g-cursor-pointer">
                  More
                </div>
                <div className="btn btn-info l-approve-btn g-cursor-pointer">
                  Approve
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <span className="l-labels">VENDOR</span>
            <h3 className="mb-0">
              Freguesia Cheese
              <i className="fa fa-chevron-circle-up" aria-hidden="true" />
            </h3>
            <span className="l-vendor-mapping">
              <i
                className="fa fa-check-circle-o mr-1 g-fs-14"
                aria-hidden="true"
              />
              This vendor is mapped.
            </span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-3">
            <span className="l-labels">invoice no.</span>
            <p className="l-bill-data-dark">00003526</p>
          </div>
          <div className="col-3">
            <span className="l-labels">invoice type</span>
            <p className="l-bill-data-dark">Receipt</p>
          </div>
          <div className="col-3">
            <span className="l-labels">restaurant</span>
            <p className="l-bill-data-dark">Monty's Cheese Shop</p>
          </div>
          <div className="col-3">
            <span className="l-labels">subtotal</span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-3">
            <span className="l-labels">posting date</span>
            <p className="l-bill-data-dark">July 14, 2017</p>
          </div>
          <div className="col-3">
            <span className="l-labels">invoice date</span>
            <p className="l-bill-data-dark">July 19, 2071</p>
          </div>
          <div className="col-3">
            <span className="l-labels">due date</span>
            <p className="l-bill-data-dark">Sep 09, 2017</p>
          </div>
          <div className="col-3">
            <span className="l-labels">total</span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6 p-0">
            <span className="text-muted g-fs-12">
              <i className="fa fa-comment-o mr-3" aria-hidden="true" />
              Click here to enter Memo
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default VendorDetails;
