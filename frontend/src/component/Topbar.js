import "./css/Topbar.css";

import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

function Topbar({ title, isBackable }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="row"
      style={{
        boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
      }}
    >
      <div className="column side">
        {isBackable && (
          <SlArrowLeft className="arrow" onClick={() => goBack()} />
        )}
      </div>
      <div className="column center">{title}</div>
      <div className="column side"></div>
    </div>
  );
}

export default Topbar;
