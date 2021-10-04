import React from "react";
import Styles from "../styles/footer.module.css";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

function Footer() {
  const icons = [
    {
      id: "1",
      iconname: <AiFillFacebook />,
      iconlink: "https://www.facebook.com/",
    },
    {
      id: "2",
      iconname: <AiFillInstagram />,
      iconlink: "https://www.facebook.com/",
    },
    {
      id: "3",
      iconname: <AiFillLinkedin />,
      iconlink: "https://www.facebook.com/",
    },
    {
      id: "4",
      iconname: <AiOutlineTwitter />,
      iconlink: "https://www.facebook.com/",
    },
  ];
  return (
    <div className={Styles.footer}>
      <div className={Styles.gridContainer}>
        <div className={Styles.item}>Lorme Ipsum</div>

        <div className={Styles.item}>
          {icons.map((myicons) => (
            <a href={myicons.iconlink} className={Styles.icon} target="_blank">
              {myicons.iconname}

              {/* <AiFillInstagram className={Styles.icon} /> */}
            </a>
          ))}
        </div>

        <div className={Styles.item}>
          made with <FaHeart className={Styles.heart} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
