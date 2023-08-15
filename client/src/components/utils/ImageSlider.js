import React from "react";
import { Icon, Col, Row, Card, Carousel } from "antd";
function ImageSlider(props) {
    return (
        <div>
            {props.images.map((image, index) => (
                <div key={index}>
                    <img
                        style={{ width: "100%", maxHeight: "150px" }}
                        src={image}
                    />
                </div>
            ))}
        </div>
    );
}

export default ImageSlider;
