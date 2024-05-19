import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Banner = ({ title, description, image, button, viewPricing = false }) => {
  const categories = [
    {
      id: 0,
      title: "salam olsun",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
    {
      id: 2,
      title: "2 salam olsun",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
    {
      id: 3,
      title: "3 salam olsun",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
    {
      id: 4,
      title: "4 salam olsun",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
  ];

  return (
    <div className={styles.a}>
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

      <div className={styles.workAndCategories}>
        <div className={styles.left}>
          <p className={styles.slogan2}>How we work</p>
          <p className={styles.subslogan2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <Link className={styles.getin} to="/">
            Get in touch with us{" "}
            <HiOutlineArrowNarrowRight className={styles.arrow2} />
          </Link>
        </div>

        <div className={styles.right}>
          {categories.map(({ id, title, desc }) => {
            return (
              <div key={id} className={styles.rigthSubDiv}>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h1>View our projects</h1>
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
