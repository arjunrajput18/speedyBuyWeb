import React from "react";
import "./NewAddress.css";
import { AddressState } from "../../Contexts/Data/AddressContext";
export const NewAddress = () => {
  const {
    setisHideBox,
    addressDispatch,
    addressState: { address, updatedId },
    setValues,
    values,
  } = AddressState();
console.log(updatedId,"updatedId")
  const saveCondition = updatedId? true : false;


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSave = () => {
    // console.log(saveCondition)
if(values.name && values.city && values.state && values.country && values.street &&values.postalCode){
  console.log(saveCondition)
  if (saveCondition) {
    console.log(values)
    const updatedData = address.map((data,i) =>
    data.id === updatedId ? values : data
    );
    console.log("updatedData",updatedData)
    addressDispatch({ type: "UPDATE_ADDRESS", payload: updatedData });
    setisHideBox(false);
  } else {
    setisHideBox(false);
    addressDispatch({ type: "ADD_NEW_ADDRESS", payload: values });
    setValues((prev) => ({
      ...prev,
      id: new Date().getTime().toString(),
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      MobileNum: "",
    }));
  }
}
 
  };

  const handleDummyAddress = () => {
    setValues(() => ({
      id:"2",
      name: "Arjunsingh Rajput",
      street: "204, sai jyot, s. n road Mulund WEST",
      city: "MUMBAI",
      state: "MAHARASHTRA",
      country: "India",
      postalCode: "400080",
      MobileNum: "9320003120",
    }));
    // console.log(values)
  };
  return (
    <div>
      {" "}
      <form className="adress-form-details" onSubmit={handleSubmit}>
        <div>
          <p className="text-center top-margin font-bold sm-margin-bottom">
            Add New Address
          </p>
          <input
            type="text"
            className="padding-top-bottom-5 address-field"
            placeholder="Enter Name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="padding-top-bottom-5 address-field"
            placeholder="Enter House No,Road,Colony"
            name="street"
            value={values.street}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="padding-top-bottom-5 address-field"
            placeholder="Enter City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="padding-top-bottom-5 address-field"
            placeholder="Enter State"
            name="state"
            value={values.state}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="padding-top-bottom-5 address-field"
            placeholder="Enter Country"
            name="country"
            value={values.country}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="padding-top-bottom-5 address-field"
            placeholder="Enter Postal Code"
            name="postalCode"
            value={values.postalCode}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="padding-top-bottom-5 address-field"
            placeholder="Enter Mobile Number"
            name="MobileNum"
            value={values.MobileNum}
            onChange={handleInputChange}
          />
          <div className="btn-address-save-cancel">
            <button className="save-address-btn" onClick={handleSave}>
              Save
            </button>
            <button
              className="cancel-address-btn"
              onClick={() => setisHideBox(false)}
            >
              Cancel
            </button>
            <button className="dummy-address-btn" onClick={handleDummyAddress}>
              {" "}
              Fill With Dummy Values
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
