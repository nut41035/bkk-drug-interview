import React from "react";

import "../component/css/Card.css";

import Topbar from "../component/Topbar";
import CuteButton from "../component/CuteButton";
import ShortAddres from "../component/ShortAddres";
import ProductSelection from "../component/ProductSelection";

import { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

function Two() {
  // replace with API later
  const [state, setState] = useState([
    {
      displayName: "Acerola Cherry 1000 mg",
      name: "acerola_cherry_1000mg",
      quantity: 24,
      image: "/cherry.jpg",
    },
    {
      displayName: "Salmon Fish 1000 mg",
      name: "salmon_fish_1000mg",
      quantity: 15,
      image: "/salmon.jpeg",
    },
  ]);

  const navigate = useNavigate();
  const location = useLocation();

  const gotToNewPage = () => {
    navigate("/summary", { state: { order: state, location: location.state } });
  };

  const handleAdd = (name, amt) => {
    const index = state.findIndex((item) => item.name === name);
    const newOrder = [...state];
    newOrder[index] = {
      ...state[index],
      quantity:
        state[index].quantity + amt >= 0 ? state[index].quantity + amt : 0,
    };
    setState(newOrder);
  };

  const handleClear = () => {
    const updatedItems = [...state];
    updatedItems?.forEach((item) => {
      item.quantity = 0;
    });
    setState(updatedItems);
  };

  return (
    <div>
      <Topbar title="สั่งซื้อสินค้า" isBackable />

      <ShortAddres address={location.state.address} />
      <ProductSelection
        products={state}
        handleAdd={handleAdd}
        handleClear={handleClear}
      />

      <div className="footer">
        <CuteButton text="ซื้อสินค้า" onClick={() => gotToNewPage()} />
      </div>
    </div>
  );
}

export default Two;
