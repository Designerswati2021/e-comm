import React from "react";
import Styles from "../styles/project.module.css";
import Image from "next/image";
import { position } from "dom-helpers";
function Project() {
  const aaa = [
    {
      id: "1",
      imgsrc:
        "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
      headtext: "lorem",
      paratext: "lorem ipsum",
    },
    {
      id: "2",
      imgsrc:
        "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
      headtext: "lorem",
      paratext: "lorem ipsum",
    },
    {
      id: "3",
      imgsrc:
        "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
      headtext: "lorem",
      paratext: "lorem ipsum",
    },
  ];

  return (
    <div>
      <div class="container">
        <div class="row">
          <h1 className="text-center text-white fs-16 p-3 text-uppercase ">
            Project
          </h1>
          {aaa.map((ar) => (
            <div className="col-md-4">
              <div
                className={Styles.fullProject}
                key={ar.id}
                style={{ position: "relative" }}
              >
                <Image
                  src={ar.imgsrc}
                  alt="img"
                  width={500}
                  height={500}
                  className={Styles.img}
                />
                <div className={Styles.textBottom}>{ar.headtext}</div>
                <div className={Styles.textBottomsec}>{ar.paratext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
