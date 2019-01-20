import React, { Component } from 'react';
import './App.scss';
import BillImage from "./components/bill-image/bill-image";
import VendorDetails from "./components/vendor-details/vendor-details";
import LineItems from "./components/line-items/line-items";
import HistoryItems from "./components/history-items/history-items";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row l-max-height">
          <div className="col-6 g-h-100vh m-0 p-0">
            <BillImage></BillImage>
          </div>
          <div className="col-6">
            <VendorDetails></VendorDetails>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
