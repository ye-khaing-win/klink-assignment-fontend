export const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0;
};

export const isEmptyString = (str) => {
  return String(str).trim() === "";
};

export const isEmptyArray = (arr) => {
  return arr.length === 0;
};

export const isUrlString = (str) => {
  return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(
    str
  );
};

export const parseToString = (value) => {
  return value ? String(value) : "";
};

export const parseCamelToTitle = (str) => {
  return `${str[0].toUpperCase()}${str.replace(/([A-Z])/g, " $1").slice(1)}`;
};

export const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// export const formatDate = (date, format = 'mm-dd-yyyy h:MM:ss') => {
//   return dateFormat(date, format);
// };

export const formatDate = (d) => {
  const date = new Date(d);

  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  const hh = String(date.getHours()).padStart(2, "0");
  const MM = String(date.getMinutes()).padStart(2, 0);
  const ss = String(date.getSeconds()).padStart(2, "0");

  return d ? `${mm}-${dd}-${yyyy} ${hh}:${MM}:${ss}` : "";
};
