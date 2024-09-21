"use client";
import React from 'react';
import "./card_one.scss";

const CardOne = () => {
    return (
        <div className="card-one">
            <div className="card-one-image-content">
                <img
                    src="/assets/images/demo_shirt.jpeg"
                />
            </div>

            <div className="card-one-item-content">
                <p>White Shirt</p>
                <p>Tk. 6.99</p>
            </div>

        </div>
    );
};

export default CardOne;