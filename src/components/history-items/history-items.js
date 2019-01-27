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
          <div className="col-3">today time</div>
          <div className="col-1">status</div>
          <div className="col-8">description</div>
        </div>
      </section>
    );
  }
}

export default HistoryItems;
