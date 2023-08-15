import React, { useState } from "react";
import { Descriptions, Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../_actions/user_actions";
import axios from "axios";
function ProductInfo(props) {
    const dispatch = useDispatch();
    const [Product, setProduct] = useState({});
    const clickHandler = () => {
        dispatch(addToCart(props.detail._id));
        alert("Added to cart ! ");
    };

    return (
        <div>
            <hr
                style={{
                    border: "0",
                    height: "1px",
                    size: "1",
                    backgroundColor: "gray",
                    marginBottom: "20px",
                }}
            />
            <div>{props.detail.description}</div>
            <hr
                style={{
                    border: "0",
                    height: "0.8px",
                    size: "1",
                    backgroundColor: "gray",
                    marginTop: "20px",
                }}
            />
            <br />
            <br />
            <p style={{ fontWeight: "bold" }}>{props.detail.price} $</p>
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    style={{ backgroundColor: "3e91f7" }}
                    size="large"
                    shape="round"
                    onClick={clickHandler}
                    href="/"
                >
                    Add to Cart
                </Button>
                <Button
                    style={{ marginLeft: "30px", backgroundColor: "3e91f7" }}
                    size="large"
                    shape="round"
                    onClick
                >
                    Fitting Now
                </Button>
            </div>
        </div>
    );
}

export default ProductInfo;
