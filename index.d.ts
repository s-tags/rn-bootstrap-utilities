// Borders

interface BorderAttributes {
	borderWidth: number;
	borderColor: string;
}

interface RoundedAttributes {
	borderRadius: number;
	borderTopLeftRadius: number;
	borderTopRightRadius: number;
	borderBottomRightRadius: number;
	borderBottomLeftRadius: number;
}

export type border = BorderAttributes;
export type borderTop = BorderAttributes;
export type borderRight = BorderAttributes;
export type borderBottom = BorderAttributes;
export type borderLeft = BorderAttributes;
export type border0 = BorderAttributes;
export type borderTop0 = BorderAttributes;
export type borderRight0 = BorderAttributes;
export type borderBotton0 = BorderAttributes;
export type borderLeft0 = BorderAttributes;
export type borderPrimary = BorderAttributes;
export type borderSecondary = BorderAttributes;
export type borderSuccess = BorderAttributes;
export type borderDanger = BorderAttributes;
export type borderWarning = BorderAttributes;
export type borderInfo = BorderAttributes;
export type borderLight = BorderAttributes;
export type borderDark = BorderAttributes;
export type borderWhite = BorderAttributes;
export type rounded = Partial<RoundedAttributes>;
export type roundedTop = Partial<RoundedAttributes>;
export type roundedRight = Partial<RoundedAttributes>;
export type roundedBottom = Partial<RoundedAttributes>;
export type roundedLeft = Partial<RoundedAttributes>;
export type roundedCircle = Partial<RoundedAttributes>;
export type rounded0 = Partial<RoundedAttributes>;
export type roundedSm = Partial<RoundedAttributes>;
export type roundedLg = Partial<RoundedAttributes>;

// colors
interface TextAttributes {
	color: string;
}

interface BackgroundColorAttributes {
	backgroundColor: string;
}

export type textPrimary = TextAttributes;
export type textSecondary = TextAttributes;
export type textSuccess = TextAttributes;
export type textDanger = TextAttributes;
export type textWarning = TextAttributes;
export type textInfo = TextAttributes;
export type textLight = TextAttributes;
export type textDark = TextAttributes;
export type textBody = TextAttributes;
export type textMuted = TextAttributes;
export type textWhite = TextAttributes;
export type textBlack50 = TextAttributes;
export type textWhite50 = TextAttributes;
export type bgPrimary = BackgroundColorAttributes;
export type bgSecondary = BackgroundColorAttributes;
export type bgSuccess = BackgroundColorAttributes;
export type bgDanger = BackgroundColorAttributes;
export type bgWarning = BackgroundColorAttributes;
export type bgInfo = BackgroundColorAttributes;
export type bgLight = BackgroundColorAttributes;
export type bgDark = BackgroundColorAttributes;
export type bgWhite = BackgroundColorAttributes;
export type bgTransparent = BackgroundColorAttributes;

// display
export interface dFlex {
	display: string;
}
export interface dNone {
	display: string;
}

// flex
interface FlexDirectionAttributes {
	flexDirection: string;
}

interface JustifyContentAttributes {
	justifyContent: string;
}

interface AlignItemsAttributes {
	alignItems: string;
}

interface AlignSelfAttributes {
	alignSelf: string;
}

interface AlignContentAttributes {
	alignContent: string;
}

interface FlexGrowAndShrinkAttributes {
	flexGrow: number;
	flexShrink: number;
}

interface FlexWrapAttributes {
	flexWrap: string;
}

