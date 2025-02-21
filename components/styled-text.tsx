import { useTheme } from '@react-navigation/native';
import { Text,  TextStyle, TextProps } from 'react-native';

interface StyledTextProps extends TextProps {
    style?: TextStyle | TextStyle[];
    children: React.ReactNode;
  }

const StyledText = ({ style, children, ...props }: StyledTextProps) => {
  const { colors } = useTheme();

  return <Text style={[style, { color: colors.text }]} {...props}>{children}</Text>;
};

export default StyledText;
