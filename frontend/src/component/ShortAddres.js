import "./css/Card.css";

import Card from "@mui/joy/Card";
import Divider from "@mui/material/Divider";

function ShortAddres({ address }) {
  return (
    <div className="container">
      <Card className="Card-main Card-shadow">
        ที่อยู่
        <Divider variant="middle" />
        <span style={{ fontSize: 12 }}>{address}</span>
      </Card>
    </div>
  );
}

export default ShortAddres;
