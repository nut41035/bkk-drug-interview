import "./css/Card.css";

import Button from "@mui/material/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";

import { SlPlus, SlMinus } from "react-icons/sl";

function ProductSelection({ products, handleAdd, handleClear }) {
  return (
    <div className="container">
      <Card variant="outlined" className="Card-main">
        <div className="Card-header-spacing">
          <span>สินค้า</span>
          <Button
            variant="outlined"
            style={{
              borderRadius: 100,
              color: "#00B3F0",
              borderColor: "#00B3F0",
            }}
            onClick={() => handleClear()}
          >
            ลบทั้งหมด
          </Button>
        </div>
        <div>
          {products?.map((x, i) => {
            return (
              <Card
                variant="outlined"
                className="container"
                style={{
                  marginBottom: i + 1 === products?.length ? 0 : 16,
                }}
                key={i}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    src={x.image}
                    alt=""
                    width={60}
                    height={60}
                    style={{
                      border: "1px solid #f3f3f3",
                      marginRight: "8px",
                    }}
                    radius={3}
                  />
                  <div style={{ display: "grid", width: "100%" }}>
                    <span>{x.displayName}</span>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: 90,
                          backgroundColor: "#dcf2f8",
                          borderRadius: 100,
                          marginTop: 8,
                        }}
                      >
                        <IconButton
                          size="small"
                          style={{ color: "#00B3F0" }}
                          onClick={() => handleAdd(x.name, -1)}
                        >
                          <SlMinus />
                        </IconButton>
                        <span>{x.quantity}</span>
                        <IconButton
                          size="small"
                          style={{ color: "#00B3F0" }}
                          onClick={() => handleAdd(x.name, 1)}
                        >
                          <SlPlus />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default ProductSelection;
