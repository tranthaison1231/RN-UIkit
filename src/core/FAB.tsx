import * as React from 'react';
import { FAB as PaperFAB } from 'react-native-paper';
import {
  StyleSpaceProps,
  styleSpace,
  styleSize,
  StyleSizeProps,
  styleBorder,
  StyleBorderProps,
  StyleShadowProps,
  styleShadow,
  stylePosition,
  StylePositionProps,
} from '../helpers';

export type FABProps = React.ComponentProps<typeof PaperFAB> &
  StyleSpaceProps &
  StyleSizeProps &
  StyleBorderProps &
  StyleShadowProps &
  StylePositionProps & {
    bg?: string;
  };

const FAB: React.FC<FABProps> = ({ bg, ...props }) => {
  const style = [
    [...styleSpace(props)],
    [...styleBorder(props)],
    [...styleSize(props)],
    [...stylePosition(props)],
    [...styleShadow(props)],
    bg && { backgroundColor: bg },
    props.style,
  ];
  // @ts-ignore
  const contentStyle = [[styleSize(props), props.contentStyle]];
  return (
    // @ts-ignore
    <PaperFAB {...props} style={style} contentStyle={contentStyle}>
      {props.children}
    </PaperFAB>
  );
};

export default FAB;
