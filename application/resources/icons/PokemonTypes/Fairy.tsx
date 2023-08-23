import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {IconProps} from '../../Types';

const Fairy = ({color, width, height, ...props}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 25 25" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={color}
        fillRule="evenodd"
        d="m5.016 19.824 4.01-1.163 3.464 6.333a.012.012 0 0 0 .02 0l3.464-6.333 4.01 1.163a.012.012 0 0 0 .015-.015l-1.163-3.93 6.158-3.369a.012.012 0 0 0 0-.02l-6.21-3.396L20 4.992a.012.012 0 0 0-.015-.015l-4.104 1.19-3.37-6.16a.012.012 0 0 0-.02 0l-3.37 6.16-4.104-1.19a.012.012 0 0 0-.015.015l1.214 4.102L.006 12.49a.012.012 0 0 0 0 .02l6.158 3.368-1.163 3.931a.012.012 0 0 0 .015.015Zm3.112-7.28 2.84 1.553 1.554 2.84a.012.012 0 0 0 .021 0l1.554-2.84 2.84-1.554a.012.012 0 0 0 0-.02l-2.84-1.554-1.554-2.841a.012.012 0 0 0-.02 0l-1.554 2.84-2.841 1.554a.012.012 0 0 0 0 .021Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h25v25H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Fairy;
