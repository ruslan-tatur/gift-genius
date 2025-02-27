import { TextStyle, ViewStyle } from "react-native";

export interface ThemeOptions {
    backgroundColor: string;
    textColor: string;
    secondaryTextColor: string;
    lightButton: ViewStyle,
    darkButton: ViewStyle,
    input: TextStyle & {
        placeholderTextColor: string;
    },
    link: {
        color: string;
    }
}

export interface Theme {
    dark: ThemeOptions;
    light: ThemeOptions;
}

export const themes: Theme = {
    "dark" : {
        backgroundColor: '#161616',
        textColor: '#ffffff',
        secondaryTextColor: '#bebebe',
        lightButton: {
            backgroundColor: '#313131',
            padding: 15,
            borderRadius: 10,
        },
        darkButton: {
            backgroundColor: '#000000',
            padding: 15,
            borderRadius: 10,
        },
        input: {
            color: '#ffffff',
            placeholderTextColor: '#94a3b8',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#313131',
            borderRadius: 8,
        },
        link: {
            color: '#bebebe',
        }
    },
    "light": {
        backgroundColor: '#161616',
        textColor: '#ffffff',
        secondaryTextColor: '#bebebe',

        lightButton: {
            backgroundColor: '#313131',
        },

        darkButton: {
            backgroundColor: '#ffffff',
        },

        input: {
            color: '#ffffff',
            placeholderTextColor: '#94a3b8',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#313131',
            borderRadius: 8,
        },

        link: {
            color: '#bebebe',
        }
    }
}