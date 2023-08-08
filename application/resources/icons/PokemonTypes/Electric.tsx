import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Electric = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}>
    <Path
      fill="#17171B"
      fillRule="evenodd"
      d="M7.425.029A.022.022 0 0 1 7.445 0h8.81c.01 0 .019.006.021.015l4.047 13.074a.022.022 0 0 1-.02.028h-5.866a.01.01 0 0 0-.01.014l3.364 11.841c.006.023-.024.038-.038.02L4.68 7.606a.022.022 0 0 1 .018-.035h5.323a.01.01 0 0 0 .01-.014L7.425.028Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Electric;
