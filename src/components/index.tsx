import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { styles } from './styles';

const ProgressBar: React.FC<{ text: string; progress: number }> = ({
  text,
  progress,
}) => {
  const width = useSharedValue(0);
  useEffect(() => {
    width.value = withSpring(progress);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value * 100}%`,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.innerContainer, animatedStyle]} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ProgressBar;
