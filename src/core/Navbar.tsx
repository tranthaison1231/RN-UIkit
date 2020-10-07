// import React, { FC } from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Text from './Text';
// import Box from './Box';
// import { GestureResponderEvent } from 'react-native';

// interface Props {
//   left: JSX.Element;
//   right: JSX.Element[];
//   onLeftClick: (event: GestureResponderEvent) => void;
//   title: string;
// }

// const Navbar: FC<Props> = ({ left, onLeftClick, title, right }) => {
//   return (
//     <Box bg="#fff" shadow={4} h={55} justify="space-between" row align="center">
//       <TouchableOpacity onPress={onLeftClick}>{left}</TouchableOpacity>
//       <Text size={25}>{title}</Text>
//       <Box row>{right?.map(e => e)}</Box>
//     </Box>
//   );
// };

// Navbar.defaultProps = {
//   left: <Icon name="chevron-left" size={35} color="#222" />,
//   right: [],
// };

// export default Navbar;
