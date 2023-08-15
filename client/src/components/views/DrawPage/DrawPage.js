import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function DrawPage(url) {
    return (
        <div style={{ textAlign: "center" }}>
            <img
                style={{
                    height: "300px",
                    width: "300px",
                }}
                src={url}
                alt="합성이미지"
            />
        </div>
    );
}
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
export default DrawPage;
