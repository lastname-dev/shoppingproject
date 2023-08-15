import axios from "axios";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import React, { useState } from "react";

async function urlToObject(image) {
    const response = await fetch(image);
    console.log("response : ", response);
    const data = await response.blob();
    console.log("data : ", data);
    let metadata = {
        type: "image/jpeg",
    };
    let file = new File([data], "test.jpg", metadata);
    return file;
}

export default urlToObject;
