import React from "react";

import "./css/One.css";
import "../component/css/Card.css";

import Topbar from "../component/Topbar";
import CuteButton from "../component/CuteButton";
import MapComponent from "../component/MapComponent";
import PinSummary from "../component/PinSummary";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function One() {
  const [state, setState] = useState({
    lat: "",
    lng: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleState = (updatedValues) => {
    setState({ ...state, ...updatedValues });
  };

  const goToNewPage = () => {
    navigate("/cart", { state: state });
  };

  return (
    <div>
      <Topbar title="เลือกที่อยู่ส่งด่วน" isBackable={false} />
      <MapComponent handleState={handleState} />

      <PinSummary
        title={"ที่อยู่* (ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์)"}
        address={state.address}
      />

      <div className="footer">
        <CuteButton text="ยืนยันตำแหน่ง" onClick={() => goToNewPage()} />
      </div>
    </div>
  );
}

export default One;
