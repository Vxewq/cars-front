import { useParams } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";
import { back } from "../../utils/axios";
import { Card, Typography, Input, Button } from "@material-tailwind/react";

export default function Deal() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  useEffect(() => {
    back.get(`/cars/${id}`).then((res) => setCar(res.data));
  }, []);
  const deal = () => {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const send = () => {
    back
      .post("/orders", {
        name: name,
        email: email,
        phone: phone,
        carId: car._id,
      })
      .then((res) => alert(res.statusText));


    localStorage.setItem("order", {
      name: name,
      email: email,
      phone: phone,
      carId: car._id,
    });

    console.log(localStorage.getItem("order"));
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Deal for {car.name}</h1>
      </div>
      <div className="container-bottom">
        <div className="car">
          <img src={car.image} alt="" />
          <div className="txt">
            <div className="top">
              <h1>{car.name}</h1>
              <h1>{car.price} $</h1>
            </div>
            <h1>{car.description}</h1>
          </div>
        </div>
        <div className="form">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Send your information
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              We will contact you in less than a minute.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Phone Number
                </Typography>
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="number"
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Button onClick={send} className="mt-6" fullWidth>
                send
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
