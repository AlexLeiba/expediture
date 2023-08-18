import React, { useState } from "react";
import Modal from "react-modal";
import { Types } from "../../consts/Types";
import { CategoriesFilter } from "../DropdownFilter/CategoriesFilter";
import { useSelector } from "react-redux";

export function SuccessModal({
  isVisible,
  handleCloseModal,
  handleClose,
  modalType,
  handleCategoryClick,
}) {
  const byCategory = useSelector((state) => state.expenses.filters.category);

  const [filtersValue, setFiltersValue] = useState({});
  const [filtersCheckboxValue, setFiltersCheckboxValue] = useState({});

  const customStyles = {
    content: {
      width: "350px",
      height: "250px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function handleSubmitFilters() {
    handleCategoryClick(filtersValue);
    handleClose();
  }

  function isFilterRadioChecked() {
    // if (filtersCheckboxValue && byCategory.title) {
    //   return filtersCheckboxValue[byCategory.title];
    // }
    if (filtersCheckboxValue) {
      return true;
    }
    if (filtersCheckboxValue[byCategory.title]) {
      return true;
    }

    return false;
  }

  console.log({ da: isFilterRadioChecked() });
  return (
    <Modal isOpen={isVisible} style={customStyles}>
      {modalType !== Types.FILTER && (
        <>
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
        </>
      )}

      {modalType === Types.FILTER && (
        <>
          <h3 style={{ textAlign: "center", margin: "0 0 5px 0" }}>
            Advanced filters
          </h3>

          <div style={{ display: "flex" }}>
            <div>
              <label htmlFor="higherThan">Higher than:</label>
              <input
                style={{ height: "20px", border: "solid 1px gray" }}
                type="number"
                name="higherThan"
                id="higherThan"
              />
            </div>

            <div>
              <label htmlFor="higherThan">Lower than:</label>
              <input
                style={{ height: "20px", border: "solid 1px gray" }}
                type="number"
                name="lowerThan"
                id="lowerThan"
              />
            </div>
          </div>

          <h3 style={{ textAlign: "center" }}>Filters by category</h3>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {CategoriesFilter.map((data, index) => {
              return (
                <div
                  key={data.id + index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "10px",
                  }}
                >
                  <label htmlFor="categories">{data.title}</label>{" "}
                  <input
                    // checked={
                    //   filtersCheckboxValue[data.title]
                    //     ? filtersCheckboxValue[data.title]
                    //     : false
                    // }
                    value={filtersCheckboxValue}
                    type="radio"
                    name="categories"
                    onClick={() => {
                      setFiltersCheckboxValue({
                        [data.title]: true,
                      });

                      setFiltersValue(data);
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "20px",
                cursor: "pointer",
                border: "1px solid green",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                marginRight: "20px",
              }}
              onClick={() => handleSubmitFilters()}
            >
              <h4>Apply filters</h4>
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
        </>
      )}
    </Modal>
  );
}
