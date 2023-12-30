import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setproduct] = useState({});

  const fetchProduct = async function () {
    const resp = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setproduct(resp.data);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <>
      <h1 className="text-center">Product Details - {id}</h1>

      <div className="col-sm-4 offset-4">
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
          </div>
        </div>
      </div>
    </>
  );
}
