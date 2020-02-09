import React from 'react';
import styles from './Loading.module.scss';

const Loading = ({size = 40, color = '#1976d2', text}) => {
    return <div className={styles.loaderWrap} style={{color}}>
        <svg className={styles.LoadingIcon} height={size} width={size}>
            <circle cx={size / 2}
                    cy={size / 2}
                    r={.4 * size}
                    strokeWidth={.073 * size}
                    strokeDasharray={.8 * size * Math.PI}
                    fill="none"/>
        </svg>
        <div>{text}</div>
    </div>;
};

export default Loading;
