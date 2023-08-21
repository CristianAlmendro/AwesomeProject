import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IconProps} from '../Types';

const PokeballEvolution = ({...props}: IconProps) => (
  <Svg width={100} height={100} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M50 0c25.73 0 46.956 19.148 50 43.871H75.597c-2.779-11.474-13.185-20-25.597-20s-22.818 8.526-25.597 20H0C3.044 19.148 24.27 0 50 0Z"
    />
    <Path
      fill="url(#b)"
      d="M75.597 56.129H100C96.956 80.852 75.73 100 50 100S3.044 80.852 0 56.129h24.403c2.779 11.474 13.185 20 25.597 20s22.818-8.526 25.597-20Z"
    />
    <Path
      fill="url(#c)"
      d="M50 66.452c9.154 0 16.575-7.366 16.575-16.452 0-9.086-7.42-16.452-16.575-16.452-9.154 0-16.575 7.366-16.575 16.452 0 9.086 7.42 16.452 16.575 16.452Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={50}
        x2={50}
        y1={50}
        y2={94.807}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F5F5F5" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={50}
        x2={50}
        y1={50}
        y2={94.807}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F5F5F5" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={50}
        x2={50}
        y1={50}
        y2={94.807}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F5F5F5" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default PokeballEvolution;
