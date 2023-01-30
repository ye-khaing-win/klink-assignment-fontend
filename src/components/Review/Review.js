import React from "react";
import classes from "./Review.module.scss";
import Ratings from "../widgets/Ratings/Ratings";
import Avatar from "../widgets/Avatar/Avartar";
import userImage from "../../images/avatar.jfif";
import companyImage from "../../images/company.jpg";

const Review = () => {
  return (
    <div className={classes.review}>
      <Ratings />
      <p className={classes.review__text}>
        KLink has saved us thousands of hours of work. We’re able to spin up
        projects and features much faster.
      </p>
      <div className={classes.review__reviewer}>
        <div className={classes.review__avatar}>
          <Avatar imageUrl={userImage} height="64px" width="64px" />
          <div className={classes.review__company}>
            <Avatar imageUrl={companyImage} height="20px" width="20px" />
          </div>
        </div>

        <div className={classes.review__reviewer_name}>Ye Khaing Win</div>
        <div className={classes.review__reviewer_position}>
          Full Stack Developer
        </div>
      </div>
    </div>
  );
};

export default Review;
