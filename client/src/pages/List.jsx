import { useState } from "react";
import { GET_USER } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_ORDER, DELETE_ORDER } from "../utils/mutations";

const List = () => {
  const { loading, data, refetch } = useQuery(GET_USER, {
    fetchPolicy: "network-only",
  });
  const user = data?.getUser || {};
  const [selectedImage, setSelectedImage] = useState("regular");
  const [addOrder] = useMutation(ADD_ORDER, {
    onCompleted: () => {
      refetch();
    },
  });
  const [deleteOrder] = useMutation(DELETE_ORDER, {
    onCompleted: () => {
      refetch();
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!Auth.loggedIn()) {
    return <h2>Please log in</h2>;
  }

  const handleAddOrder = async (listId) => {
    addOrder({ variables: { listId, image: selectedImage } });
  };

  const handleDeleteOrder = async (listId, orderId) => {
    await deleteOrder({ variables: { listId, orderId } });
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  return (
    <div className="container">
      <div>
        <h1>{user.userName}'s Lists</h1>
        {user.lists.map((list) => (
          <div key={list._id}>
            <h2>List ID: {list._id}</h2>
            <h2>List Name: {list.name}</h2>

            <h3>Orders:</h3>
            <ul>
              {list.orders.map((order) => (
                <li key={order._id}>
                  {order.image}
                  <img
                    src={`/assets/${order.image}.jpg`}
                    alt="order"
                    className="image"
                  />
                  <button
                    onClick={() => handleDeleteOrder(list._id, order._id)}
                  >
                    Delete
                  </button>
                  <div>`${order._id}`</div>
                </li>
              ))}
            </ul>
            <select value={selectedImage} onChange={handleImageChange}>
              <option value="regular">Regular</option>
              <option value="irregular">Irregular</option>
              <option value="impetuous">Impetuous</option>
              <option value="lieutenant">Lieutenant</option>
              <option value="commandToken">Command Token</option>
            </select>
            <button onClick={() => handleAddOrder(list._id)}>Add Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
