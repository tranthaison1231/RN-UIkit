import Box from './Box';
import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  size?: number;
  color?: string;
}

const Humberger: React.FC<Props> = ({ size, color }) => {
  return (
    <Box
      w={size}
      bg="#fff"
      h={size}
      borderRadius={5}
      align="center"
      as={TouchableOpacity}
      shadow={2}
      justify="center"
    >
      <Icon name="format-align-justify" color={color} size={30} />
    </Box>
  );
};

Humberger.defaultProps = {
  size: 30,
  color: 'blue',
};

export default Humberger;
