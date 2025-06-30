# AITable Widget UI Components and Theming

This document covers UI-related aspects of AITable widgets, including component libraries, styling, theming, and colors.

## UI Development Guide

### Support dark mode

The widget supports dark theme now. Support switching themes by default following the main app. Support two ways to handle the style of multiple themes (default theme, dark theme).

When implementing components, you must use unified tokens made by the AITable design team in css (different color schemes for different themes).

#### Using in the style file

Use css variables when writing css styles.

```css
.list {
  color: var(--fc1);
  box-shadow: var(--shadowCommonShadow2);
  background-color: var(--bgCommonDefault);
}
```

In Google Chrome Console css variables will be prompted with a list of tokens corresponding to your current theme.

#### Using in inline styles

You can also use the colorVars object in the component library @apitable/components to automatically adapt the theme, write it with Typescript type hint variables, or of course write the css variables by hand in string format (not recommended).

```jsx
import { colorVars } from '@apitable/components';

export const HelloWorld = () => {
  return (
    <span style={{
      color: colorVars.textCommonPrimary,
      background: 'var(--bgCommonDefault)'
    }}>
      Hello World
    </span>
  )
}
```

You can customize css variables to fit multiple themes, create a new variables.css file to manage custom css variables:

```css
:root[data-theme="light"] {
  --custom-variables: xxx;
}

:root[data-theme="dark"] {
  --custom-variables: xxx;
}
```

#### `ThemeProvider`

##### Get color variables with hooks

The widget has been wrapped by default by the ThemeProvider component, which already supports changing themes following the main application theme. Use the useTheme hooks of @apitable/components to get the colors.

```jsx
import { useTheme } from "@apitable/components";

export const HelloWorld = () => {
  const theme = useTheme();
  return (
    <span style={{ color: theme.color.textCommonPrimary }}>Hello World</span>
  );
};
```

##### Get theme information

You can also use useMeta to get theme information:

```js
import { useMeta } from "@apitable/widget-sdk";

const meta = useMeta();
const theme = meta.theme;
```

### Design Tokens

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to ensure flexibility and consistency across all product experiences.

#### Tokens Guide and Examples

You can add prominence level to any text, icon, or background color, and interaction behavior can be specified by adding hover, selected, and disabled.

Naming convention of tokens:

```
--{type}-{colorRole}-{prominence}-{interaction}
```

##### Type (required)

Required parameter that specifies which type of object we want to assign a color to. Our four types are background `bg`, text&icon `text`, border `border` and shadow `shadow`. For ease of use, text and icons share `text`.

For example:
- `--bg-`
- `--text-`
- `--border-`
- `--shadow-`

##### Color Role (required)

Required parameters, the colors in our user interface have a specific meaning, so we organize the colors according to the way they are used, not the colors themselves. For example, if the theme color is `brand`, it may switch between purple and other colors depending on the theme.

For example:
- `--bg-brand-`
- `--text-common-`
- `--border-brand-`
- `--shadow-common-`

##### Prominence (optional)

Indicates the level of emphasis or importance:
- `--bg-common-default`
- `--bg-common-lower`
- `--bg-common-higher`
- `--text-common-primary`
- `--text-common-secondary`

##### Interaction (optional)

Describes the interaction state:
- `--bg-brand-default-hover`
- `--bg-brand-default-active`
- `--bg-brand-default-disabled`

## Widget UI Components Library

`components` provide rich UI components to help developers build the widget that is consistent with apitable style and reduce development costs.

1. Colors
2. Base components
3. Other business components

## Components

AITable provides a rich set of UI components to help you create consistent and beautiful widgets. Below is a list of the main components available:

### Basic Components

#### Colors

