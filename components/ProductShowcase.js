import Image from "next/image";
import { useState } from "react";

export default function ProductShowcase() {
  const [imageThumbArr, setImageThumbArr] = useState([
    {
      img: "/images/image-product-1-thumbnail.jpg",
    },
    {
      img: "/images/image-product-2-thumbnail.jpg",
    },
    {
      img: "/images/image-product-3-thumbnail.jpg",
    },
    {
      img: "/images/image-product-4-thumbnail.jpg",
    },
  ]);
  const [imageArr, setImageArr] = useState([
    {
      img: "/images/image-product-1.jpg",
    },
    {
      img: "/images/image-product-2.jpg",
    },
    {
      img: "/images/image-product-3.jpg",
    },
    {
      img: "/images/image-product-4.jpg",
    },
  ]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const RenderThumbnails = (isModal) => {
    return (
      <div className="d-flex justify-content-between align-items-center px-4">
        {imageThumbArr.map((imageSrc, index) => {
          return (
            <div
              key={index}
              className={`${activeImageIndex === index ? "borderRadius12" : null
                }`}
              onClick={() => setActiveImageIndex(index)}
              data-bs-toggle={isModal === true ? "modal" : null}
              data-bs-target={isModal === true ? "#ProductModal" : null}
              data-backdrop="static"
              data-keyboard="false"
            >
              <Image
                src={imageSrc.img}
                width="80"
                height="80"
                className={`borderRadius12 ${activeImageIndex === index
                  ? "opacity-50 border-ff7d1a-3 "
                  : "hover-opacity-50"
                  }`}
                // layout="responsive"
                alt={`product thumbail- ${imageSrc.img}`}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="m-4">
        <Image
          src={imageArr[activeImageIndex].img}
          className="borderRadius12"
          width="440"
          height="440"
          // layout="responsive"
          objectFit="cover"
          alt="product image"
        />
      </div>
      {RenderThumbnails(true)}

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="ProductModal"
        tabIndex="-1"
        aria-labelledby="ProductModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content borderRadius12 border-0"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0 border-0">
              <div className="mb-4">
                <div
                  className="modal-arrow-button-left"
                  onClick={() =>
                    0 !== activeImageIndex
                      ? setActiveImageIndex(activeImageIndex - 1)
                      : null
                  }
                >
                  <svg
                    width="12"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1 3 9l8 8"
                      stroke="#1D2026"
                      strokeWidth="3"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="">
                  <Image
                    src={imageArr[activeImageIndex].img}
                    className="borderRadius12"
                    width="550"
                    height="550"
                    // layout="responsive"
                    objectFit="cover"
                    alt="product image"
                  />
                </div>
                <div
                  className="modal-arrow-button-right"
                  onClick={() =>
                    imageArr.length !== activeImageIndex + 1
                      ? setActiveImageIndex(activeImageIndex + 1)
                      : null
                  }
                >
                  <svg
                    width="13"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m2 1 8 8-8 8"
                      stroke="#1D2026"
                      strokeWidth="3"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>{RenderThumbnails(false)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
