import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.module.scss';

const Loading = ({size, color}) => <svg className={styles.LoadingIcon} height={size} width={size} style={{color}}>
    <circle cx={size / 2} cy={size / 2} r={.4 * size} strokeWidth={.073 * size} fill="none"/>
</svg>;

Loading.propTypes = {
    size: PropTypes.number.isRequired
};
export default Loading;
