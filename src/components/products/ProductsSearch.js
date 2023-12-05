import React, { useState } from "react";
import products from "./Products.json";
import SearchBar from "react-js-search";

export default function ProductsSearch() {
  let [filteredproducts, setFilteredProducts] = useState(products);

  const onSearchClick = (searchText) => {
    let filteredData = products.filter((product) => {
      return JSON.stringify(product).toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    });
    setFilteredProducts([...filteredData]);
  };
  
  const sortProductsAsc = ()=>{
    let sortedProducts = products.sort((p1,p2)=>p1.price-p2.price);
    setFilteredProducts([...sortedProducts]);
  }
  const sortProductsDesc = ()=>{
    let sortedProducts = products.sort((p1,p2)=>p2.price-p1.price);
    setFilteredProducts([...sortedProducts]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <SearchBar
            // onSearchTextChange={(term, filteredData) => {
            //   setFilteredProducts([...filteredData]);
            // }}
            onSearchButtonClick={onSearchClick}
            placeHolderText={"Search here..."}
            data={products}
          />
        </div>
        <div className="col-sm-4">
          <button className="btn btn-primary m-1" onClick={sortProductsAsc}>Asc</button>
          <button className="btn btn-secondary" onClick={sortProductsDesc}>Desc</button>
        </div>
      </div>
      <div className="row mt-5">
        {filteredproducts.map((prod) => {
          return (
            <div className="col-sm-3">
              <div className="card">
                <img
                  style={{ height: "200px" }}
                  src={prod.image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{prod.category}</h5>
                  <p className="card-text">{prod.title}</p>
                  <p className="card-text">Price: {prod.price}</p>
                  <p className="card-text">Rating: {prod.rating.rate}</p>
                  <a href="#" className="btn btn-primary">
                    Buy Now
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
