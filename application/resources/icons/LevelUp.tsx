import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../Types';

const LevelUp = ({...props}: IconProps) => (
  <Svg width={26} height={25} fill="none" {...props}>
    <Path
      fill="#747476"
      d="M4.283 13.777H18.62l-6.263 6.263a1.294 1.294 0 0 0 .415 2.1 1.279 1.279 0 0 0 1.394-.277l8.459-8.458a1.279 1.279 0 0 0 0-1.81l-8.459-8.458a1.28 1.28 0 1 0-1.81 1.81l6.264 6.263H4.283c-.705 0-1.283.577-1.283 1.283s.578 1.284 1.283 1.284Z"
      opacity={0.1}
    />
  </Svg>
);
export default LevelUp;
