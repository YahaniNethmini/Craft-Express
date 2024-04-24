import React from "react";
import Nav from "./Nav";
import ShopContent from "./ShopContent";
import ResinArt06 from "../assets/ResinArt06.jpg"; 
import PaperCraft09 from "../assets/PaperCraft09.jpg";

function Shop() {
  return (
    <div>
      <Nav />
      <ShopContent 
        img={ResinArt06}
        title="Resin Art 06"
        description="Rs.1820/="
        buttonText="Remove"
        style={{ width: "100px" }}
      />
      <ShopContent
        img={PaperCraft09}
        title="Resin Art 09"
        description="Rs.1750/="
        buttonText="Remove"
        style={{ width: "100px" }} 
       />
    </div>
  );
}

export default Shop;
