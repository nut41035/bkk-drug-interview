import "./css/Card.css";

import Card from "@mui/joy/Card";
import Divider from "@mui/material/Divider";
import { SlLocationPin } from "react-icons/sl";

function LocationStep({ location, i }) {
  return (
    <div className="container" key={i}>
    <Card variant="outlined" className="Card-main">
      <div>
        <div className="column location-left">
          <SlLocationPin
            style={{ color: "#00b3f0", fontSize: "28px" }}
          />
        </div>
        <div
          style={{
            paddingLeft: "1em",
            fontSize: "14px",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          }}
        >
          <span> สาขา {i + 1} :</span>
          <span style={{ fontWeight: 900 }}>{location}</span>
        </div>
      </div>
      <Divider variant="middle" />
    </Card>
  </div>
  );
}

export default LocationStep;
