import React, { useState } from "react";
import "./UserCardBlock.css";
import axios from "axios";
import urlToObject from "../urlToObject";
import responseImage from "../responseImage";
import DrawPage from "../../DrawPage/DrawPage";
function UserCardBlock(props) {
    const [num, setNum] = useState(0);
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0];
            return image;
        }
    };
    const submitHandler = async (index) => {
        setLoading(true);
        console.log();
        const headers = {
            "ngrok-skip-browser-warning": "69420",
            "content-type": "multipart/form-data",
        };
        // var testChamp = new Champion ({
        //     name :
        // })

        // var ImageSchema = new Schema({
        //     name: String,

        //     data: Buffer,

        //     contentType: String,
        // });
        // var mongoose = require("mongoose");
        // var fs = require("fs");
        // var ImageSchema = mongoose.Schema({
        //     img: { data: Buffer, contentType: String },
        // });

        // var imgPath = props.user.user.userData.images[0];
        // var imgData = fs.readFileSync(imgPath);
        // var ci = new ImageSchema({ data: imgData, contentType: "image/png" });
        // imgPath = props.products[0].images;
        // imgData = fs.readFileSync(imgPath);
        // var mi = new ImageSchema({ data: imgData, contentType: "image/png" });

        // console.log(props);
        console.log("index: " + index);
        const ci = await urlToObject(props.user.user.userData.images[0]);
        const mi = await urlToObject(props.products[index].images[0]);

        setNum(num + 1);

        // console.log(urlToObject(props.products[0].images));

        const formData = new FormData();
        formData.append("clothImage", mi);
        //props.products[0].images
        formData.append("modelImage", ci);
        //props.user.user.userData.images[0])

        axios
            .post("http://9e68-35-201-134-186.ngrok.io/image", formData, {
                headers: headers,
            })
            .then((response) => {
                if (response.data.success) {
                    alert("성공 했습니다.");

                    props.history.push("/");
                } else {
                    console.log(response);
                    setUrl(`data:image;base64,${response.data}`);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const renderItems = () =>
        props.products &&
        props.products.map((product, index) => (
            <tr key={index}>
                <td>
                    <img
                        style={{ width: "80px" }}
                        alt="product"
                        src={renderCartImage(product.images)}
                    />
                </td>
                <td>{product.quantity} EA</td>
                <td>$ {product.price}</td>
                <td>
                    <button>
                        <div
                            onClick={() => {
                                submitHandler(index);
                            }}
                        >
                            Fitting
                        </div>
                    </button>
                </td>
                <td>
                    <button onClick={() => props.removeItem(product._id)}>
                        Remove
                    </button>
                </td>
            </tr>
        ));

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Fitting</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <div>
                    {loading ? (
                        <img
                            src="http://img.mk.co.kr/mkde/ic_loading_img.gif"
                            style={{
                                width: "350px",
                                height: "400px",
                                position: "absolute",
                                marginTop: "-40px",
                                marginLeft: "600px",
                                paddingRight: "100px",
                            }}
                        />
                    ) : (
                        <img
                            style={{
                                width: "350px",
                                height: "400px",
                                position: "absolute",
                                marginTop: "-40px",
                                marginLeft: "600px",
                                paddingRight: "100px",
                            }}
                            src={url}
                        />
                    )}
                </div>
                <tbody>{renderItems()}</tbody>
            </table>
        </div>
    );
}
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
function action_imageView(url) {
    if (url) {
        var imgW = document.getElementById("img1").naturalWidth;

        var imgH = document.getElementById("img1").naturalHeight;

        var imgWindow = window.open(
            "",
            "_image_view_",
            "width=" + imgW + ", height=" + imgH
        );

        imgWindow.document.write("<img src='" + url + "'>");
    }
}
export default UserCardBlock;
