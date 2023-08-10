import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BackIcon = (props: any) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M21.216 11.223H6.88l6.263-6.263a1.294 1.294 0 0 0-.415-2.1 1.279 1.279 0 0 0-1.394.277l-8.459 8.458a1.278 1.278 0 0 0 0 1.81l8.459 8.458a1.28 1.28 0 1 0 1.81-1.81L6.88 13.79h14.336c.706 0 1.284-.577 1.284-1.283s-.578-1.284-1.284-1.284Z"
    />
  </Svg>
);
export default BackIcon;
