import React, { useEffect, useState } from "react";
import "./style.scss";
import { Carousel } from "antd";
import { back } from "../../utils/axios";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [avaible, setAvCars] = useState([]);

  useEffect(() => {
    back.get("/cars").then((res) => {
      const all = res.data;
      setCars(all.slice(0, 4));
      const availableCar = res.data.filter((car) => car.avaible);
      setAvCars(availableCar.slice(0, 4));
    });
  }, []);

  console.log(cars);
  console.log(avaible);
  return (
    <>
      <div className="showcase">
        <Carousel
          arrows
          infinite
          draggable
          autoplaySpeed={5000}
          className="carusel"
          autoplay
        >
          <div className="cardiv audi">
            <div className="txt">
              <h1>
                DON'T WASTE YOUR TIME <br /> GET YOUR <span>AUDI R8</span>
              </h1>
              <p>
                The Audi R8 is a mid-engine, two-seater sports car that debuted
                in 2006, marking Audi's entry into the supercar segment. It
                features Audi's quattro permanent all-wheel drive system and
                shares its chassis with the Lamborghini Gallardo.{" "}
              </p>
            </div>
          </div>
          <div className="cardiv jeep">
            <div className="txt">
              <h1>
                BIG AND FAST
                <br /> GET YOUR <span>TRACKHAWK</span>
              </h1>
              <p>
                The Jeep Grand Cherokee Trackhawk is a high-performance SUV that
                combines luxury with exceptional power. Introduced in 2018, it
                stands out as one of the most powerful production SUVs
                available.
              </p>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="avaible">
        <div className="title  leading-tight">
          <h1>Avaible Cars</h1>
          <p className="text-[25px] text-center">get them right now</p>
        </div>
        <div className="grid">
          {avaible?.map((car) => {
            return (
              <div className="car">
                <img src={car.image} alt="" />
                <div className="txt">
                  <h1>{car.name}</h1>
                  <h1>$ {car.price}</h1>
                </div>
              </div>
            );
          })}
        </div>

        <a className="text-gray-700" href="/avaible-cars">
          see more
        </a>
      </div>
      <div className="avaible">
        <div className="title  leading-tight">
          <h1 className="text-center"> Cars</h1>
          <p className="text-[25px] text-center">get them right now</p>
        </div>
        <div className="grid second">
          {cars?.map((car) => {
            return (
              <div className="car">
                <img src={car.image} alt="" />
                <div className="txt">
                  <h1>{car.name}</h1>
                  <h1>$ {car.price}</h1>
                </div>
              </div>
            );
          })}
        </div>

        <a className="text-gray-700" href="/avaible-cars">
          see more
        </a>
      </div>

      <div className="about">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="info">
          <p>
            Since 2019, we have been dedicated to providing high-quality
            vehicles to our customers with an exceptional level of service. As a
            trusted car dealership, we specialize in offering a wide range of
            vehicles, from the latest models to certified pre-owned cars, all
            available for purchase and timely delivery. Our commitment is to
            make the car-buying process as seamless as possible by offering
            flexible delivery options tailored to your needs. At Gavhar , we pride ourselves on our customer-centric approach. Whether
            you're looking for a family-friendly vehicle, a luxury car, or a
            performance model, our team is here to help you find the perfect
            fit. With years of experience in the industry, we continue to grow
            and adapt to meet the evolving needs of our clients. Thank you for
            choosing us to be a part of your car-buying journey. We look forward
            to delivering your next vehicle!
          </p>
        </div>
      </div>
    </>
  );
}
