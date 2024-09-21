import {Col, Row, Space} from "antd";
import CardOne from "@/app/components/card/CardOne";
import CustomBtn from "@/app/components/btn/CustomBtn";
import CardTwo from "@/app/components/card/CardTwo";
import CustomDropDown from "@/app/components/CustomDropDown";

const Home = () => {

    return (
        <div style={{width: "80%", margin: "0 auto", paddingBottom: "40px"}}>

            <h2>NeuBrutalism</h2>

            <Row gutter={[24, 48]} style={{width: '100%'}}>
                <Col md={12}>
                    <Space size="large">

                        <CustomBtn
                            type="primary"
                            btnName="Sign Up"
                        />

                        <CustomBtn
                            btnName="Default Btn"
                            iconRightSrc="/assets/images/arrow.svg"
                        />

                        <CustomBtn
                            type="primary"
                            btnName="Get Started"
                            iconRightSrc="/assets/images/arrow.svg"
                        />

                        <CustomDropDown/>

                    </Space>
                </Col>

                <Col xs={24}>
                    <Row gutter={[48, 24]}>
                        <Col md={8}>
                            <CardOne/>
                        </Col>

                        <Col md={8}>
                            <CardOne/>

                        </Col>

                        <Col md={8}>
                            <CardOne/>
                        </Col>
                    </Row>
                </Col>

                <Col xs={24}>
                    <CardTwo/>
                </Col>

            </Row>

        </div>
    );
}

export default Home;