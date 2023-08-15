import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
function ProductImage(props) {
    const [Images, setImages] = useState([]);
    useEffect(() => {
        if (props.detail.images && props.detail.images.length > 0) {
            let images = [];

            props.detail.images.map((item) => {
                console.log("아이템", item);
                images.push({
                    original: `${item}`,
                    thumbnail: `${item}`,
                });
            });
            console.log("이미지 ", images);
            setImages(images);
        }
    }, [props.detail]);

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    );
}

export default ProductImage;
