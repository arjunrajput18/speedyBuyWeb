import React from "react";
import "./Address.css";
import { AddressState } from "../../Contexts/Data/AddressContext";

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
      id:new Date().getTime(),
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
    // console.log(i)
    addressDispatch({ type: "REMOVE_ADDRESS", payload: id });
  };

  const editHandler = (editId) => {
    setisHideBox(!isHideBox);
    console.log(editId,"editid")
    setValues(() => address.find((data,i) => data.id === editId));
    // console.log(11)
    addressDispatch({ type: "EDIT_ADDRESS", payload: editId });
    // console.log(editId)
  };

  return (
    <>
      <div className="address-card">
        <p>My Address: </p>
        <button onClick={HandleNewAddress}>Add New Address</button>
        <hr></hr>
        <div>
          {address.map(
            (
              {  id,name, street, city, state, country, postalCode, MobileNum },
              i
            ) => (
              <div className="new-added-address" key={i}>
                <p className="font-bold"> {name}</p>
                <p>
                  {" "}
                  {street},{city},{state},{country}
                </p>
                <p>{postalCode}</p>
                <p>Phone Number :{MobileNum}</p>
                <button onClick={() => editHandler(id)}>Edit</button>
                <button onClick={() => removeHandler(id)}>Remove</button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
