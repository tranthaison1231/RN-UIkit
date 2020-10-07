// import React, { FC } from 'react';
// import { Animated } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { useTheme } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Box from './Box';

// const SpeedDial: FC = () => {
//   const theme = useTheme();
//   const buttonSize = new Animated.Value(1);
//   const mode = new Animated.Value(0);

//   const onPress = () => {
//     Animated.sequence([
//       // @ts-ignore
//       Animated.timing(buttonSize, {
//         toValue: 0.95,
//         duration: 200,
//       }),
//       // @ts-ignore
//       Animated.timing(buttonSize, {
//         toValue: 1,
//       }),
//       // @ts-ignore
//       Animated.timing(mode, {
//         // @ts-ignore
//         toValue: mode._value === 0 ? 1 : 0,
//       }),
//     ]).start();
//   };

//   const thermometerX = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-24, -100],
//   });

//   const thermometerY = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-50, -100],
//   });

//   const timeX = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-24, -24],
//   });

//   const timeY = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-50, -150],
//   });

//   const pulseX = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-24, 50],
//   });

//   const pulseY = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-50, -100],
//   });

//   const rotation = mode.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '45deg'],
//   });

//   return (
//     // @ts-ignore
//     <Box as={TouchableOpacity} align="center" top={-20} onPress={onPress}>
//       <Box as={Animated.View} absolute left={thermometerX} top={thermometerY}>
//         <Box
//           absolute
//           align="center"
//           justify="center"
//           w={48}
//           h={48}
//           borderRadius={24}
//           bg={theme.colors.primary}
//         >
//           <Icon name="plus" size={30} color="#fff" />
//         </Box>
//       </Box>
//       <Box as={Animated.View} absolute left={timeX} top={timeY}>
//         <Box
//           absolute
//           align="center"
//           justify="center"
//           w={48}
//           h={48}
//           borderRadius={24}
//           bg={theme.colors.primary}
//         >
//           <Icon name="plus" size={30} color="#fff" />
//         </Box>
//       </Box>
//       <Box as={Animated.View} absolute left={pulseX} top={pulseY}>
//         <Box
//           absolute
//           align="center"
//           justify="center"
//           w={48}
//           h={48}
//           borderRadius={24}
//           bg={theme.colors.primary}
//         >
//           <Icon name="plus" size={30} color="#fff" />
//         </Box>
//       </Box>
//       <Box
//         as={Animated.View}
//         bg={theme.colors.primary}
//         align="center"
//         justify="center"
//         w={60}
//         h={60}
//         borderRadius={100}
//         // @ts-ignore
//         style={{
//           transform: [{ scale: buttonSize }],
//         }}
//       >
//         <Box>
//           <Animated.View style={{ transform: [{ rotate: rotation }] }}>
//             <Icon name="plus" size={30} color="#fff" />
//           </Animated.View>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default SpeedDial;
