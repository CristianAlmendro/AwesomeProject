import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const Normal = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#17171B"
        fillRule="evenodd"
        d="M25 12.5C25 19.404 19.404 25 12.5 25S0 19.404 0 12.5 5.596 0 12.5 0 25 5.596 25 12.5Zm-5.357 0a7.143 7.143 0 1 1-14.286 0 7.143 7.143 0 0 1 14.286 0Z"
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
export default Normal;
