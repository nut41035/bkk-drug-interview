import "./css/Card.css";

import Card from "@mui/joy/Card";

function Distance({ distance }) {
  return (
    <div className="container" style={{ paddingBottom: "2rem" }}>
    <Card variant="outlined" className="Card-main">
      <div
        style={{
          paddingLeft: "1em",
          fontSize: "14px",
          display: "grid",
          gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
        }}
      >
        <span style={{ gridColumn: "span 2" }}>ระยะทางทั้งหมด :</span>
        <span
          style={{
            fontWeight: 900,
            paddingLeft: "1rem",
            gridColumn: "span 2",
          }}
        >
          {(distance / 1000).toFixed(1)} กม.
        </span>
      </div>
    </Card>
  </div>
  );
}

export default Distance;
