import { isEmptyString } from "./helpers";

export const validateIsEmpty = (value) => {
  return [!isEmptyString(value), "must not be empty!"];
};

export const validateIsNumber = (value) => {
  return [/^\d*\.?\d*$/.test(value), "must be Nos!"];
};

export const validateIsEmail = (email) => {
  return [
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    "Invalid Email",
  ];
};

export const validatePasswordLength = (length) => (str) => {
  return [str.length >= length, "Password must contains 8 characters"];
};
