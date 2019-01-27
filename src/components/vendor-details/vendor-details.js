import React, { Component } from "react";
import "./vendor-details.scss";
import { Tab } from "semantic-ui-react";
import LineItems from "../line-items/line-items";
import HistoryItems from "../history-items/history-items";

class VendorDetails extends Component {
  state = {
    isVendorDetailsExpanded: true
  };

  render() {
    const panes = [
      {
        menuItem: "Line Items",
        render: () => (
          <Tab.Pane attached={false}>
            <LineItems />
          </Tab.Pane>
        )
      },
      {
        menuItem: "History",
        render: () => (
          <Tab.Pane attached={false}>
            <HistoryItems />
          </Tab.Pane>
        )
      }
    ];

    const toggleExpandCollapse = () => {
      this.setState({
        isVendorDetailsExpanded: !this.state.isVendorDetailsExpanded
      });
    };

    const expandedSection = (
      <React.Fragment>
        <div className="row mt-3">
          <div className="col-12">
            <span className="l-labels">VENDOR</span>
            <h3 className="mb-0 mt-0">
              Freguesia Cheese
              <i
                className="fa fa-chevron-circle-up g-cursor-pointer"
                aria-hidden="true"
                onClick={toggleExpandCollapse}
              />
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
            <p className="l-bill-data-dark">July 19, 2017</p>
          </div>
          <div className="col-3">
            <span className="l-labels">due date</span>
            <p className="l-bill-data-dark">Sep 09, 2017</p>
          </div>
          <div className="col-3">
            <span className="l-labels">total</span>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-muted g-fs-12">
            <i className="fa fa-comment-o mr-3" aria-hidden="true" />
            <input
              type="text"
              placeholder="Click here to enter Memo"
              className="g-border-none g-outline-none l-memo"
            />
          </div>
        </div>
      </React.Fragment>
    );

    const collapsedSection = (
      <React.Fragment>
        <div className="row mt-3">
          <div className="col-12">
            <h3 className="mb-0 mt-0">
              Freguesia Cheese
              <i
                className="fa fa-chevron-circle-down g-cursor-pointer"
                aria-hidden="true"
                onClick={toggleExpandCollapse}
              />
            </h3>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-2">
            <p className="l-bill-data-dark">00003526</p>
          </div>
          <div className="col-2">
            <p className="l-bill-data-dark">July 09, 2017</p>
          </div>
          <div className="col-3">
            <p className="l-bill-data-dark">Monty's Cheese Shop</p>
          </div>
          <div className="col-5">
            <p className="text-muted">Loreum Ipsum...</p>
          </div>
        </div>
      </React.Fragment>
    );

    let vendorDetailsSection;

    if (this.state.isVendorDetailsExpanded) {
      vendorDetailsSection = expandedSection;
    } else {
      vendorDetailsSection = collapsedSection;
    }

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
                <div className="btn l-more-btn mr-2 g-cursor-pointer g-fs-14">
                  More
                </div>
                <div className="btn btn-info l-approve-btn g-cursor-pointer g-fs-14">
                  Approve
                </div>
              </div>
            </div>
          </div>
        </div>
        {vendorDetailsSection}
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className="mt-3 l-tab-align"
        />
      </section>
    );
  }
}

export default VendorDetails;
