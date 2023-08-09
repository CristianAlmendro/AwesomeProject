import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Rock = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}>
    <Path
      fill="#17171B"
      fillRule="evenodd"
      d="M19.303 11.973a.009.009 0 0 1-.002-.006l1.592-9.281c0-.004.004-.008.008-.008h.504c.004 0 .008.003.009.007L25 14.038a.009.009 0 0 1-.003.01l-2.644 2.064a.009.009 0 0 1-.013-.002l-3.037-4.136ZM0 18.127c0 .004.002.007.006.009l5.45 1.782a.01.01 0 0 0 .008-.002l12.182-8.41a.009.009 0 0 0 .004-.006l1.306-8.766a.009.009 0 0 0-.008-.01H8.158a.009.009 0 0 0-.008.003l-8.148 9.83a.009.009 0 0 0-.002.006v5.564Zm7.727 2.245 5.954 1.95.008-.001 7.09-5.085a.009.009 0 0 0 .001-.012l-2.657-3.955a.009.009 0 0 0-.012-.002L7.727 20.37Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Rock;