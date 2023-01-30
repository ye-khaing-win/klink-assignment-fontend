import React from "react";
import classes from "./Categories.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categoryActions from "../../actions/categoryActions";
import { useAuthHeader } from "react-auth-kit";
import { NavLink } from "react-router-dom";

const Categories = ({ onSelectCat }) => {
  const authHeader = useAuthHeader();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const token = authHeader();

  useEffect(() => {
    dispatch(categoryActions.getAll(token));
  }, [dispatch, token]);

  return (
    <ul className={classes.categories}>
      {categories.map((category, i) => (
        <li
          key={i}
          className={classes.category}
          onClick={() => {
            onSelectCat(category.name);
          }}
        >
          <NavLink
            to={category.name}
            className={({ isActive }) =>
              isActive
                ? `${classes.category__link} ${classes["category__link--active"]}`
                : classes.category__link
            }
          >
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