export type flexRow = FlexDirectionAttributes;
export type flexRowReverse = FlexDirectionAttributes;
export type flexColumn = FlexDirectionAttributes;
export type flexColumnReverse = FlexDirectionAttributes;
export type justifyContentStart = JustifyContentAttributes;
export type justifyContentEnd = JustifyContentAttributes;
export type justifyContentCenter = JustifyContentAttributes;
export type justifyContentBetween = JustifyContentAttributes;
export type justifyContentAround = JustifyContentAttributes;
export type alignItemsStart = AlignItemsAttributes;
export type alignItemsEnd = AlignItemsAttributes;
export type alignItemsCenter = AlignItemsAttributes;
export type alignItemsBaseline = AlignItemsAttributes;
export type alignItemsStretch = AlignItemsAttributes;
export type alignSelfStart = AlignSelfAttributes;
export type alignSelfEnd = AlignSelfAttributes;
export type alignSelfCenter = AlignSelfAttributes;
export type alignSelfBaseline = AlignSelfAttributes;
export type alignSelfStretch = AlignSelfAttributes;
export interface flexFill {
	flexGrow: number;
	flexShrink: number;
	flexBasis: string;
}
export type flexGrow1 = Partial<FlexGrowAndShrinkAttributes>;
export type flexGrow0 = Partial<FlexGrowAndShrinkAttributes>;
export type flexShrink1 = Partial<FlexGrowAndShrinkAttributes>;
export type flexShrink0 = Partial<FlexGrowAndShrinkAttributes>;
export type flexNowrap = Partial<FlexWrapAttributes>;
export type flexWrap = Partial<FlexWrapAttributes>;
export type flexWrapReverse = Partial<FlexWrapAttributes>;
export type alignContentStart = AlignContentAttributes;
export type alignContentEnd = AlignContentAttributes;
export type alignContentCenter = AlignContentAttributes;
export type alignContentBetween = AlignContentAttributes;
export type alignContentAround = AlignContentAttributes;
export type alignContentStretch = AlignContentAttributes;

// position

export interface positionAbsolute {
	position: string;
}

export interface positionRelative {
	position: string;
}

interface SpacingAttributes {
	margin: number;
	marginTop: number;
	marginRight: number;
	marginBottom: number;
	marginLeft: number;
	marginVertical: number;
	marginHorizontal: number;
	padding: number;
	paddingTop: number;
	paddingRight: number;
	paddingBottom: number;
	paddingLeft: number;
	paddingVertical: number;
	paddingHorizontal: number;
}

