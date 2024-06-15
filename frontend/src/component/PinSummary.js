import "./css/Card.css";

import Card from "@mui/joy/Card";
import LocationCard from "./LocationCard";

function PinSummary({ title, address }) {
  return (
    <div className="container">
      <Card variant="outlined" className="Card-main Card-shadow">
        {title}
        <LocationCard address={address} />
      </Card>
    </div>
  );
}

export default PinSummary;
