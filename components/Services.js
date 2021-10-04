import React from "react";
import { RiRainbowLine } from "react-icons/ri";
import Styles from "../styles/services.module.css";

function services() {
  const serviceloop = [
    {
      id: "1",
      icon: <RiRainbowLine />,
      heading: "lorem1",
      paragraph: "Your privacy is at the core of the way we design and build ",
    },
    {
      id: "2",
      icon: <RiRainbowLine />,
      heading: "lorem2",
      paragraph: "Your privacy is at the core of the way we design and build ",
    },
    {
      id: "3",
      icon: <RiRainbowLine />,
      heading: "lorem3",
      paragraph: "Your privacy is at the core of the way we design and build ",
    },
    {
      id: "4",
      icon: <RiRainbowLine />,
      heading: "lorem4",
      paragraph: "Your privacy is at the core of the way we design and build ",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1
            className={`text-center p-4 text-uppercase text-white fw-bold border-primary ${Styles.serviceHead}`}
          >
            Services
          </h1>
          {serviceloop.map((myservice) => (
            <div className="col-md-4">
              <div
                className={`p-5 rounded-10 border-5 border-warning ${Styles.serviceFirst}`}
              >
                {myservice.icon}
                <h4 className="text-white "> {myservice.heading}</h4>
                <p className={Styles.textJustify}>{myservice.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default services;