// spacing
export type m1 = Partial<SpacingAttributes>;
export type m2 = Partial<SpacingAttributes>;
export type m3 = Partial<SpacingAttributes>;
export type m4 = Partial<SpacingAttributes>;
export type m5 = Partial<SpacingAttributes>;
export type mt1 = Partial<SpacingAttributes>;
export type mt2 = Partial<SpacingAttributes>;
export type mt3 = Partial<SpacingAttributes>;
export type mt4 = Partial<SpacingAttributes>;
export type mt5 = Partial<SpacingAttributes>;
export type mr1 = Partial<SpacingAttributes>;
export type mr2 = Partial<SpacingAttributes>;
export type mr3 = Partial<SpacingAttributes>;
export type mr4 = Partial<SpacingAttributes>;
export type mr5 = Partial<SpacingAttributes>;
export type mb1 = Partial<SpacingAttributes>;
export type mb2 = Partial<SpacingAttributes>;
export type mb3 = Partial<SpacingAttributes>;
export type mb4 = Partial<SpacingAttributes>;
export type mb5 = Partial<SpacingAttributes>;
export type ml1 = Partial<SpacingAttributes>;
export type ml2 = Partial<SpacingAttributes>;
export type ml3 = Partial<SpacingAttributes>;
export type ml4 = Partial<SpacingAttributes>;
export type ml5 = Partial<SpacingAttributes>;
export type my1 = Partial<SpacingAttributes>;
export type my2 = Partial<SpacingAttributes>;
export type my3 = Partial<SpacingAttributes>;
export type my4 = Partial<SpacingAttributes>;
export type my5 = Partial<SpacingAttributes>;
export type mx1 = Partial<SpacingAttributes>;
export type mx2 = Partial<SpacingAttributes>;
export type mx3 = Partial<SpacingAttributes>;
export type mx4 = Partial<SpacingAttributes>;
export type mx5 = Partial<SpacingAttributes>;
export type mn1 = Partial<SpacingAttributes>;
export type mn2 = Partial<SpacingAttributes>;
export type mn3 = Partial<SpacingAttributes>;
export type mn4 = Partial<SpacingAttributes>;
export type mn5 = Partial<SpacingAttributes>;
export type mtn1 = Partial<SpacingAttributes>;
export type mtn2 = Partial<SpacingAttributes>;
export type mtn3 = Partial<SpacingAttributes>;
export type mtn4 = Partial<SpacingAttributes>;
export type mtn5 = Partial<SpacingAttributes>;
export type mrn1 = Partial<SpacingAttributes>;
export type mrn2 = Partial<SpacingAttributes>;
export type mrn3 = Partial<SpacingAttributes>;
export type mrn4 = Partial<SpacingAttributes>;
export type mrn5 = Partial<SpacingAttributes>;
export type mbn1 = Partial<SpacingAttributes>;
export type mbn2 = Partial<SpacingAttributes>;
export type mbn3 = Partial<SpacingAttributes>;
export type mbn4 = Partial<SpacingAttributes>;
export type mbn5 = Partial<SpacingAttributes>;
export type mln1 = Partial<SpacingAttributes>;
export type mln2 = Partial<SpacingAttributes>;
export type mln3 = Partial<SpacingAttributes>;
export type mln4 = Partial<SpacingAttributes>;
export type mln5 = Partial<SpacingAttributes>;
export type p1 = Partial<SpacingAttributes>;
export type p2 = Partial<SpacingAttributes>;
export type p3 = Partial<SpacingAttributes>;
export type p4 = Partial<SpacingAttributes>;
export type p5 = Partial<SpacingAttributes>;
export type pt1 = Partial<SpacingAttributes>;
export type pt2 = Partial<SpacingAttributes>;
export type pt3 = Partial<SpacingAttributes>;
export type pt4 = Partial<SpacingAttributes>;
export type pt5 = Partial<SpacingAttributes>;
export type pr1 = Partial<SpacingAttributes>;
export type pr2 = Partial<SpacingAttributes>;
export type pr3 = Partial<SpacingAttributes>;
export type pr4 = Partial<SpacingAttributes>;
export type pr5 = Partial<SpacingAttributes>;
export type pb1 = Partial<SpacingAttributes>;
export type pb2 = Partial<SpacingAttributes>;
export type pb3 = Partial<SpacingAttributes>;
export type pb4 = Partial<SpacingAttributes>;
export type pb5 = Partial<SpacingAttributes>;
export type pl1 = Partial<SpacingAttributes>;
export type pl2 = Partial<SpacingAttributes>;
export type pl3 = Partial<SpacingAttributes>;
export type pl4 = Partial<SpacingAttributes>;
export type pl5 = Partial<SpacingAttributes>;
export type py1 = Partial<SpacingAttributes>;
export type py2 = Partial<SpacingAttributes>;
export type py3 = Partial<SpacingAttributes>;
export type py4 = Partial<SpacingAttributes>;
export type py5 = Partial<SpacingAttributes>;
export type px1 = Partial<SpacingAttributes>;
export type px2 = Partial<SpacingAttributes>;
export type px3 = Partial<SpacingAttributes>;
export type px4 = Partial<SpacingAttributes>;
export type px5 = Partial<SpacingAttributes>;

// text

interface TextAlignAttribute {
	textAlign: string;
}

interface TextTransformAttribute {
	textTransform: string;
}

interface FontWeightAttribute {
	fontWeight: string;
}

export type textLeft = TextAlignAttribute;
export type textRight = TextAlignAttribute;
export type textCenter = TextAlignAttribute;
export type textJustify = TextAlignAttribute;
export type textLowercase = TextTransformAttribute;
export type textUppercase = TextTransformAttribute;
export type textCapitalize = TextTransformAttribute;
export type fontWeightBold = FontWeightAttribute;
export type fontWeightBolder = FontWeightAttribute;
export type fontWeightLight = FontWeightAttribute;
export type fontWeightLighter = FontWeightAttribute;
export type fontItalic = FontWeightAttribute;
export interface textDecorationNone {
	fontStyle: string;
}

export interface visible {
	opacity: number;
}

export interface invisible {
	opacity: number;
}
