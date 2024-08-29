import React, { useState } from "react";
import Menu from "./Menu";


const Galleryreact = () => {
  const [item, setItem] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItem = Menu.filter((curredata) => {
      return curredata.category === categoryItem;
    });
    setItem(updatedItem);
  };

  return (
    <>
      <h1 className="heading-div">Order Your Favourite Dish</h1>
      <hr />
      <div className="container">
        <div className="menu-tab">
          <button className="btn" onClick={() => filterItem("breakfast")}>Breakfast</button>
          <button className="btn" onClick={() => filterItem("lunch")}>Lunch</button>
          <button className="btn" onClick={() => filterItem("evening")}>Evening</button>
          <button className="btn" onClick={() => filterItem("dinner")}>Dinner</button>
          <button className="btn" onClick={() => setItem(Menu)}>All</button>
        </div>
        <div className="menu-item-container">
          {item.map((element) => {
            const { id, name, description, image, price } = element;
            return (
              <div className="menu-item" key={id}>
                <div className="menu-img">
                  <img src={image} alt={name} />
                </div>
                <div className="menuitem-description">
                  <div className="main-title">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    
                  </div>
                  <div className="menuitem-price">
                    <h2>Price: {price}</h2>
                    <a href="#">
                      <button className="order-btn">Order Now</button>
                    </a>
                    <p>Price may vary based on selected data</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Galleryreact;
