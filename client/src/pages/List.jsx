import { GET_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import OrderForm from "../components/CreateList";

const List = () => {
  const { loading, data } = useQuery(GET_USER);
  const user = data?.getUser || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!Auth.loggedIn()) {
    return <h2>please log in</h2>;
  }
  return (
    <div className="container">
      <div>
        <h1>{user.userName}'s Lists</h1>
        {user.lists.map((list) => (
          <div key={list._id}>
            <h2>List Name: {list.name}</h2>
            <p>Wins: {list.wins}</p>
            <p>Losses: {list.losses}</p>
            <button>play button</button>
            <button>delete button</button>
            {/* <h3>Orders:</h3>
            <ul>
              {list.orders.map((order) => (
                <li key={order.name}>
                  Order Name: {order.name}, {order.image}
                </li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
      <OrderForm />
    </div>
  );
};
export default List;
