import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	/** direction */
	flexRow: { flexDirection: 'row' },
	flexRowReverse: { flexDirection: 'row-reverse' },
	flexColumn: { flexDirection: 'column' },
	flexColumnReverse: { flexDirection: 'column-reverse' },
	/** justify content */
	justifyContentStart: { justifyContent: 'flex-start' },
	justifyContentEnd: { justifyContent: 'flex-end' },
	justifyContentCenter: { justifyContent: 'center' },
	justifyContentBetween: { justifyContent: 'space-between' },
	justifyContentAround: { justifyContent: 'space-around' },
	/** align items */
	alignItemsStart: { alignItems: 'flex-start' },
	alignItemsEnd: { alignItems: 'flex-end' },
	alignItemsCenter: { alignItems: 'center' },
	alignItemsBaseline: { alignItems: 'baseline' },
	alignItemsStretch: { alignItems: 'stretch' },
	/** align self */
	alignSelfStart: { alignSelf: 'flex-start' },
	alignSelfEnd: { alignSelf: 'flex-end' },
	alignSelfCenter: { alignSelf: 'center' },
	alignSelfBaseline: { alignSelf: 'baseline' },
	alignSelfStretch: { alignSelf: 'stretch' },
	/** fill */
	flexFill: {
		flexGrow: 1,
		flexShrink: 1,
		flexBasis: 'auto'
	},
	/** grow and shrink */
	flexGrow1: { flexGrow: 1 },
	flexGrow0: { flexGrow: 0 },
	flexShrink1: { flexShrink: 1 },
	flexShrink0: { flexShrink: 0 },
	/** wrap */
	flexNowrap: { flexWrap: 'nowrap' },
	flexWrap: { flexWrap: 'wrap' },
	flexWrapReverse: { flexWrap: 'wrap-reverse' },
	/** align content */
	alignContentStart: { alignContent: 'flex-start' },
	alignContentEnd: { alignContent: 'flex-end' },
	alignContentCenter: { alignContent: 'center' },
	alignContentBetween: { alignContent: 'space-between' },
	alignContentAround: { alignContent: 'space-around' },
	alignContentStretch: { alignContent: 'stretch' }
});

export const {
	flexRow,
	flexRowReverse,
	flexColumn,
	flexColumnReverse,
	justifyContentStart,
	justifyContentEnd,
	justifyContentCenter,
	justifyContentBetween,
	justifyContentAround,
	alignItemsStart,
	alignItemsEnd,
	alignItemsCenter,
	alignItemsBaseline,
	alignItemsStretch,
	alignSelfStart,
	alignSelfEnd,
	alignSelfCenter,
	alignSelfBaseline,
	alignSelfStretch,
	flexFill,
	flexGrow1,
	flexGrow0,
	flexShrink1,
	flexShrink0,
	flexNowrap,
	flexWrap,
	flexWrapReverse,
	alignContentStart,
	alignContentEnd,
	alignContentCenter,
	alignContentBetween,
	alignContentAround,
	alignContentStretch
} = styles;
