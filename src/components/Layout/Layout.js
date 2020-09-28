import React from 'react'
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.scss';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
