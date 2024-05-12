import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Banner = ({ title, description, image, button, viewPricing = false }) => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={`container ${styles.b}`}>
          <div className="col-6">
            <p className={styles.slogan}>{title}</p>
            <p className={styles.subslogan1}>{description}</p>
            {button}
            {viewPricing && (
              <Link className={styles.buttonvsarrow} to="/">
                View Pricing{" "}
                <HiOutlineArrowNarrowRight className={styles.arrow1} />
              </Link>
            )}
          </div>
          <div className="">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.work}>
        <p className={styles.slogan2}>How we work</p>
        <p className={styles.subslogan2}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <Link className={styles.getin} to="/">
          Get in touch with us{" "}
          <HiOutlineArrowNarrowRight className={styles.arrow2} />
        </Link>
        <div className={styles.cards}>
          <div className={styles.content}>
            <div className={styles.pointer}>
            Rectangle 1244
            <h3>Development</h3>
            <h6>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</h6>
            Rectangle 1244
            <h3>Development</h3>
            <h6>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</h6>
            Rectangle 1244
            <h3>Development</h3>
            <h6>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</h6>
            Rectangle 1244
            <h3>Development</h3>
            <h6>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <h3>Strategy</h3>
<h3>Design</h3>
<h3>Wireframing</h3>
<h3>Development</h3> */
}
