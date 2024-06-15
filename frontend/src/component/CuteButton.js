import * as React from "react";
import Button from "@mui/material/Button";
import "./css/CuteButton.css";

export default function CuteButton({ text, onClick }) {
  return (
    <Button variant="contained" className="Button" onClick={() => onClick()}>
      {text}
    </Button>
  );
}
