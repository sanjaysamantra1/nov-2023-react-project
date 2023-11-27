import React from "react";
import "./Categories.css";
import Category from "./Category";

export default function Categories() {
  let categoriesArr = [
    {name:'Grocery',img_url:'https://rukminim1.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100'},
    {name:'Mobile',img_url:'https://rukminim1.flixcart.com/flap/72/72/image/22fddf3c7da4c4f4.png?q=100'},
    {name:'Fashion',img_url:'https://rukminim1.flixcart.com/fk-p-flap/72/72/image/0d75b34f7d8fbcb3.png?q=100'},
    {name:'Electronics',img_url:'https://rukminim1.flixcart.com/flap/72/72/image/69c6589653afdb9a.png?q=100'},
    {name:'Furniture',img_url:'https://rukminim1.flixcart.com/flap/72/72/image/ab7e2b022a4587dd.jpg?q=100'},
    {name:'Appliances',img_url:'https://rukminim1.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100'},
    {name:'travel',img_url:'https://rukminim1.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100'},
    {name:'Beauty',img_url:'https://rukminim1.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100'}
  ]
  return (
    <div className="container">
      <div className="row">
          {categoriesArr.map((categoryObj,ind)=>{
            return <div className="col" key={ind}>
                {/* <Category name={categoryObj.name} img_url={categoryObj.img_url} /> */}
                <Category categoryInfo={categoryObj} />
            </div>        
          })}
      </div>
    </div>
  );
}
