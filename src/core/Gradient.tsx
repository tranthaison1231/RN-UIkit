import * as React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {
  styleFlexBox,
  StyleFlexBoxProps,
  styleSpace,
  StyleSpaceProps,
  styleShadow,
  styleSize,
  styleBorder,
  stylePosition,
  StylePositionProps,
  StyleSizeProps,
  StyleShadowProps,
  StyleBorderProps,
} from '../helpers';

interface GradientProps
  extends StyleSpaceProps,
    StyleFlexBoxProps,
    StyleSizeProps,
    StyleBorderProps,
    StyleShadowProps,
    StylePositionProps,
    LinearGradientProps {}

const Gradient: React.FC<GradientProps> = ({ style, ...props }) => {
  const blockStyles = [
    [...styleSpace(props)],
    [...styleFlexBox(props)],
    [...stylePosition(props)],
    [...styleShadow(props)],
    [...styleSize(props)],
    [...styleBorder(props)],
    style,
  ];
  return React.createElement(
    LinearGradient,
    {
      style: blockStyles,
      ...props,
    },
    props.children
  );
};

export default Gradient;
