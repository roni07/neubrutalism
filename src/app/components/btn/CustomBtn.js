import React from 'react';
import {Button} from "antd";

import "./custom_btn.scss";

const CustomBtn = ({btnName, type = "default", iconLeftSrc = "", iconRightSrc = "", onClick = null}) => {
    return (
        <div className="custom-btn">
            <Button
                type={type}
                icon={<img src={iconLeftSrc}/>}
                onClick={onClick}
            >
                {btnName} <img src={iconRightSrc}/>
            </Button>
        </div>
    );
};

export default CustomBtn;