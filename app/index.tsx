import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import StyledText from '@/components/styled-text';
import { useAppStyles } from '@/hooks/useAppStyles';
import { router } from 'expo-router';

export default function Index() {
  const appStyles = useAppStyles();

  const handleNavigation = () => {
    router.push('/filters');
  };

  return (
    <View style={[{ backgroundColor: appStyles.backgroundColor }, styles.container]}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('@/assets/images/gift-icon.png')}
          style={styles.logoImage}
        />
        <StyledText style={[{ color: appStyles.textColor }, styles.logo]}>Gift Guru</StyledText>
      </View>
      
      <TouchableOpacity 
        style={[appStyles.lightButton, styles.loginButton]}
        onPress={handleNavigation}
      >
        <StyledText style={styles.buttonText}>Continue with Google</StyledText>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[appStyles.darkButton, styles.loginButton]}
        onPress={handleNavigation}
      >
        <StyledText style={styles.buttonText}>Continue with Apple</StyledText>
      </TouchableOpacity>

      <StyledText style={[appStyles.link, styles.orText]}>or</StyledText>

      <TextInput 
        style={[appStyles.input, styles.input]}
        placeholder="Email"
        placeholderTextColor={appStyles.input.placeholderTextColor}
      />

      <TextInput 
        style={[appStyles.input, styles.input]}
        placeholder="Password"
        placeholderTextColor={appStyles.input.placeholderTextColor}
        secureTextEntry
      />

      <TouchableOpacity style={[appStyles.lightButton, styles.loginButton]}>
        <StyledText style={styles.buttonText}>Log In</StyledText>
      </TouchableOpacity>

      <TouchableOpacity style={[appStyles.darkButton, styles.loginButton]}>
        <StyledText style={[styles.buttonText]}>Sign Up</StyledText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPassword}>
        <StyledText style={[appStyles.link, styles.forgotPasswordText]}>Forgot Password?</StyledText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: 24,
    height: 32,
    marginRight: 8,
  },
  logo: {
    fontSize: 24,
    textAlign: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 15,
  },
  input: {
    padding: 15,
    marginBottom: 10,
  },
  loginButton: {
    marginBottom: 10,
  },
  forgotPassword: {
    marginTop: 40,
  },
  forgotPasswordText: {
    textAlign: 'center',
  },
});
