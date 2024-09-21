"use client";
import React from 'react';
import {Dropdown, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";
import Link from "next/link";

import "./custom_drop_down.scss";

const CustomDropDown = () => {

    const items = [
        {
            key: '1',
            label: (<Link href={"#"}>
                    <div className="custom-drop-down-overlay-item">
                        Agent Shopping <img src="/assets/images/arrow.svg"/>
                    </div>
                </Link>

            ),
        },
        {
            key: '2',
            label: (<Link href={"#"}>
                    <div className="custom-drop-down-overlay-item">
                        Display Center <img src="/assets/images/arrow.svg"/>
                    </div>
                </Link>

            ),
        },
        {
            key: '3',
            label:
                (<Link href={"#"}>
                        <div className="custom-drop-down-overlay-item">
                            3rd Party Shopping <img src="/assets/images/arrow.svg"/>
                        </div>
                    </Link>

                ),
        },
        {
            key: '4',
            label:
                (<Link href={"#"}>
                        <div className="custom-drop-down-overlay-item">
                            Personal Shipping <img src="/assets/images/arrow.svg"/>
                        </div>
                    </Link>

                ),
        },
    ];

    return (
        <div className="custom-drop-down">

            <Dropdown
                menu={{
                    items,
                }}
                overlayClassName="custom-drop-down-overlay"
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Services <DownOutlined/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};

export default CustomDropDown;