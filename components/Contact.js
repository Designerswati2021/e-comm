import Styles from "../styles/contact.module.css";
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [num, setnum] = useState("");
  const [area, setarea] = useState("");
  const [nameerr, setNameerr] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [numerr, setnumerr] = useState("");
  const [areaerr, setareaerr] = useState("");

  function validateName(e) {
    // console.log(e.target.value);
    setName(e.target.value);
  }
  function validateemail(e) {
    setemail(e.target.value);
  }
  function validatenum(e) {
    setnum(e.target.value);
  }
  function validatearea(e) {
    setarea(e.target.value);
  }
  function submitForm(e) {
    e.preventDefault();

    if (name === "") {
      setNameerr("name is empty");
    }
    if (name.length <= 5) {
      setNameerr("name is shorter");
    }
    if (email === "") {
      setemailerr("email is empty");
    }
    if (!email.includes("@")) {
      setemailerr("email error");
    }
    if (num == "") {
      setnumerr("Invalid Phone number");
    }
    if (num.length <= 5) {
      setnumerr("number is invalid");
    }
    if (area == "") {
      setareaerr("Invalid Phone number");
    }
    if (area.length <= 5) {
      setareaerr("text area is invalid");
    } else {
      setNameerr("");
      setemailerr("");
      setnumerr("");
      setareaerr("");
    }
  }

  return (
    <>
      <div className="container">
        <div class="row">
          <h2 className="fs-20 text-center text-uppercase p-4 text-white">
            Contact Us
          </h2>
          <div className="col-md-6">
            <form className={Styles.formbg} onSubmit={submitForm}>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputText"
                  className="form-label text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${Styles.newtext}`}
                  id="exampleInputText"
                  value={name}
                  onChange={validateName}
                />
                <span className="text-danger">{nameerr}</span>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  className={`form-control ${Styles.newtext}`}
                  id="exampleInputEmail1"
                  value={email}
                  onChange={validateemail}
                />
                <span className="text-danger">{emailerr}</span>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPhone"
                  className="form-label text-white"
                >
                  Phone No.
                </label>
                <input
                  type="text"
                  className={`form-control ${Styles.newtext}`}
                  id="exampleInputPhone"
                  value={num}
                  onChange={validatenum}
                />
                <span className="text-danger">{numerr}</span>
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label text-white"
                >
                  Message
                </label>
                <textarea
                  class={`form-control ${Styles.newtext}`}
                  id="exampleFormControlTextarea1 newtext"
                  rows="2"
                  value={area}
                  onChange={validatearea}
                ></textarea>
                <span class="text-danger">{areaerr}</span>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="https://thewingshield.com/assets/img/login.png"
              className={Styles.contactimg}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
