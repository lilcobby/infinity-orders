import React, { useState } from "react";

function OrderForm() {
  const [orderList, setOrderList] = useState([]);

  const [listName, setListName] = useState("");

  const handleAddOrder = () => {
    setOrderList([...orderList, { image: "", selectedImage: "orderImage" }]);
  };

  const handleImageChange = (index, event) => {
    const newList = [...orderList];
    newList[index].selectedImage = event.target.value;
    setOrderList(newList);
  };

  const handleDeleteOrder = (index) => {
    const newList = [...orderList];
    newList.splice(index, 1);
    setOrderList(newList);
  };
  const handleListNameChange = (event) => {
    setListName(event.target.value);
  };

  return (
    <div>
      <h2>Order Form</h2>
      <input
        type="text"
        value={listName}
        onChange={handleListNameChange}
        placeholder="Enter list name"
      />

      <form>
        {orderList.map((order, index) => (
          <div key={index}>
            <select
              value={order.selectedImage}
              onChange={(event) => handleImageChange(index, event)}
            >
              <option value="regular">regular</option>
              <option value="irregular">irregular</option>
              <option value="impetuous">impetuous</option>
              <option value="lieutenant">lieutenant</option>
              <option value="commandToken">commandToken</option>
            </select>

            <button type="button" onClick={() => handleDeleteOrder(index)}>
              Delete
            </button>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleAddOrder}>Add Order</button>
    </div>
  );
}

export default OrderForm;
