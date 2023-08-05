import React from "react";
import Modal from "react-modal";

export function SuccessModal({ isVisible, handleCloseModal, handleClose }) {
  const customStyles = {
    content: {
      width: "300px",
      height: "200px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal isOpen={isVisible} style={customStyles}>
      <h3 style={{ textAlign: "center" }}>Expense added Successfully</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={require("../../assets/images/success.png")}
            style={{ width: "60px", height: "60px" }}
            alt="success"
          />

          <div style={{ display: "flex", marginTop: "20px" }}>
            <div
              style={{
                width: "50px",
                height: "20px",
                cursor: "pointer",
                border: "1px solid green",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                marginRight: "10px",
              }}
              onClick={() => handleCloseModal()}
            >
              <h4>Home</h4>
            </div>

            <div
              style={{
                width: "50px",
                height: "20px",
                cursor: "pointer",
                border: "1px solid green",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
              onClick={() => handleClose()}
            >
              <h4>Close</h4>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
