import * as React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import {
  StyleSpaceProps,
  styleSpace,
  styleSize,
  StyleSizeProps,
  styleBorder,
  StyleBorderProps,
  StyleShadowProps,
  styleShadow,
} from '../helpers';

export type ButtonProps = React.ComponentProps<typeof PaperButton> &
  StyleSpaceProps &
  StyleSizeProps &
  StyleBorderProps &
  StyleShadowProps;

const Button: React.FC<ButtonProps> = props => {
  const style = [
    [...styleSpace(props)],
    [...styleBorder(props)],
    [...styleShadow(props)],
    [...styleShadow(props)],
    props.style,
  ];
  const contentStyle = [[styleSize(props), props.contentStyle]];
  return (
    // @ts-ignore
    <PaperButton {...props} style={style} contentStyle={contentStyle}>
      {props.children}
    </PaperButton>
  );
};

export default Button;
