import React from 'react';
import styles from './OriginStat.module.scss';

export default function OriginStat(props) {
    return (
        <div className={styles.root}>
            <label className={styles.info}>{props.title}</label>
            <input type="text" className={styles.value} value={props.value} />
        </div>
    )
}
