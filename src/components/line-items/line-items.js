import React, { Component } from "react";
import "./line-items.scss";

class LineItems extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Cottage Cheese Balls",
        subtitle: "Diary 4409 - 6698",
        quantity: 3,
        pricePerUnit: 11.09
      },
      {
        id: 2,
        name: "Veg Supreme Pizza",
        subtitle: "Diary 4409 - 6698",
        quantity: 7,
        pricePerUnit: 9.01
      },
      {
        id: 3,
        name: "Cottage Cheese Balls",
        subtitle: "Diary 4409 - 6698",
        quantity: 3,
        pricePerUnit: 11.09
      },
      {
        id: 4,
        name: "White Pasta",
        subtitle: "Diary 4409 - 6698",
        quantity: 5,
        pricePerUnit: 4.47
      },
      {
        id: 5,
        name: "Veg Thali",
        subtitle: "Diary 4409 - 6698",
        quantity: 9,
        pricePerUnit: 2.51
      },
      {
        id: 6,
        name: "Hot Chocolate",
        subtitle: "Diary 4409 - 6698",
        quantity: 2,
        pricePerUnit: 6.7
      },
      {
        id: 7,
        name: "Tandoor Full",
        subtitle: "Diary 4409 - 6698",
        quantity: 1,
        pricePerUnit: 27.85
      },
      {
        id: 8,
        name: "Sandwich",
        subtitle: "Diary 4409 - 6698",
        quantity: 7,
        pricePerUnit: 3.63
      },
      {
        id: 9,
        name: "French Fries",
        subtitle: "Diary 4409 - 6698",
        quantity: 2,
        pricePerUnit: 5.02
      },
      {
        id: 10,
        name: "Biryani",
        subtitle: "Diary 4409 - 6698",
        quantity: 30,
        pricePerUnit: 7.01
      },
      {
        id: 11,
        name: "Packaged Drinking Water",
        subtitle: "Diary 4409 - 6698",
        quantity: 300,
        pricePerUnit: 1.01
      }
    ]
  };

  render() {
    return (
      <section>
        <div className="row l-rowHead">
          <div className="col-7 pl-0 pr-0">
            <b>Name</b>
          </div>
          <div className="col-1 text-center pl-0 pr-0">
            <b>Qty</b>
          </div>
          <div className="col-2 text-center pl-0 pr-0">
            <b>Unit Price</b>
          </div>
          <div className="col-2 text-right pl-0 pr-0">
            <b>Total</b>
          </div>
        </div>

        <div>
          {this.state.data.map(item => (
            <div className="row l-rowData" key={item.id}>
              <div className="col-7 pl-0 pr-0">
                <p className="m-0 font-weight-bold">{item.name}</p>
                <span className="m-0 g-fs-11 text-muted">{item.subtitle}</span>
              </div>
              <div className="col-1 l-align-th l-align-th-qty-unit pl-0 pr-0">
                {item.quantity}
              </div>
              <div className="col-2 l-align-th l-align-th-qty-unit pl-0 pr-0">
                <span className="g-fs-14 mr-1">$</span>
                {item.pricePerUnit}{" "}
                <span className="ml-1 g-fs-12 text-muted">Unit</span>
              </div>
              <div className="col-2 l-align-th l-align-th-total pl-0 pr-0">
                <span className="g-fs-14 mr-1">$</span>
                {(item.quantity * item.pricePerUnit).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default LineItems;
