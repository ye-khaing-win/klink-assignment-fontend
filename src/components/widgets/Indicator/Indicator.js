import React from 'react';
import classes from './Indicator.module.scss';
import icons from '../../../images/icons.svg';

const Indicator = ({ icon, bgColor, description }) => {
  let color;

  switch (String(description)?.toLowerCase()) {
    case 'white':
      color = 'white';
      break;
    case 'active':
    case 'created':
    case 'green':
    case 'permitted':
      color = 'green';
      break;
    case 'issued':
    case 'passed':
      color = 'blue';
      break;
    case 'dead':
    case 'red':
    case 'halted':
      color = 'red';
      break;
    case 'in full':
    case 'listed':
    case 'departed':
    case 'delivered':
      color = 'yellow';
      break;
    default:
      color = null;
      break;
  }

  const indicatorClasses = [classes.indicator];
  const iconClasses = [classes.indicator__icon];

  // ICON COLOR
  if (color) iconClasses.push(classes[`indicator__icon--${color}`]);

  // INDICATOR BACKGROUND COLOR
  if (bgColor) indicatorClasses.push(classes[`indicator--${bgColor}`]);

  return (
    <div className={indicatorClasses.join(' ')}>
      <svg className={iconClasses.join(' ')}>
        <use xlinkHref={`${icons}#${icon}`}></use>
      </svg>
    </div>
  );
};

export default Indicator;
