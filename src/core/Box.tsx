import * as React from 'react';
import { View, ViewProps } from 'react-native';
import {
  styleFlexBox,
  StyleFlexBoxProps,
  styles,
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

interface BoxProps
  extends StyleSpaceProps,
    StyleFlexBoxProps,
    StyleSizeProps,
    StyleBorderProps,
    StyleShadowProps,
    StylePositionProps,
    ViewProps {
  circle?: boolean;
  bg?: string;
  // @ts-ignore
  as?: any;
}

const Box: React.FC<BoxProps> = ({ circle, style, bg, as, ...props }) => {
  const blockStyles = [
    [...styleSpace(props)],
    [...styleFlexBox(props)],
    [...stylePosition(props)],
    [...styleShadow(props)],
    [...styleSize(props)],
    [...styleBorder(props)],
    bg && { backgroundColor: bg },
    circle && styles.circle,
    style,
  ];
  return React.createElement(
    as,
    {
      style: blockStyles,
      ...props,
    },
    props.children
  );
};

Box.defaultProps = {
  as: View,
};

export default Box;
