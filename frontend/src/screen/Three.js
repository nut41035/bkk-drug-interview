import React from "react";

import "../component/css/Modal.css";

import Topbar from "../component/Topbar";
import ProductSummary from "../component/ProductSummary";
import LocationStep from "../component/LocationStep";
import Distance from "../component/Distance";
import shortestPathService from "../api/shortestPathService";
import Modal from "react-modal";

import * as loadingData from "./loading.json";
import Lottie from "react-lottie";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoSync } from "react-icons/go";

Modal.setAppElement("#root");

function Three() {
  const location = useLocation();
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    fetchData();
  }, [retry]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const request = {
        order: location.state.order,
        currentLocation: {
          lon: location.state.location.lng,
          lat: location.state.location.lat,
        },
      };

      const response = await shortestPathService.findPath(request);
      setResponse(response);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setRetry((prev) => !prev);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: "40%",
          right: 0,
          textAlign: "center",
        }}
      >
        <Lottie options={defaultOptions} width="80%" />
      </div>
    );
  } else {
    return (
      <div>
        {error && (
          <Modal
            isOpen={!!error}
            contentLabel="Error Modal"
            className={"modal-content"}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            }}
          >
            <h2>{error.message}</h2>
            <div>{error.code}</div>
            <GoSync
              onClick={handleRetry}
              style={{ color: "#00b3f0", fontSize: "28px", marginTop: "15px" }}
            >
              Retry
            </GoSync>
          </Modal>
        )}

        <Topbar title="ลำดับสาขา" isBackable={true} />

        <ProductSummary products={location.state.order} />
        {response?.path?.map((location, i) => {
          return <LocationStep location={location} i={i} />;
        })}

        <Distance distance={response.distance} />
      </div>
    );
  }
}

export default Three;
