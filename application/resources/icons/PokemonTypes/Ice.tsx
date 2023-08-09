import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '../../Types';

const Ice = ({color, width, height, ...props}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 25 25" fill="none" {...props}>
    <G fill={color}>
      <Path d="m12.128 4.65-6.21-3.075.188 6.873 5.863 2.904.159-6.702ZM19.021 8.532l-.079-6.929-6.038 3.288.074 6.542 6.043-2.901ZM19.018 15.943 25 12.52l-5.985-3.148-5.983 3.143 5.986 3.427ZM11.968 12.521l-5.982 3.422L0 12.516l5.983-3.143 5.985 3.148ZM19.111 23.362l-6.209-3.075.159-6.701 5.863 2.903.187 6.873ZM6.054 16.496l.08 6.929 6.038-3.288-.075-6.542-6.043 2.901Z" />
    </G>
  </Svg>
);
export default Ice;
