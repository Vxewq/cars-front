import { useEffect, useState } from "react";
import "./style.scss";
import { back } from "../../utils/axios";

export default function Order() {
  const id = localStorage.getItem("order");
  console.log(id);
  const [order, setOrder] = useState({});
  const [car, setCar] = useState({});
  useEffect(() => {
    back.get(`/orders/${id}`).then((res) => setOrder(res.data));
    back.get(`/cars/${order.carId}`).then((res) => setCar(res.data));
  }, []);

  return (
    <div className="container-order">
      <div className="title">
        <h1>Your Order</h1>
      </div>
      <div className="order">
        <div className="car">
            <img src={car.image} alt="car image" />
            <h1>{car.name}</h1>
            <h1>$ {car.price}</h1>
        </div>
        <div className="info">
            <h1>Name:{order.name}</h1>
            <h1>Order id:{order._id}</h1>
        </div>
      </div>
    </div>
  );
}
