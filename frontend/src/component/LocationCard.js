import "./css/Card.css";

import Card from "@mui/joy/Card";
import { SlLocationPin } from "react-icons/sl";

function LocationCard({ address }) {
    return (

          <Card variant="outlined" className="Card-location">
            <div className="row-table">
              <div className="float-left width-10">
                <SlLocationPin style={{ color: "red", fontSize: "28px" }} />
              </div>
              <div
                className="float-left width-90"
                style={{ paddingLeft: "1em", fontSize: "14px" }}
              >
                {address}
              </div>
            </div>
          </Card>

    );
  }
  
  export default LocationCard;
  