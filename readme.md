# React Native Bootstrap Utilities

Bringing bootstrap utilities to react native world

## Installation

npm install rn-bootstrap-utilities

## Usage

```
// import margin and padding
import { m4, p4 } from 'rn-bootstrap-utilities'

...
<View style={[m4, p4]}>
  ...
</View>
...
```

## Utilities

### Borders

Use borders utility to quickly style the border and border-radius of an component

Additive:

- border
- borderTop
- borderRight
- borderBottom
- borderLeft

Subtractive:

- border0
- borderTop0
- borderRight0
- borderBotton0
- borderLeft0

Colors:

- borderPrimary
- borderSecondary
- borderSuccess
- borderDanger
- borderWarning
- borderInfo
- borderLight
- borderDark
- borderWhite

Usage:

```
...
<View style={[border, borderPrimary]}>...</View> {/* border utility must be also included */}
...
```

Radius:

- rounded
- roundedTop
- roundedRight
- roundedBottom
- roundedLeft
- roundedCircle
- rounded0
- roundedSm
- roundedLg

### Colors

Quickly add colors to your Text component with color utility.

- textPrimary
- textSecondary
- textSuccess
- textDanger
- textWarning
- textInfo
- textLight
- textDark
- textBody
- textMuted
- textWhite
- textBlack50
- textWhite50
- bgPrimary
- bgSecondary
- bgSuccess
- bgDanger
- bgWarning
- bgInfo
- bgLight
- bgDark
- bgWhite
- bgTransparent

### Display

Quickly modify components display property with display utility

- dFlex
- dNone

### Flex

Easily manage the layout and alignment of components using flexbox utility.

- flexRow
- flexRowReverse
- flexColumn
- flexColumnReverse
- justifyContentStart
- justifyContentEnd
- justifyContentCenter
- justifyContentBetween
- justifyContentAround
- alignItemsStart
- alignItemsEnd
- alignItemsCenter
- alignItemsBaseline
- alignItemsStretch
- alignSelfStart
- alignSelfEnd
- alignSelfCenter
- alignSelfBaseline
- alignSelfStretch
- flexFill
- flexGrow1
- flexGrow0
- flexShrink1
- flexShrink0
- flexNowrap
- flexWrap
- flexWrapReverse
- alignContentStart
- alignContentEnd
- alignContentCenter
- alignContentBetween
- alignContentAround
- alignContentStretch

### Position

Quickly modify components position property with position utility

- positionAbsolute
- positionRelative

### Spacing

Margin and Padding utility to modify component's appearance.

Notation

The utilities are named using the format [{property}][{sides}]-[{size}]

Where [property] is one of:

- **m** - margin
- **p** - padding

Where [sides] is one of:

- **t** - top
- **b** - bottom
- **l** - left
- **r** - right
- **x** - both left and right
- **y** - both top and bottom
- blank - for utilities that a margin or padding on all 4 sides of the element

Where [size] is one of:

- 0 - eliminate the margin or padding by setting it to 0
- 1 - set the margin or padding to \$spacer \* .25
- 2 - set the margin or padding to \$spacer \* .50
- 3 - set the margin or padding to \$spacer
- 4 - set the margin or padding to \$spacer \* 1.5
- 5 - set the margin or padding to \$spacer \* 3

\$spacer = 16 units. This can be found in [utils/constants.js](https://github.com/s-tags/rn-bootstrap-utilities/blob/development/utils/constants.js)

Usage:

```
<View style={[mt0, ml1, px2, pt2]}>...</View>
```

**Negative margin**
The syntax is nearly the same as the default, positive margin utilities, but with the addition of n before the requested size.
Here is an example usage of utility that is opposite to `mt1`

```
<View style={mtn1}>...</View>
```

### Text

Easily align <Text> component with text alignment utility.

- textLeft
- textRight
- textCenter
- textJustify
- textLowercase
- textUppercase
- textCapitalize
- fontWeightBold
- fontWeightBolder
- fontWeightNormal
- fontWeightLight
- fontWeightLighter
- fontItalic
- textDecorationNone

### Visibility

Control the visibility without modifying the display of components with visibility utilities.

- visible
- invisible