For detailed color information, see the [Colors](#font-icon-text-color) section.

#### Icons

AITable provides a comprehensive set of icons for use in your widgets. Icons can be imported from the `@apitable/components` package.

```jsx
import { IconButton, Icons } from '@apitable/components';

function IconExample() {
  return (
    <div>
      <Icons.ChevronDownOutlined />
      <Icons.ArrowDownOutlined />
      <Icons.ArrowUpOutlined />
      <Icons.ArrowLeftOutlined />
      <Icons.ArrowRightOutlined />
    </div>
  );
}
```

##### Available Icons

AITable provides many icons, including (but not limited to):

- Navigation Icons:
  - `ChevronDownOutlined`
  - `ArrowDownOutlined`
  - `ArrowUpOutlined`
  - `ArrowLeftOutlined`
  - `ArrowRightOutlined`
  
- Action Icons:
  - `AddOutlined`
  - `DeleteOutlined`
  - `EditOutlined`
  - `SearchOutlined`
  - `CloseOutlined`
  
- Status Icons:
  - `CheckOutlined`
  - `InfoOutlined`
  - `WarningOutlined`
  - `ErrorOutlined`

##### Icon Usage

Icons can be used directly or with the IconButton component:

```jsx
import { Icons, IconButton } from '@apitable/components';

// Direct usage
<Icons.AddOutlined color="primary" />

// With IconButton
<IconButton icon={Icons.AddOutlined} onClick={() => console.log('clicked')} />
```

#### Typography

Typography components to ensure consistent text styling across your widget.

```jsx
import { Typography } from '@apitable/components';

function TextExample() {
  return (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="body">Body text</Typography>
      <Typography variant="caption">Caption text</Typography>
    </div>
  );
}
```

### Form Components

#### Button

Standard button component with various styles and sizes.

```jsx
import { Button } from '@apitable/components';

function ButtonExample() {
  return (
    <div>
      <Button color="primary" size="small">Small Button</Button>
      <Button color="danger" size="middle">Middle Button</Button>
      <Button color="default" size="large">Large Button</Button>
      <Button disabled>Disabled Button</Button>
    </div>
  );
}
```

#### IconButton

Button that displays an icon.

```jsx
import { IconButton, Icons } from '@apitable/components';

function IconButtonExample() {
  return (
    <IconButton 
      icon={Icons.AddOutlined} 
      onClick={() => console.log('Add clicked')}
    />
  );
}
```

#### LinkButton

Button that looks like a link.

```jsx
import { LinkButton } from '@apitable/components';

function LinkButtonExample() {
  return (
    <LinkButton 
      href="https://example.com" 
      target="_blank"
    >
      Visit Example
    </LinkButton>
  );
}
```

#### TextButton

Text-only button with no background.

```jsx
import { TextButton } from '@apitable/components';

function TextButtonExample() {
  return (
    <TextButton onClick={() => console.log('Clicked')}>
      Click Me
    </TextButton>
  );
}
```

#### Loading

Loading indicator component.

```jsx
import { Loading } from '@apitable/components';

function LoadingExample() {
  return (
    <div>
      <Loading />
      <Loading size="small" />
      <Loading size="large" />
    </div>
  );
}
```

#### Checkbox

Checkbox input component.

```jsx
import { Checkbox } from '@apitable/components';
import { useState } from 'react';

function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    >
      Check me
    </Checkbox>
  );
}
```

#### Select

Dropdown selection component.

```jsx
import { Select } from '@apitable/components';
import { useState } from 'react';

function SelectExample() {
  const [value, setValue] = useState('option1');
  
  return (
    <Select
      value={value}
      onChange={(value) => setValue(value)}
      options={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ]}
    />
  );
}
```

#### Switch

Toggle switch component.

```jsx
import { Switch } from '@apitable/components';
import { useState } from 'react';

function SwitchExample() {
  const [enabled, setEnabled] = useState(false);
  
  return (
    <Switch
      checked={enabled}
      onChange={(checked) => setEnabled(checked)}
    />
  );
}
```

#### Radio

Radio button component.

```jsx
import { Radio } from '@apitable/components';
import { useState } from 'react';

function RadioExample() {
  const [value, setValue] = useState('option1');
  
  return (
    <div>
      <Radio
        checked={value === 'option1'}
        onChange={() => setValue('option1')}
      >
        Option 1
      </Radio>
      <Radio
        checked={value === 'option2'}
        onChange={() => setValue('option2')}
      >
        Option 2
      </Radio>
    </div>
  );
}
```

#### RadioGroup

Group of radio buttons.

```jsx
import { RadioGroup, Radio } from '@apitable/components';
import { useState } from 'react';

function RadioGroupExample() {
  const [value, setValue] = useState('option1');
  
  return (
    <RadioGroup value={value} onChange={(value) => setValue(value)}>
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  );
}
```

#### TextInput

Text input field.

```jsx
import { TextInput } from '@apitable/components';
import { useState } from 'react';

function TextInputExample() {
  const [value, setValue] = useState('');
  
  return (
    <TextInput
      placeholder="Enter text..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

#### Box

Container component with spacing and layout utilities.

```jsx
import { Box } from '@apitable/components';

function BoxExample() {
  return (
    <Box
      padding="16px"
      margin="8px"
      backgroundColor="var(--bgCommonDefault)"
    >
      Content inside a box
    </Box>
  );
}
```

### Layout Components

#### Space

Component for managing spacing between elements.

```jsx
import { Space, Button } from '@apitable/components';

function SpaceExample() {
  return (
    <Space size="large">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Space>
  );
}
```

#### List

Display a list of items.

```jsx
import { List } from '@apitable/components';

function ListExample() {
  const items = [
    { title: 'Item 1', description: 'Description 1' },
    { title: 'Item 2', description: 'Description 2' },
    { title: 'Item 3', description: 'Description 3' },
  ];
  
  return (
    <List>
      {items.map((item, index) => (
        <List.Item key={index}>
          <div>{item.title}</div>
          <div>{item.description}</div>
        </List.Item>
      ))}
    </List>
  );
}
```

#### Calendar

Calendar component for date selection and display.

```jsx
import { Calendar } from '@apitable/components';
import { useState } from 'react';

function CalendarExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  return (
    <Calendar
      value={selectedDate}
      onChange={(date) => setSelectedDate(date)}
    />
  );
}
```

### Other Components

#### CellValue

Component to display cell values from the datasheet.

```jsx
import { CellValue } from '@apitable/components';
import { useRecord } from '@apitable/widget-sdk';

