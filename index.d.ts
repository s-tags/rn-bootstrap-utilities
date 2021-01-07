// Borders

interface BorderAttributes {
	borderWidth: any;
	borderColor: any;
}

interface RoundedAttributes {
	borderRadius: any;
	borderTopLeftRadius: any;
	borderTopRightRadius: any;
	borderBottomRightRadius: any;
	borderBottomLeftRadius: any;
}

export const border: BorderAttributes;
export const borderTop: BorderAttributes;
export const borderRight: BorderAttributes;
export const borderBottom: BorderAttributes;
export const borderLeft: BorderAttributes;
export const border0: BorderAttributes;
export const borderTop0: BorderAttributes;
export const borderRight0: BorderAttributes;
export const borderBotton0: BorderAttributes;
export const borderLeft0: BorderAttributes;
export const borderPrimary: BorderAttributes;
export const borderSecondary: BorderAttributes;
export const borderSuccess: BorderAttributes;
export const borderDanger: BorderAttributes;
export const borderWarning: BorderAttributes;
export const borderInfo: BorderAttributes;
export const borderLight: BorderAttributes;
export const borderDark: BorderAttributes;
export const borderWhite: BorderAttributes;
export const rounded: Partial<RoundedAttributes>;
export const roundedTop: Partial<RoundedAttributes>;
export const roundedRight: Partial<RoundedAttributes>;
export const roundedBottom: Partial<RoundedAttributes>;
export const roundedLeft: Partial<RoundedAttributes>;
export const roundedCircle: Partial<RoundedAttributes>;
export const rounded0: Partial<RoundedAttributes>;
export const roundedSm: Partial<RoundedAttributes>;
export const roundedLg: Partial<RoundedAttributes>;

// colors
interface TextAttributes {
	color: any;
}

interface BackgroundColorAttributes {
	backgroundColor: any;
}

export const textPrimary: TextAttributes;
export const textSecondary: TextAttributes;
export const textSuccess: TextAttributes;
export const textDanger: TextAttributes;
export const textWarning: TextAttributes;
export const textInfo: TextAttributes;
export const textLight: TextAttributes;
export const textDark: TextAttributes;
export const textBody: TextAttributes;
export const textMuted: TextAttributes;
export const textWhite: TextAttributes;
export const textBlack50: TextAttributes;
export const textWhite50: TextAttributes;
export const bgPrimary: BackgroundColorAttributes;
export const bgSecondary: BackgroundColorAttributes;
export const bgSuccess: BackgroundColorAttributes;
export const bgDanger: BackgroundColorAttributes;
export const bgWarning: BackgroundColorAttributes;
export const bgInfo: BackgroundColorAttributes;
export const bgLight: BackgroundColorAttributes;
export const bgDark: BackgroundColorAttributes;
export const bgWhite: BackgroundColorAttributes;
export const bgTransparent: BackgroundColorAttributes;

// display
export interface dFlex {
	display: any;
}
export interface dNone {
	display: any;
}

// flex
interface FlexDirectionAttributes {
	flexDirection: any;
}

interface JustifyContentAttributes {
	justifyContent: any;
}

interface AlignItemsAttributes {
	alignItems: any;
}

interface AlignSelfAttributes {
	alignSelf: any;
}

interface AlignContentAttributes {
	alignContent: any;
}

interface FlexGrowAndShrinkAttributes {
	flexGrow: any;
	flexShrink: any;
}

interface FlexWrapAttributes {
	flexWrap: any;
}

