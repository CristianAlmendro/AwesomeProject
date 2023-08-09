import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../Types';

const Fire = ({color, width, height, ...props}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 25 25" fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M17.208 19.306c.31-1.13-.29-3.451-.29-3.451s-.435 1.892-1.115 2.59c-.58.597-1.29 1.01-2.308 1.12a2.474 2.474 0 0 0 1.405-2.223c0-1.369-1.128-2.478-2.52-2.478-1.392 0-2.52 1.11-2.52 2.478 0 .373.083.728.234 1.046-.87-.694-1.007-1.806-1.007-1.806s-.973 4.036 1.706 5.935c2.68 1.899 7.927.267 7.927.267s-7.51 5.284-13.075-.467C.85 17.363 4.394 10.84 4.394 10.84s-.153.605-.153 1.308c0 .702.38 1.236.38 1.236s1.136-2.394 2.02-3.368c.837-.922 1.886-1.669 2.792-2.315.697-.497 1.31-.933 1.676-1.342C13.125 4.105 11.89 0 11.89 0s2.272 2.003 2.906 4.59c.242.986.086 2.108-.053 3.111-.226 1.629-.408 2.945 1.223 2.86 2.636-.139.345-4.202.345-4.202s5.98 3.142 5.533 8.638c-.447 5.497-6.536 6.746-6.536 6.746s1.592-1.307 1.901-2.437Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Fire;
