import { useColorScheme } from 'react-native';
import { ThemeOptions, themes } from '@/styles/theme';
import { useMemo } from 'react';

export function useAppStyles(): ThemeOptions {
  const colorScheme = useColorScheme();
  
  return useMemo(() => {    
    return themes[colorScheme ?? 'light']
  }, [colorScheme]);
}
