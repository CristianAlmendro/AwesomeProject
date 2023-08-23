import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '../Types';

const GenerationIcon = ({color, width, height, ...props}: IconProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <G fill={color}>
      <Path d="M22.5 4.643a2.143 2.143 0 1 1-4.286 0 2.143 2.143 0 0 1 4.286 0ZM4.643 8.214a2.143 2.143 0 1 0 0-4.285 2.143 2.143 0 0 0 0 4.285ZM11.786 8.214a2.143 2.143 0 1 0 0-4.285 2.143 2.143 0 0 0 0 4.285ZM4.643 15.357a2.143 2.143 0 1 0 0-4.285 2.143 2.143 0 0 0 0 4.285ZM13.929 13.214a2.143 2.143 0 1 1-4.286 0 2.143 2.143 0 0 1 4.286 0ZM18.929 15.357a2.143 2.143 0 1 0 0-4.285 2.143 2.143 0 0 0 0 4.285ZM6.786 20.357a2.143 2.143 0 1 1-4.286 0 2.143 2.143 0 0 1 4.286 0ZM11.786 22.5a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286ZM21.071 20.357a2.143 2.143 0 1 1-4.285 0 2.143 2.143 0 0 1 4.285 0Z" />
    </G>
  </Svg>
);
export default GenerationIcon;
