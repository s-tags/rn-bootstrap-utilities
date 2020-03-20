import { StyleSheet } from 'react-native';
import {
	gray,
	primary,
	secondary,
	success,
	warning,
	info,
	dark,
	light,
	white,
	danger
} from '../../utils/colors';
import { rem } from '../../utils/constants';

let defaultBorder = {
	borderWidth: 1,
	borderColor: gray
};

const styles = StyleSheet.create({
	/** additive */
	border: defaultBorder,
	borderTop: {
		borderColor: gray,
		borderTopWidth: 1
	},
	borderRight: {
		borderColor: gray,
		borderRightWidth: 1
	},
	borderBottom: {
		borderColor: gray,
		borderBottomWidth: 1
	},
	borderLeft: {
		borderColor: gray,
		borderLeftWidth: 1
	},
	/** subtractive */
	border0: {
		borderWidth: 0
	},
	borderTop0: {
		...defaultBorder,
		borderTopWidth: 0
	},
	borderRight0: {
		...defaultBorder,
		borderRightWidth: 0
	},
	borderBotton0: {
		...defaultBorder,
		borderBottomWidth: 0
	},
	borderLeft0: {
		...defaultBorder,
		borderLeftWidth: 0
	},
	/** border colors */
	borderPrimary: { borderColor: primary },
	borderSecondary: { borderColor: secondary },
	borderSuccess: { borderColor: success },
	borderDanger: { borderColor: danger },
	borderWarning: { borderColor: warning },
	borderInfo: { borderColor: info },
	borderLight: { borderColor: light },
	borderDark: { borderColor: dark },
	borderWhite: { borderColor: white },
	/** border radius */
	rounded: {
		borderRadius: rem(0.4)
	},
	roundedTop: {
		borderTopLeftRadius: rem(0.4),
		borderTopRightRadius: rem(0.4)
	},
	roundedRight: {
		borderTopRightRadius: rem(0.4),
		borderBottomRightRadius: rem(0.4)
	},
	roundedBottom: {
		borderBottomRightRadius: rem(0.4),
		borderBottomLeftRadius: rem(0.4)
	},
	roundedLeft: {
		borderTopLeftRadius: rem(0.4),
		borderBottomLeftRadius: rem(0.4)
	},
	/** todo: find a way to mimic percentage based approach */
	roundedCircle: {
		borderRadius: 1000 // setting to a high posible unit for now.
	},
	rounded0: {
		borderRadius: 0
	},
	/** border radius sizing */
	roundedSm: {
		borderRadius: rem(0.2)
	},
	roundedLg: {
		borderRadius: rem(0.8)
	}
});

export const {
	border,
	borderTop,
	borderRight,
	borderBottom,
	borderLeft,
	border0,
	borderTop0,
	borderRight0,
	borderBotton0,
	borderLeft0,
	borderPrimary,
	borderSecondary,
	borderSuccess,
	borderDanger,
	borderWarning,
	borderInfo,
	borderLight,
	borderDark,
	borderWhite,
	rounded,
	roundedTop,
	roundedRight,
	roundedBottom,
	roundedLeft,
	roundedCircle,
	rounded0,
	roundedSm,
	roundedLg
} = styles;
