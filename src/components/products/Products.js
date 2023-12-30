import React, { useState } from "react";
import products from "./Products.json";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  const navigateHandler = (title, price) => {
    navigate({
      pathname: "/productdetail",
      search: `?${createSearchParams({ title, price })}`,
    });
  };

  return (
    <div className="container">
      <div className="text-center"></div>
      <div className="row">
        {products.map((product, ind) => {
          return (
            <div className="col-sm-3" key={ind}>
              <div className="card text-center">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.category}</h5>
                  <p className="card-text">{product.title}</p>
                  <p
                    className="card-text"
                    style={{ height: "200px", overflow: "scroll" }}
                  >
                    {product.description}
                  </p>
                  <p className="card-text"> {product.price}</p>
                  <button>
                    <Link to={`/productdetails/${product.id}`}> View</Link>
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      navigateHandler(product.title, product.price);
                    }}
                  >
                    query param
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
