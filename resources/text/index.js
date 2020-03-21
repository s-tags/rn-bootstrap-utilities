import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	/** text alignment */
	textLeft: { textAlign: 'left' },
	textRight: { textAlign: 'right' },
	textCenter: { textAlign: 'center' },
	textJustify: { textAlign: 'justify' },
	/** text transform */
	textLowercase: { textTransform: 'lowercase' },
	textUppercase: { textTransform: 'uppercase' },
	textCapitalize: { textTransform: 'capitalize' },
	/** font weight and italics */
	fontWeightBold: { fontWeight: '700' },
	fontWeightBolder: { fontWeight: 'bold' },
	fontWeightLight: { fontWeight: '300' },
	fontWeightLighter: { fontWeight: '100' },
	fontItalic: { fontStyle: 'italic' },

	/** text decoration */
	textDecorationNone: { textDecorationLine: 'none' }
});

export const {
	textLeft,
	textRight,
	textCenter,
	textJustify,
	textLowercase,
	textUppercase,
	textCapitalize,
	fontWeightBold,
	fontWeightBolder,
	fontWeightLight,
	fontWeightLighter,
	fontItalic,
	textDecorationNone
} = styles;
