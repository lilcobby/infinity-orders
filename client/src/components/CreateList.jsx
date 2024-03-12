import React, { useState } from "react";

function OrderForm() {
  const [orderList, setOrderList] = useState([]);

  const handleAddOrder = () => {
    setOrderList([...orderList, { image: "", selectedImage: "image1" }]);
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

  return (
    <div>
      <h2>Order Form</h2>
      <input type="text" value="placeholder for list name" />
      <button onClick={handleAddOrder}>Add Order</button>

      <form>
        {orderList.map((order, index) => (
          <div key={index}>
            <select
              value={order.selectedImage}
              onChange={(event) => handleImageChange(index, event)}
            >
              <option value="image1">Image 1</option>
              <option value="image2">Image 2</option>
            </select>
            <input type="text" value={order.image} />
            <button type="button" onClick={() => handleDeleteOrder(index)}>
              Delete
            </button>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OrderForm;
