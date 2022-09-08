import Link from "next/link";
import Image from "next/image";

export default function Navbar(props) {
  const deleteAddedCart = () => {
    props.setSavedCartValue([]);
  };

  return (
    <>
      <div className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-ffffff fixed-top ">
          <div className="container">
            <div className="d-flex align-items-center">
              <button
                className="btn me-3 d-md-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                    fill="#69707D"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <a className="navbar-brand" href="#">
                <h3>sneakers</h3>
              </a>
            </div>
            <div className="d-md-block d-lg-none">
              <div className="d-flex align-items-center">
                <div className="dropdown me-3">
                  <div
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="position-relative"
                    data-bs-auto-close="outside"
                  >
                    <Image
                      src="/images/icon-cart.svg"
                      width="22"
                      height="20"
                      alt="cart"
                    />

                    {props.savedCartValue?.quantity > 0 ? (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-ff7d1a">
                        {props.savedCartValue?.quantity}{" "}
                        <span className="visually-hidden">cart list</span>
                      </span>
                    ) : null}
                  </div>

                  <div
                    className="dropdown-menu px-3 py-2 dropdown-menu-end shadow-lg bg-body borderRadius12"
                    aria-labelledby="dropdownMenuButton1"
                    style={{ minWidth: "340px" }}
                  >
                    <p className="fw-bolder">Cart</p>
                    <hr className="dropdown-divider" />
                    <div style={{ minHeight: "140px" }}>
                      {props.savedCartValue?.quantity > 0 ? (
                        <>
                          <div className="d-flex align-items-center justify-content-around">
                            <div>
                              <Image
                                src="/images/image-product-1-thumbnail.jpg"
                                width="50"
                                height="50"
                                className={`rounded-3`}
                                // layout="responsive"
                                alt={`product thumb`}
                              />
                            </div>
                            <div>
                              <p className="text-68707d mb-0">
                                {props.savedCartValue?.item}
                              </p>
                              <p>
                                <span>
                                  ${props.savedCartValue?.price} &times;
                                  {props.savedCartValue?.quantity}
                                </span>
                                <span className="fw-bold">
                                  {" "}
                                  $
                                  {props.savedCartValue?.price *
                                    props.savedCartValue?.quantity}
                                </span>
                              </p>
                            </div>
                            <div
                              className="cursor-pointer"
                              onClick={() => deleteAddedCart()}
                            >
                              <Image
                                src="/images/icon-delete.svg"
                                width="14"
                                height="16"
                                alt={`product delete`}
                              />
                            </div>
                          </div>
                          <div className="mt-3">
                            <button className="btn fw-bold py-2 text-nowrap add-to-card-btn w-100 text-center borderRadius12">
                              Checkout
                            </button>
                          </div>
                        </>
                      ) : (
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{ minHeight: "140px" }}
                        >
                          <p className="fw-bold">Your cart is empty.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/images/image-avatar.png"
                    width="26"
                    height="26"
                    alt="profile"
                    className="rounded-circle"
                  />
                </div>
              </div>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 pt-5-4 pt-md-0 mb-lg-0">
                <li className="nav-item">
                  <span
                    className="btn-close nav-link pt-4 d-md-block d-lg-none"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  ></span>
                  <Link href="/">
                    <a className="nav-link active" aria-current="page" href="#">
                      Collections
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link" href="#">
                      Men
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link" href="#">
                      Women
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="d-none d-md-block d-lg-block">
                <div className="d-flex align-items-center">
                  <div className="me-4">
                    <div className="dropdown">
                      <div
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="position-relative"
                        data-bs-auto-close="outside"
                      >
                        <Image
                          src="/images/icon-cart.svg"
                          width="22"
                          height="20"
                          alt="cart"
                        />

                        {props.savedCartValue?.quantity > 0 ? (
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-ff7d1a">
                            {props.savedCartValue?.quantity}{" "}
                            <span className="visually-hidden">cart list</span>
                          </span>
                        ) : null}
                      </div>

                      <div
                        className="dropdown-menu px-3 py-2 dropdown-menu-end shadow-lg bg-body borderRadius12"
                        aria-labelledby="dropdownMenuButton1"
                        style={{ minWidth: "340px" }}
                      >
                        <p className="fw-bolder">Cart</p>
                        <hr className="dropdown-divider" />
                        <div style={{ minHeight: "140px" }}>
                          {props.savedCartValue?.quantity > 0 ? (
                            <>
                              <div className="d-flex align-items-center justify-content-around">
                                <div>
                                  <Image
                                    src="/images/image-product-1-thumbnail.jpg"
                                    width="50"
                                    height="50"
                                    className={`rounded-3`}
                                    // layout="responsive"
                                    alt={`product thumb`}
                                  />
                                </div>
                                <div>
                                  <p className="text-68707d mb-0">
                                    {props.savedCartValue?.item}
                                  </p>
                                  <p>
                                    <span>
                                      ${props.savedCartValue?.price} &times;
                                      {props.savedCartValue?.quantity}
                                    </span>
                                    <span className="fw-bold">
                                      {" "}
                                      $
                                      {props.savedCartValue?.price *
                                        props.savedCartValue?.quantity}
                                    </span>
                                  </p>
                                </div>
                                <div
                                  className="cursor-pointer"
                                  onClick={() => deleteAddedCart()}
                                >
                                  <Image
                                    src="/images/icon-delete.svg"
                                    width="14"
                                    height="16"
                                    alt={`product delete`}
                                  />
                                </div>
                              </div>
                              <div className="mt-3">
                                <button className="btn fw-bold py-2 text-nowrap add-to-card-btn w-100 text-center borderRadius12">
                                  Checkout
                                </button>
                              </div>
                            </>
                          ) : (
                            <div
                              className="d-flex align-items-center justify-content-center"
                              style={{ minHeight: "140px" }}
                            >
                              <p className="fw-bold">Your cart is empty.</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/images/image-avatar.png"
                      width="44"
                      height="44"
                      alt="profile"
                      className="rounded-circle border-ff7d1a-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="pt-3">
        <hr className="dropdown-divider" />
      </div>
    </>
  );
}
