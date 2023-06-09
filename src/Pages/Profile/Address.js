import React from "react";
import "./Address.css";
import { AddressState } from "../../Contexts/Data/AddressContext";
import { remove } from "../../Services/Toast/ToastServices";

export const Address = () => {
  const {
    isHideBox,
    setisHideBox,
    addressState: { address },
    addressDispatch,
    setValues,
  } = AddressState();

  const HandleNewAddress = () => {
    setisHideBox(!isHideBox);
    setValues((prev) => ({
      id: new Date().getTime(),
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      MobileNum: "",
    }));
  };
  const removeHandler = (id) => {
    addressDispatch({ type: "REMOVE_ADDRESS", payload: id });
    remove("Address Removed Successfully!");
  };

  const editHandler = (editId) => {
    setisHideBox(!isHideBox);
    console.log(editId, "editid");
    setValues(() => address.find((data, i) => data.id === editId));
    addressDispatch({ type: "EDIT_ADDRESS", payload: editId });
  };

  return (
    <>
      <div className="address-card">
        <div className="flex address-btn-heading">
          <span className="My-Address-heading">My Address: </span>
        </div>

        <div className="address-info">
          {address.map(
            (
              { id, name, street, city, state, country, postalCode, MobileNum },
              i
            ) => (
              <div className="new-added-address bottom-margin-md" key={id}>
                <p className="font-bold sm-margin-bottom"> {name}</p>
                <p>
                  {" "}
                  {street},{city},{state},
                </p>
                <p>{country}</p>
                <p>{postalCode}</p>
                <p>Phone Number :{MobileNum}</p>
                <button onClick={() => editHandler(id)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => removeHandler(id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            )
          )}
        </div>
        <button onClick={HandleNewAddress} className="add-new-address-btn">
          +Add New Address
        </button>
      </div>
    </>
  );
};
