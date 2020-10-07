import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Box from './Box';
import Text from './Text';

const styles = StyleSheet.create({
  star: {
    color: '#FF8C00',
  },
});

interface Props {
  ratings: number;
  reviews: number;
}

const StarRating: FC<Props> = ({ ratings, reviews }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let name = 'ios-star';
    if (i > ratings) {
      name = 'ios-star-outline';
    }
    stars.push(<Ionicons name={name} size={15} style={styles.star} key={i} />);
  }
  return (
    <Box row align="center">
      {stars}
      <Text size={12} ml={5} color="#444">
        ({reviews})
      </Text>
    </Box>
  );
};

export default StarRating;