export const flexRow: FlexDirectionAttributes;
export const flexRowReverse: FlexDirectionAttributes;
export const flexColumn: FlexDirectionAttributes;
export const flexColumnReverse: FlexDirectionAttributes;
export const justifyContentStart: JustifyContentAttributes;
export const justifyContentEnd: JustifyContentAttributes;
export const justifyContentCenter: JustifyContentAttributes;
export const justifyContentBetween: JustifyContentAttributes;
export const justifyContentAround: JustifyContentAttributes;
export const alignItemsStart: AlignItemsAttributes;
export const alignItemsEnd: AlignItemsAttributes;
export const alignItemsCenter: AlignItemsAttributes;
export const alignItemsBaseline: AlignItemsAttributes;
export const alignItemsStretch: AlignItemsAttributes;
export const alignSelfStart: AlignSelfAttributes;
export const alignSelfEnd: AlignSelfAttributes;
export const alignSelfCenter: AlignSelfAttributes;
export const alignSelfBaseline: AlignSelfAttributes;
export const alignSelfStretch: AlignSelfAttributes;
export interface flexFill {
	flexGrow: any;
	flexShrink: any;
	flexBasis: any;
}
export const flexGrow1: Partial<FlexGrowAndShrinkAttributes>;
export const flexGrow0: Partial<FlexGrowAndShrinkAttributes>;
export const flexShrink1: Partial<FlexGrowAndShrinkAttributes>;
export const flexShrink0: Partial<FlexGrowAndShrinkAttributes>;
export const flexNowrap: Partial<FlexWrapAttributes>;
export const flexWrap: Partial<FlexWrapAttributes>;
export const flexWrapReverse: Partial<FlexWrapAttributes>;
export const alignContentStart: AlignContentAttributes;
export const alignContentEnd: AlignContentAttributes;
export const alignContentCenter: AlignContentAttributes;
export const alignContentBetween: AlignContentAttributes;
export const alignContentAround: AlignContentAttributes;
export const alignContentStretch: AlignContentAttributes;

// position

export interface positionAbsolute {
	position: any;
}

export interface positionRelative {
	position: any;
}

interface SpacingAttributes {
	margin: any;
	marginTop: any;
	marginRight: any;
	marginBottom: any;
	marginLeft: any;
	marginVertical: any;
	marginHorizontal: any;
	padding: any;
	paddingTop: any;
	paddingRight: any;
	paddingBottom: any;
	paddingLeft: any;
	paddingVertical: any;
	paddingHorizontal: any;
}

