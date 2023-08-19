import * as React from 'react';
import Svg, {Circle, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IconProps} from '../Types';

const CircleBackground = ({...props}: IconProps) => (
  <Svg width={125} height={125} fill="none" {...props}>
    <Circle cx={62.5} cy={62.5} r={60} stroke="url(#a)" strokeWidth={5} />
    <Defs>
      <LinearGradient
        id="a"
        x1={62}
        x2={14}
        y1={125}
        y2={24}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.35} />
        <Stop offset={0.422} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default CircleBackground;
