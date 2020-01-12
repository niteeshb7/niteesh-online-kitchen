import React from 'react';
import styles from './Loading.module.scss';
import LoadingIcon from '../icons/Loading/Loading';

const Loading = ({size}) => <div className={styles.Loader}>{size && <LoadingIcon size={size}/>}
    Please wait ...</div>;

export default Loading;
