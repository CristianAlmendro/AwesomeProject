import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../Types';

const Steel = ({color, width, height, ...props}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 25 25" fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M.002 12.515a.018.018 0 0 1 0-.018L6.29 1.757a.018.018 0 0 1 .016-.01h12.46c.006 0 .012.004.015.01l6.217 10.74a.018.018 0 0 1 0 .018L18.78 23.244a.018.018 0 0 1-.016.009H6.304a.018.018 0 0 1-.015-.01L.002 12.516Zm18.29-.015a5.79 5.79 0 1 1-11.58 0 5.79 5.79 0 0 1 11.58 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Steel;
