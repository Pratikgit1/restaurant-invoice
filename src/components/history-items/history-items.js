import React, { Component } from "react";
import "./history-items.scss";

class HistoryItems extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-12">
            <h4>Recent Activity</h4>
          </div>
        </div>

        <div className="row m-0 l-cards">
          <div className="col-3">
            <p className="mb-0 font-weight-bold g-fs-11">TODAY</p>
            <span className="l-labels g-fs-11">09:25 AM</span>
          </div>
          <div className="col-1 l-status-container p-0 m-0">
            <i
              className="fa fa-circle text-danger g-fs-16"
              aria-hidden="true"
            />
          </div>
          <div className="col-8 pl-0">
            <p className="mb-0 text-danger font-weight-bold g-fs-12">
              Flagged by John Doe
            </p>
            <span className="g-fs-12 text-muted">
              Some random text here just for timepass
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default HistoryItems;
