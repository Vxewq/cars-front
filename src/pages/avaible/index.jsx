import React, { useEffect, useState } from "react";
import "./style.scss";
import { back } from "../../utils/axios";
import { Button, Checkbox } from "@material-tailwind/react";
import { Pagination } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function AvaibleCars() {
  const [cars, setCars] = useState([]);
  const [avaible, setAvCars] = useState([]);
  const [show, setShow] = useState(false);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    back.get("/cars").then((res) => {
      const all = res.data;
      setCars(all);
      setAvCars(all.filter((car) => car.avaible));
    });
  }, []);

  const change = () => {
    setShow((prev) => !prev);
  };
  const displayedCars = show ? avaible : cars;

  return (
    <div className="all">
      <div className="title ">
        <h1>All Cars</h1>
        <div className="filter">
          <Pagination
            className="pag"
            defaultCurrent={1}
            total={displayedCars.length}
            defaultPageSize={10}
          />
          <Checkbox onChange={change} label="Show Only Avaible Cars" />
        </div>
      </div>

      <div className="avaible">
        {displayedCars?.map((car) => {
          return (
            <div key={car._id} className="car">
              <img width={370} height={270} src={car.image} alt="" />
              <div className="txt">
                <div className="top">
                  <h1>{car.name}</h1>
                  <h1>{car.price}</h1>
                </div>
                <Link to={`/deal/${car._id}`}>
                  <Button
                    variant="outlined"
                    color="white"
                    className="w-full my-2"
                  >
                    get
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
