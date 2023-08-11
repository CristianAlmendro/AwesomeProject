import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../Types';

const FilterIcon = ({color, width, height, ...props}: IconProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M11.334 7.486a3.001 3.001 0 0 1-5.668 0c-.054.01-.11.014-.166.014h-2a1 1 0 0 1 0-2h2c.057 0 .112.005.166.014a3.001 3.001 0 0 1 5.668 0c.054-.01.11-.014.166-.014h10a1 1 0 1 1 0 2h-10c-.056 0-.112-.005-.166-.014ZM9.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2.5 18.5a1 1 0 0 1 1-1h2c.057 0 .112.005.166.014a3.001 3.001 0 0 1 5.668 0c.054-.01.11-.014.166-.014h10a1 1 0 1 1 0 2h-10c-.056 0-.112-.005-.166-.014a3.001 3.001 0 0 1-5.668 0c-.054.01-.11.014-.166.014h-2a1 1 0 0 1-1-1Zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM21.5 11.5a1 1 0 1 1 0 2h-2c-.056 0-.112-.005-.166-.014a3.001 3.001 0 0 1-5.668 0c-.054.01-.11.014-.166.014h-10a1 1 0 1 1 0-2h10c.056 0 .112.005.166.014a3.001 3.001 0 0 1 5.668 0c.054-.01.11-.014.166-.014h2Zm-5 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default FilterIcon;
