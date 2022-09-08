import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductShowcase from "../components/ProductShowcase";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [currentCartValue, setCurrentCartValue] = useState(3);
  const [savedCartValue, setSavedCartValue] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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

  const addCardAction = () => {
    const newCartValue = {
      item: "Fall Limited Edition Sneakers",
      quantity: currentCartValue,
      price: 125,
    };
    setSavedCartValue(newCartValue);
  };

  return (
    <div className="container">
      <Navbar
        savedCartValue={savedCartValue}
        setSavedCartValue={setSavedCartValue}
      />
      <div>
        <div className="row align-items-center">
          <div className="col-lg-5 offset-lg-1 mb-5">
            <div className="d-none d-md-block d-lg-block">
              <ProductShowcase />
            </div>
            <div className=" d-md-block d-lg-none">
              <div
                id="carouselExampleFade"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {imageArr.map((item, index) => (
                    <div
                      className={`carousel-item ${
                        activeImageIndex === index ? "active" : "null"
                      }`}
                      key={index}
                    >
                      <Image
                        layout="responsive"
                        src={item.img}
                        width="100"
                        height="100"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="px-4 py-3 rounded-circle bg-f7f8fd text-center"
                    aria-hidden="true"
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
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="px-4 py-3 rounded-circle bg-f7f8fd text-center"
                    aria-hidden="true"
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
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 px-lg-5 mb-5">
            <p className="fw-bold text-ff7d1a mb-1">SNEAKER COMPANY</p>
            <h1 className="fw-bold mb-4">
              Fall Limited Edition <br /> Sneakers
            </h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a duable rubber outer sole, they&apos;ll withstand
              everything the weather can offer.
            </p>
            <div className="row align-items-center">
              <div className="col-lg-12 col-9">
                <div className="d-flex align-items-center">
                  <h3 className="me-3">$125.00</h3>
                  <div>
                    <span className="px-2 p-1 text-ff7d1a bg-ffede0 fw-bold rounded-2">
                      50%
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-3">
                <p className="text-decoration-line-through text-68707d">
                  $250.00
                </p>
              </div>
            </div>

            <div className="row align-items-center mt-3">
              <div className="col-lg text-center mb-3">
                <div className="rounded-3 bg-f7f8fd">
                  <div className="input-group">
                    <button
                      className="btn"
                      type="button"
                      onClick={() =>
                        currentCartValue !== 0
                          ? setCurrentCartValue(currentCartValue - 1)
                          : null
                      }
                    >
                      <span className="text-ff7d1a fw-bold">-</span>
                    </button>

                    <input
                      type="text"
                      className="form-control text-center bg-f7f8fd"
                      style={{ width: 46 }}
                      maxLength="2"
                      value={currentCartValue}
                      onChange={(e) => {
                        setCurrentCartValue(Number(e.target.value));
                      }}
                    />
                    <button
                      className="btn text-ff7d1a"
                      type="button"
                      onClick={() =>
                        currentCartValue <= 98
                          ? setCurrentCartValue(currentCartValue + 1)
                          : null
                      }
                    >
                      <span className="text-ff7d1a fw-bold">+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg mb-3">
                <div className="px-4">
                  <button
                    className="btn fw-bold px-5 py-2 text-nowrap add-to-card-btn d-flex align-items-center justify-content-center text-center w-100"
                    onClick={() => addCardAction()}
                  >
                    <svg
                      width="22"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      />
                    </svg>
                    <span className="ms-2">Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