function CellValueExample({ recordId, fieldId }) {
  const record = useRecord(recordId);
  
  return (
    <CellValue
      field={fieldId}
      record={record}
    />
  );
}
```

#### FieldPicker

Component to select fields from a datasheet.

```jsx
import { FieldPicker } from '@apitable/components';
import { useState } from 'react';

function FieldPickerExample() {
  const [selectedField, setSelectedField] = useState(null);
  
  return (
    <FieldPicker
      value={selectedField}
      onChange={(fieldId) => setSelectedField(fieldId)}
    />
  );
}
```

#### ViewPicker

Component to select views from a datasheet.

```jsx
import { ViewPicker } from '@apitable/components';
import { useState } from 'react';

function ViewPickerExample() {
  const [selectedView, setSelectedView] = useState(null);
  
  return (
    <ViewPicker
      value={selectedView}
      onChange={(viewId) => setSelectedView(viewId)}
    />
  );
}
```

## How to Add CSS

`widget-cli` has built-in `style-loader` and `css-loader`, and supports `esModule` to import `css`.

### Here is an example

In the widget development directory

```text
├── src
│   ├── index.css
│   ├── index.tsx
```

index.css

```css
.redColor {
  color: red;
}
```

index.tsx

### esModule

```tsx
import React from 'react';
import style from './index.css';

export const Example: React.FC = () => {
  return <div className={style.redColor}>a red div</div>
}
```

### External css

> **Note:** It is only supported when the sandbox environment is enabled

```ts
import './index.css';

