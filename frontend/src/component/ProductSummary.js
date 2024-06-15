import "./css/Card.css";

import Card from "@mui/joy/Card";

function ProductSummary({ products }) {
  return (
    <div className="container">
      <Card variant="outlined" className="Card-main">
        <div className="Card-header-spacing">
          <span>สินค้า</span>
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
                    <span>{x.name}</span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: 70,
                          backgroundColor: "#dcf2f8",
                          borderRadius: 100,
                          marginTop: 8,
                        }}
                      >
                        <span>x {x.quantity}</span>
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

export default ProductSummary;
