import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Dragon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}>
    <Path
      fill="#17171B"
      fillRule="evenodd"
      d="M13.713 12.445c.17-.103.313-.32.429-.56 1.526.623 2.598 2.097 2.598 3.815 0 2.283-1.892 4.133-4.226 4.133a4.269 4.269 0 0 1-2.551-.837 9.927 9.927 0 0 1-.58-.302c-.243-.135-.402-.223-.502-.209-.292.04-.207.309-.13.552.052.166.1.32.025.383-.078.067-.334-.177-.632-.46-.406-.388-.892-.851-1.12-.712-.182.11-.006.408.21.773l.015.028c.091.154.196.311.293.455.195.291.353.526.274.566-.095.048-.759-.4-1.318-1.021-.216-.24-.425-.5-.619-.742-.425-.529-.78-.97-.978-.917-.24.062-.058.556.208 1.03.124.222.27.448.397.644.197.305.346.536.292.564-.073.038-.717-.59-1.154-1.38-.26-.47-.478-.989-.654-1.41-.192-.455-.334-.795-.428-.829-.326-.119-.326.547-.195 1.506.017.126.042.257.073.39C4.71 22.012 8.607 25 13.218 25c5.64 0 10.213-4.472 10.213-9.989 0-5.25-4.142-9.555-9.405-9.958.007-.247.136-.737.136-.737s.929-2.248.978-2.729l.011-.103C15.21.965 15.317 0 14.487 0c-.444 0-.65.33-.886.707-.09.145-.185.297-.3.44-.823 1.028-2.208 2.312-2.993 2.997-1.66 1.446-3.289 2.635-4.239 3.328-.432.315-.723.528-.813.616-.68.663-3.118 5.06-3.118 5.06s-.789 1.412-.509 1.698c.28.286.956.22.956.22s9.08-2.083 9.892-2.247c.22-.044.374-.07.492-.09.322-.052.38-.062.744-.284ZM7.293 9.77c-.487.463-1.295 1.569-1.295 1.569s1.502.092 2.33-.694c.827-.787.637-2.127.637-2.127s-1.184.789-1.671 1.252Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Dragon;