export const Example: React.FC = () => {
  return <div className='redColor'>a red div</div>
}
```

## To use a third-party UI component library

If you need to use a third-party UI component library, we currently recommend using [MUI](https://mui.com/getting-started/usage/).

## Font, icon text color

### Common

#### textCommonPrimary

First-level text color, used for main text and icons, such as titles, body text, etc.

```jsx
colors.textCommonPrimary
```

#### textCommonSecondary

The text color of the second level, used for secondary text and icons, such as body text, sub text, etc.

```jsx
colors.textCommonSecondary
```

#### textCommonTertiary

The third level of text color, used for unimportant text and icons, such as descriptions, labels, subtitles, etc.

```jsx
colors.textCommonTertiary
```

#### textCommonQuaternary

The fourth level of text color, used for very unimportant text and icons, such as input box placeholders, etc.

```jsx
colors.textCommonQuaternary
```

### Brand

#### textBrandDefault

Text color of the brand color

```jsx
colors.textBrandDefault
```

#### textBrandHover

The hover state of the text color matches the brand color

```jsx
colors.textBrandHover
```

#### textBrandActive

The active state of the text color of the brand color

```jsx
colors.textBrandActive
```

### Selected

```jsx
colors.textSelectedPrimary
```

```jsx
colors.textSelectedSecondary
```

### Danger

#### textDangerDefault

The text color of the danger color, expressing the status of danger, error, failure, etc.

```jsx
colors.textDangerDefault
```

#### textDangerHover

hover state for danger colored text

```jsx
colors.textDangerHover
```

#### textDangerActive

active state for danger-colored text

```jsx
colors.textDangerActive
```

### Success

#### textSuccessDefault

The text color of the safe color, expressing the status of success, safety, correct, complete, etc.

```jsx
colors.textSuccessDefault
```

#### textSuccessHover

```jsx
colors.textSuccessHover
```

#### textSuccessActive

active state of safe color text

```jsx
colors.textSuccessActive
```

### Warning

#### textWarnDefault

The text color of the warning color, expressing the status of reminder, warning, unsafe, etc.

```jsx
colors.textWarnDefault
```

#### textWarnHover

The hover state of the warning color text

```jsx
colors.textWarnHover
```

#### textWarnActive

The active state of the warning color text

```jsx
colors.textWarnActive
```

### Inherent

#### textStaticPrimary

Inherent first-level text color, generally used for dark backgrounds, does not follow the theme change, such as the text color in the button

```jsx
colors.textStaticPrimary
```

#### textStaticSecondary

The inherent second-level text color, generally used for dark backgrounds, does not follow the theme, such as the text color in the button

```jsx
colors.textStaticSecondary
```

#### textStaticTertiary

The inherent third-level text color, generally used for dark backgrounds, does not follow the theme change, such as the text color in the button

```jsx
colors.textStaticTertiary
```

## Background Colors

### Common

#### bgCommonLower

The background color of the lowest level

```jsx
colors.bgCommonLower
```

```css
var(--bgCommonLower)
```

#### bgCommonDefault

Medium level background color, used by default

```jsx
colors.bgCommonDefault
```

```css
var(--bgCommonDefault)
```

#### bgCommonHigh

Higher-level background color, generally used for the background of the floating layer above bg-common-Default

```jsx
colors.bgCommonHigh
```

```css
var(--bgCommonHigh)
```

#### bgCommonHighest

The highest-level background color, generally used for drop-down/right-click menus, notification reminders, unmasked modal windows, etc.

```jsx
colors.bgCommonHighest
```

```css
var(--bgCommonHighest)
```

### Control Backgrounds

#### bgControlsDefault

The background color of regular controls, such as input boxes, selectors, secondary buttons, etc.

```jsx
colors.bgControlsDefault
```

#### bgControlsHover

The hover state of the background color of regular controls, such as input boxes, selectors, secondary buttons, etc.

```jsx
colors.bgControlsHover
```

#### bgControlsActive

The active state of the background color of regular controls, such as input boxes, selectors, secondary buttons, etc.

```jsx
colors.bgControlsActive
```

### Tag Backgrounds

#### bgTagDefault

The background color of regular tag components, such as Two-way Link, MagicLookUp, Member tags, etc.

```jsx
colors.bgTagDefault
```

#### bgTagHover

The hover state of the background color of regular tag components, such as Two-way Link, MagicLookUp, Member tags, etc.

```jsx
colors.bgTagHover
```

### System Backgrounds

#### bgScrollbarDefault

The background color of the scrollbar

```jsx
colors.bgScrollbarDefault
```

#### bgModalOverlay

The background color of the modal overlay

```jsx
colors.bgModalOverlay
```

### Selected State Backgrounds

#### bgSelectedPrimary

The background color of the selected state, such as selected directory node, toolbar button activation, selected row, etc.

```jsx
colors.bgSelectedPrimary
```

#### bgSelectedHover

The hover state of the background color in the selected state, such as selecting a directory node, activating a toolbar button, selecting a row, etc.

```jsx
colors.bgSelectedHover
```

#### bgSelectedActive

The active state of the background color in the selected state, such as selecting a directory node, activating a toolbar button, selecting a row, etc.

```jsx
colors.bgSelectedActive
```

### Brand Backgrounds

#### bgBrandDefault

Background color of brand color

```jsx
colors.bgBrandDefault
```

#### bgBrandHover

The hover state of the background color of the brand color

```jsx
colors.bgBrandHover
```

#### bgBrandActive

The active state of the background color of the brand color

```jsx
colors.bgBrandActive
```

### Danger Backgrounds

#### bgDangerDefault

The background color of the danger color, expressing danger, error, failure and other states

```jsx
colors.bgDangerDefault
```

### Success Backgrounds

#### bgSuccessDefault

The background color of the safe color, expressing the status of success, safety, correctness, completion, etc.

```jsx
colors.bgSuccessDefault
```

### Warning Backgrounds

#### bgWarningDefault

The background color of the warning color, expressing the status of reminder, warning, unsafe, etc.

```jsx
colors.bgWarningDefault
```

## Using @apitable/components

To use the official UI components from AITable:

1. Install the components package:

```bash
npm install @apitable/components
```

2. Import components in your code:

```jsx
import { Button, TextInput } from '@apitable/components';

function MyComponent() {
  return (
    <div>
      <TextInput placeholder="Enter text..." />
      <Button>Click me</Button>
    </div>
  );
}
```

### Common Components

- Button: Standard button component with various sizes and styles
- TextInput: Text input field
- Select: Dropdown selection component
- Checkbox: Checkbox input component
- Switch: Toggle switch component

### Example with Button Component

```jsx
import { Button } from '@apitable/components';

function ButtonExample() {
  return (
    <div>
      <Button 
        color="primary" 
        size="small" 
        onClick={() => console.log('Button clicked')}
      >
        Small Primary Button
      </Button>
      
      <Button 
        color="danger" 
        size="middle" 
        onClick={() => console.log('Danger button clicked')}
      >
        Middle Danger Button
      </Button>
    </div>
  );
}
```