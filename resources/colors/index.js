import { StyleSheet } from 'react-native';

import {
	primary,
	secondary,
	success,
	warning,
	info,
	dark,
	light,
	white,
	danger,
	body,
	muted,
	black50,
	white50,
	transparent
} from '../../utils/colors';

const styles = StyleSheet.create({
	textPrimary: { color: primary },
	textSecondary: { color: secondary },
	textSuccess: { color: success },
	textDanger: { color: danger },
	textWarning: { color: warning },
	textInfo: { color: info },
	textLight: { color: light },
	textDark: { color: dark },
	textBody: { color: body },
	textMuted: { color: muted },
	textWhite: { color: white },
	textBlack50: { color: black50 },
	textWhite50: { color: white50 },
	bgPrimary: { backgroundColor: primary },
	bgSecondary: { backgroundColor: secondary },
	bgSuccess: { backgroundColor: success },
	bgDanger: { backgroundColor: danger },
	bgWarning: { backgroundColor: warning },
	bgInfo: { backgroundColor: info },
	bgLight: { backgroundColor: light },
	bgDark: { backgroundColor: dark },
	bgWhite: { backgroundColor: white },
	bgTransparent: { backgroundColor: transparent }
});

export const {
	textPrimary,
	textSecondary,
	textSuccess,
	textDanger,
	textWarning,
	textInfo,
	textLight,
	textDark,
	textBody,
	textMuted,
	textWhite,
	textBlack50,
	textWhite50,
	bgPrimary,
	bgSecondary,
	bgSuccess,
	bgDanger,
	bgWarning,
	bgInfo,
	bgLight,
	bgDark,
	bgWhite,
	bgTransparent
} = styles;
