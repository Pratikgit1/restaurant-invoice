import React, { Component } from 'react';
import './bill-image.scss';

class BillImage extends Component {

    render() {
        return (
            <section className="l-bill-image-panel">
            <img src="https://via.placeholder.com/300" className="img-fluid w-100"></img>
            </section>
        );
    }
}

export default BillImage;