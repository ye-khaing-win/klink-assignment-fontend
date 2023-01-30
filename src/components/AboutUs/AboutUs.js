import React from "react";
import classes from "./AboutUs.module.scss";
import Header from "../Header/Header";
import Brand from "../widgets/Brand/Brand";
import brand from "../../images/brand-white.png";
import Review from "../Review/Review";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <div className={classes.aboutus}>
      <Header>
        <Brand src={brand} />
      </Header>
      <Review />
      <Footer>
        <ul className={classes.aboutus__links}>
          <li className={classes.aboutus__link}>
            <a>klinkenterprise.com</a>
          </li>
          <li className={classes.aboutus__link}>
            <a>help@klinkenterprise.com</a>
          </li>
        </ul>
      </Footer>
    </div>
  );
};

export default AboutUs;
