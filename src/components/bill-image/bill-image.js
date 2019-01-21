import React, { Component } from 'react';
import './bill-image.scss';

class BillImage extends Component {

    render() {
        return (
            <section className="l-bill-image-panel">
            <img src="http://www.teamlogic.info/wp-content/uploads/commision-invoice-mmk-how-to-separate-agency-commission-from-the-invoice.png" className="img-fluid w-100"></img>
            </section>
        );
    }
}

export default BillImage;