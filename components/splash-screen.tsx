import { useTheme } from '@react-navigation/native';
import { View, Image, Text, StyleSheet, useColorScheme } from 'react-native';
import StyledText from './styled-text';

const SplashScreen = () => {
  const colorScheme = useColorScheme();

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/loading-icon.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <StyledText style={styles.headerText}>Gift Guru</StyledText>
      <StyledText style={styles.text}>Find the perfect gift</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 274, 
    height: 274,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default SplashScreen; 