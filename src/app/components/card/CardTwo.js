"use client";
import React from 'react';
import "./card_two.scss";
import CustomBtn from "@/app/components/btn/CustomBtn";

const CardTwo = () => {
    return (
        <div className="card-two">

            <div className="card-two-image-content">
                <img
                    src="/assets/images/card_img.jpg"
                />
            </div>

            <div className="card-two-item-content">
                <p className="card-two-title">
                    Agent Shopping
                </p>

                <div className="card-two-subtitle">
                    Our agent will connect with you via real-time video, taking you on a virtual shopping tour
                    from shop to shop, and mall to mall. You"ll handpick your items just as if you were shopping
                    in Bangladesh yourself-without leaving your home!
                </div>

                <div className="card-two-btn-wrapper">
                    <CustomBtn
                        type="primary"
                        btnName="Get Started"
                        iconRightSrc="/assets/images/arrow.svg"
                    />
                </div>

            </div>

        </div>
    );
};

export default CardTwo;