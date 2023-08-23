import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../Types';

const Ground = ({color, width, height, ...props}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 25 25" fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M5.506 21.492a.01.01 0 0 1-.01-.013L11.88 3.444a.01.01 0 0 1 .01-.006h6.813a.01.01 0 0 1 .01.006L25 21.48a.01.01 0 0 1-.01.013H5.506Zm-5.496.07A.01.01 0 0 1 0 21.55L4.755 8.86a.01.01 0 0 1 .009-.006h4.13a.01.01 0 0 1 .009.013l-4.596 12.69a.01.01 0 0 1-.01.006H.01Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Ground;
