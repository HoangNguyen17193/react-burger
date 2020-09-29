import React from "react";
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Common/Backdrop/Backdrop';
import classes from './SideDrawer.module.scss';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer, props.open? classes.Open: classes.Close];
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;