import React from "react";
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active exact>Burger Builder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

export default navigationItems;