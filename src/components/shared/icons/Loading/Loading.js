import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({size, color = '#1976d2'}) => <svg height={size} width={size} style={{color}}>
    <circle cx={size / 2} cy={size / 2} r={.4 * size} strokeWidth={.08 * size} fill="none"/>
</svg>;

Loading.propTypes = {
    size: PropTypes.number.isRequired
};
export default Loading;
