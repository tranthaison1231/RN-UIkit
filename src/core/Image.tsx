import React, { FC } from 'react';
import { Image as NativeImage, ImageProps } from 'react-native';
import {
  styleFlexBox,
  styleSpace,
  styleSize,
  styleShadow,
  StyleSpaceProps,
  StyleFlexBoxProps,
  StyleShadowProps,
  StyleSizeProps,
} from '../helpers';

interface Props
  extends ImageProps,
    StyleSpaceProps,
    StyleFlexBoxProps,
    StyleSizeProps,
    StyleShadowProps {}

const Image: FC<Props> = ({ style, ...props }) => {
  const blockStyles = [
    [...styleSize(props)],
    [...styleSpace(props)],
    [...styleFlexBox(props)],
    [...styleShadow(props)],
    style,
  ];
  return React.createElement(NativeImage, {
    style: blockStyles,
    ...props,
  });
};

export default Image;
