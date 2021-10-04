import ReactImageZoom from "react-image-zoom";
const About = () => {
  const props = {
    width: 500,
    height: 300,
    zoomWidth: 1000,
    img: "https://image.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg",
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-4 ">
          <div className="col-md-6">
            <ReactImageZoom {...props} />
            {/* <img
              src="https://image.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg"
              alt="developemnt"
              width={500}
              height={300}
            /> */}
          </div>
          <div className="col-md-6">
            <h6 className="text-white">About me</h6>
            <h5 className="display-3 text-uppercase text-white">About</h5>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Lorme1
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Lorme2
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Lorme3
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="progress m-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      90%
                    </div>
                  </div>
                  <div className="progress mt-20">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      90%
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quos, debitis.
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, magnam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
