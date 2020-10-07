/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Animated, Easing, StyleSheet, View, ViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  styleBorder,
  StyleBorderProps,
  styles,
  styleSize,
  StyleSizeProps,
  styleSpace,
  StyleSpaceProps,
} from '../helpers';

interface SkeletonProps
  extends StyleSpaceProps,
    StyleSizeProps,
    StyleBorderProps,
    ViewProps {
  backgroundColor?: string;
  highlightColor?: string;
  speed?: number;
  circle?: boolean;
}

export default function Skeleton({
  backgroundColor,
  speed,
  highlightColor,
  circle,
  style,
  ...props
}: SkeletonProps): JSX.Element {
  const animatedValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: speed,
        easing: Easing.ease,
        useNativeDriver: true,
      })
    ).start();
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-350, 350],
  });

  const blockStyles = [
    [...styleSpace(props)],
    [...styleSize(props)],
    [...styleBorder(props)],
    [{ backgroundColor, overflow: 'hidden' }],
    circle && styles.circle,
    style,
  ];
  return (
    // @ts-ignore
    <View style={blockStyles}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <LinearGradient
          colors={
            [backgroundColor, highlightColor, backgroundColor] as string[]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1 }}
        />
      </Animated.View>
    </View>
  );
}

Skeleton.defaultProps = {
  backgroundColor: '#F3F3F3',
  highlightColor: '#ECECEB',
  speed: 1200,
};
