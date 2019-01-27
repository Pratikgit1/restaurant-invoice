import React, { Component } from "react";
import "./line-items.scss";

class LineItems extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-7">
            <b>Name</b>
          </div>
          <div class="col-1 text-center">
            <b>Qty</b>
          </div>
          <div class="col-2 text-center">
            <b>Unit Price</b>
          </div>
          <div class="col-2 text-right">
            <b>Total</b>
          </div>
        </div>

        <div className="row">
          <div className="col-7">Food Item One</div>
          <div class="col-1 text-center">3</div>
          <div class="col-2 text-center">$19.00 Unit</div>
          <div class="col-2 text-right">$328.27</div>
        </div>
      </section>
    );
  }
}

export default LineItems;
