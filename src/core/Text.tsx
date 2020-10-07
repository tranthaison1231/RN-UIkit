import * as React from 'react';
import { Text as RnText, TextProps } from 'react-native';
import {
  styleFlexBox,
  StyleFlexBoxProps,
  styles,
  styleSpace,
  StyleSpaceProps,
} from '../helpers';

interface TextType extends StyleSpaceProps, StyleFlexBoxProps, TextProps {
  bg?: string;
  color?: string;
  bold?: boolean;
  size?: number;
  txtAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

const Text: React.FC<TextType> = ({
  color,
  style,
  bold,
  size,
  txtAlign,
  ...props
}) => {
  const blockStyles = [
    [...styleSpace(props)],
    [...styleFlexBox(props)],
    size && { fontSize: size },
    bold && styles.bold,
    txtAlign && { textAlign: txtAlign },
    color && { color: color },
    style,
  ];
  return (
    // @ts-ignore
    <RnText style={blockStyles} {...props}>
      {props.children}
    </RnText>
  );
};

export default Text;
