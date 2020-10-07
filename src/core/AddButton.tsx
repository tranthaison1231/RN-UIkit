import * as React from 'react';
import { GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from './Box';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
}

const AddButton: React.FC<Props> = ({ onPress }) => {
  const theme = useTheme();
  return (
    <Box
      align="center"
      mx={30}
      top={-20}
      as={TouchableOpacity}
      // @ts-ignore
      onPress={onPress}
      shadow={5}
    >
      <Box
        bg={theme.colors.primary}
        align="center"
        justify="center"
        w={60}
        h={60}
        borderRadius={100}
        absolute
      >
        <Icon name="plus" size={30} color="#fff" />
      </Box>
    </Box>
  );
};

export default AddButton;
