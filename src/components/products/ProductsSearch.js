import React, { useState } from "react";
import products from "./Products.json";
import SearchBar from "react-js-search";

export default function ProductsSearch() {
  let [filteredProducts, setFilteredProducts] = useState(products);

  const onSearchClick = (searchText) => {
    let filteredArr = products.filter((data) => {
      return data.description.includes(searchText);
    });
    setFilteredProducts(filteredArr);
  };
  const onSearchTextChange = (searchText, filteredArr) => {
    setFilteredProducts(filteredArr);
  };

  return (
    <div className="container">
      <div className="text-center">
        <SearchBar
          //   onSearchButtonClick={onSearchClick}
          onSearchTextChange={onSearchTextChange}
          placeHolderText={"Search here..."}
          data={products}
        />
      </div>
      <div className="row">
        {filteredProducts.map((product, ind) => {
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
                  <a href="#" className="btn btn-primary">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