// spacing
export const m1: Partial<SpacingAttributes>;
export const m2: Partial<SpacingAttributes>;
export const m3: Partial<SpacingAttributes>;
export const m4: Partial<SpacingAttributes>;
export const m5: Partial<SpacingAttributes>;
export const mt1: Partial<SpacingAttributes>;
export const mt2: Partial<SpacingAttributes>;
export const mt3: Partial<SpacingAttributes>;
export const mt4: Partial<SpacingAttributes>;
export const mt5: Partial<SpacingAttributes>;
export const mr1: Partial<SpacingAttributes>;
export const mr2: Partial<SpacingAttributes>;
export const mr3: Partial<SpacingAttributes>;
export const mr4: Partial<SpacingAttributes>;
export const mr5: Partial<SpacingAttributes>;
export const mb1: Partial<SpacingAttributes>;
export const mb2: Partial<SpacingAttributes>;
export const mb3: Partial<SpacingAttributes>;
export const mb4: Partial<SpacingAttributes>;
export const mb5: Partial<SpacingAttributes>;
export const ml1: Partial<SpacingAttributes>;
export const ml2: Partial<SpacingAttributes>;
export const ml3: Partial<SpacingAttributes>;
export const ml4: Partial<SpacingAttributes>;
export const ml5: Partial<SpacingAttributes>;
export const my1: Partial<SpacingAttributes>;
export const my2: Partial<SpacingAttributes>;
export const my3: Partial<SpacingAttributes>;
export const my4: Partial<SpacingAttributes>;
export const my5: Partial<SpacingAttributes>;
export const mx1: Partial<SpacingAttributes>;
export const mx2: Partial<SpacingAttributes>;
export const mx3: Partial<SpacingAttributes>;
export const mx4: Partial<SpacingAttributes>;
export const mx5: Partial<SpacingAttributes>;
export const mn1: Partial<SpacingAttributes>;
export const mn2: Partial<SpacingAttributes>;
export const mn3: Partial<SpacingAttributes>;
export const mn4: Partial<SpacingAttributes>;
export const mn5: Partial<SpacingAttributes>;
export const mtn1: Partial<SpacingAttributes>;
export const mtn2: Partial<SpacingAttributes>;
export const mtn3: Partial<SpacingAttributes>;
export const mtn4: Partial<SpacingAttributes>;
export const mtn5: Partial<SpacingAttributes>;
export const mrn1: Partial<SpacingAttributes>;
export const mrn2: Partial<SpacingAttributes>;
export const mrn3: Partial<SpacingAttributes>;
export const mrn4: Partial<SpacingAttributes>;
export const mrn5: Partial<SpacingAttributes>;
export const mbn1: Partial<SpacingAttributes>;
export const mbn2: Partial<SpacingAttributes>;
export const mbn3: Partial<SpacingAttributes>;
export const mbn4: Partial<SpacingAttributes>;
export const mbn5: Partial<SpacingAttributes>;
export const mln1: Partial<SpacingAttributes>;
export const mln2: Partial<SpacingAttributes>;
export const mln3: Partial<SpacingAttributes>;
export const mln4: Partial<SpacingAttributes>;
export const mln5: Partial<SpacingAttributes>;
export const p1: Partial<SpacingAttributes>;
export const p2: Partial<SpacingAttributes>;
export const p3: Partial<SpacingAttributes>;
export const p4: Partial<SpacingAttributes>;
export const p5: Partial<SpacingAttributes>;
export const pt1: Partial<SpacingAttributes>;
export const pt2: Partial<SpacingAttributes>;
export const pt3: Partial<SpacingAttributes>;
export const pt4: Partial<SpacingAttributes>;
export const pt5: Partial<SpacingAttributes>;
export const pr1: Partial<SpacingAttributes>;
export const pr2: Partial<SpacingAttributes>;
export const pr3: Partial<SpacingAttributes>;
export const pr4: Partial<SpacingAttributes>;
export const pr5: Partial<SpacingAttributes>;
export const pb1: Partial<SpacingAttributes>;
export const pb2: Partial<SpacingAttributes>;
export const pb3: Partial<SpacingAttributes>;
export const pb4: Partial<SpacingAttributes>;
export const pb5: Partial<SpacingAttributes>;
export const pl1: Partial<SpacingAttributes>;
export const pl2: Partial<SpacingAttributes>;
export const pl3: Partial<SpacingAttributes>;
export const pl4: Partial<SpacingAttributes>;
export const pl5: Partial<SpacingAttributes>;
export const py1: Partial<SpacingAttributes>;
export const py2: Partial<SpacingAttributes>;
export const py3: Partial<SpacingAttributes>;
export const py4: Partial<SpacingAttributes>;
export const py5: Partial<SpacingAttributes>;
export const px1: Partial<SpacingAttributes>;
export const px2: Partial<SpacingAttributes>;
export const px3: Partial<SpacingAttributes>;
export const px4: Partial<SpacingAttributes>;
export const px5: Partial<SpacingAttributes>;

// text

interface TextAlignAttribute {
	textAlign: any;
}

interface TextTransformAttribute {
	textTransform: any;
}

interface FontWeightAttribute {
	fontWeight: any;
}

export const textLeft: TextAlignAttribute;
export const textRight: TextAlignAttribute;
export const textCenter: TextAlignAttribute;
export const textJustify: TextAlignAttribute;
export const textLowercase: TextTransformAttribute;
export const textUppercase: TextTransformAttribute;
export const textCapitalize: TextTransformAttribute;
export const fontWeightBold: FontWeightAttribute;
export const fontWeightBolder: FontWeightAttribute;
export const fontWeightLight: FontWeightAttribute;
export const fontWeightLighter: FontWeightAttribute;
export const fontItalic: FontWeightAttribute;
export interface textDecorationNone {
	fontStyle: any;
}

export interface visible {
	opacity: any;
}

export interface invisible {
	opacity: any;
}
