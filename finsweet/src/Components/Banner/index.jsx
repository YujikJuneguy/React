import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Banner = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={`container ${styles.b}`}>
          <div className="col-6">
            <p className={styles.slogan}>
              Building stellar websites for early startups
            </p>
            <p className={styles.subslogan}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <Link className={styles.button} to="/">
              View our work
            </Link>
            <Link className={styles.buttonvsarrow} to="/">
              View Pricing{" "}
              <HiOutlineArrowNarrowRight className={styles.arrow} />
            </Link>
          </div>
          <div className="">
            <img src="/Illustration.svg" alt="" />
          </div>
        </div>
      </div>
      <p className={styles.work}>
      How we work
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </p>
      <Link>
      Get in touch with us
      </Link>
    </div>
  );
};

export default Banner;
