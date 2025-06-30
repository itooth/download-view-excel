# AITable Widget Development Guide

## Introduction

AITable widgets are extensions that allow you to fully utilize the SDK capabilities to develop custom applications that match business scenarios and personal needs. Widgets can transform AITable's database capabilities into various forms of interactive applications.

## Widget Capabilities

### Extend Visualization Capabilities

Widgets allow you to create custom visualizations such as:
- Cell Viewers: for browsing data of different column types
- Maps: to display address data in visual map format
- URL previews: to quickly preview content from specified URLs

### Extend Interactivity Capabilities

Widgets can enhance interactivity through features like:
- Email notifications: sending emails when data changes
- To-do lists: quickly entering data via specialized interfaces

## Developer Requirements

Before creating your first widget, you should have the following skills:

- Familiarity with AITable basic concepts (records, fields, views)
- JavaScript and React knowledge (TypeScript is recommended for more stable widgets)
  - Core capabilities include React Hooks and React Functional Components
- Experience with npm or yarn package managers
- Basic command-line knowledge

## Environment Requirements

- Google Chrome browser
- NodeJS (recommended version v14.16.0 or newer)
- A code editor (VS Code recommended)

## Developer Tools

### Widget-CLI

`widget-cli` is a command line tool that helps you:
- Initialize widget projects
- Run widgets locally for development
- Build and publish widgets
- Unmount widgets

### Widget-SDK

`widget-sdk` allows you to:
- Read/write data in AITable datasheets
- Use AITable's built-in methods
- Develop custom widgets according to your needs

The widget is essentially a React app, and you can import any npm packages you need in addition to `widget-sdk`.

## Widget Hooks Reference

AITable Widget SDK provides various React hooks to interact with the platform. Below are the hooks not directly related to reading or writing data:

### UI and Interaction Hooks

#### `useActiveCell`

Gets the currently active cell in the datasheet.

**Syntax:**
```javascript
const activeCell = useActiveCell();
```

**Returns:**
- Active cell object with `fieldId` and `recordId` properties, or `null` if no cell is active

**Example:**
```javascript
import { useActiveCell } from '@apitable/widget-sdk';

function ActiveCellComponent() {
  const activeCell = useActiveCell();
  
  if (!activeCell) {
    return <div>No cell is active</div>;
  }
  
  return (
    <div>
      <p>Active Field: {activeCell.fieldId}</p>
      <p>Active Record: {activeCell.recordId}</p>
    </div>
  );
}
```

#### `useActiveViewId`

Gets the ID of the currently active view.

**Syntax:**
```javascript
const activeViewId = useActiveViewId();
```

**Returns:**
- String ID of the active view

**Example:**
```javascript
import { useActiveViewId } from '@apitable/widget-sdk';

function ActiveViewComponent() {
  const activeViewId = useActiveViewId();
  return <div>Current view ID: {activeViewId}</div>;
}
```

#### `useCloudStorage`

Provides persistent storage functionality for widget data, enabling real-time collaboration.

**Syntax:**
```javascript
const [value, setValue] = useCloudStorage(key, defaultValue);
```

**Parameters:**
- `key` (string): Storage key name
- `defaultValue` (any): Default value if key doesn't exist

**Returns:**
- Array with current value and setter function, similar to React's useState

**Example:**
```javascript
import { useCloudStorage } from '@apitable/widget-sdk';

function Counter() {
  const [counter, setCounter] = useCloudStorage('counter', 0);
  
  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}
```

#### `useCollaborators`

Gets information about users currently using the widget.

**Syntax:**
```javascript
const collaborators = useCollaborators();
```

**Returns:**
- Array of collaborator objects

#### `useExpandRecord`

Provides a function to expand a record card in the UI.

**Syntax:**
```javascript
const expandRecord = useExpandRecord();
```

**Usage:**
```javascript
expandRecord({ viewId, recordIds: [recordId] });
```

**Example:**
```javascript
import { useExpandRecord, useRecords } from '@apitable/widget-sdk';

function ExpandRecordButton() {
  const expandRecord = useExpandRecord();
  const records = useRecords();
  
  if (!records.length) return null;
  
  return (
    <button onClick={() => expandRecord({ recordIds: [records[0].id] })}>
      Expand First Record
    </button>
  );
}
```

#### `useSelection`

Gets the currently selected cell(s) in the datasheet.

**Syntax:**
```javascript
const selection = useSelection();
```

**Returns:**
- Selection object with properties like `activeCell`, `recordIds`, `fieldIds`

**Example:**
```javascript
import { useSelection } from '@apitable/widget-sdk';

function SelectionInfo() {
  const selection = useSelection();
  
  if (!selection) {
    return <div>Nothing selected</div>;
  }
  
  return (
    <div>
      <p>Selected Records: {selection.recordIds.length}</p>
      <p>Selected Fields: {selection.fieldIds.length}</p>
    </div>
  );
}
```

#### `useSession`

Gets information about the current user session.

**Syntax:**
```javascript
const session = useSession();
```

**Returns:**
- Session object containing user information

#### `useSettingsButton`

Controls the visibility of the widget settings panel.

**Syntax:**
```javascript
const [isShowingSettings, toggleSettings] = useSettingsButton();
```

**Returns:**
- Boolean indicating if settings are visible and a function to toggle visibility

**Example:**
```javascript
import { useSettingsButton } from '@apitable/widget-sdk';

function SettingsToggle() {
  const [isShowingSettings, toggleSettings] = useSettingsButton();
  
  return (
    <button onClick={() => toggleSettings()}>
      {isShowingSettings ? 'Hide' : 'Show'} Settings
    </button>
  );
}
```

#### `useViewport`

Controls the fullscreen mode of the widget.

**Syntax:**
```javascript
const { isFullscreen, toggleFullscreen } = useViewport();
```

**Returns:**
- Object with fullscreen state and toggle function

**Example:**
```javascript
import { useViewport } from '@apitable/widget-sdk';

function FullscreenToggle() {
  const { isFullscreen, toggleFullscreen } = useViewport();
  
  return (
    <button onClick={toggleFullscreen}>
      {isFullscreen ? 'Exit' : 'Enter'} Fullscreen
    </button>
  );
}
```

### Metadata and Information Hooks

#### `useMeta`

Gets metadata about the widget and its environment.

**Syntax:**
```javascript
const meta = useMeta();
```

**Returns:**
- Object containing widget metadata like id, name, datasheetId, theme, etc.

**Example:**
```javascript
import { useMeta } from '@apitable/widget-sdk';

function WidgetInfo() {
  const meta = useMeta();
  
  return (
    <div>
      <h3>Widget Information</h3>
      <p>Widget Name: {meta.widgetPackageName}</p>
      <p>Datasheet Name: {meta.datasheetName}</p>
      <p>Current Theme: {meta.theme}</p>
    </div>
  );
}
```

#### `useViewIds`

Gets IDs of all views in the datasheet.

**Syntax:**
```javascript
const viewIds = useViewIds();
```

**Returns:**
- Array of view ID strings

**Example:**
```javascript
import { useViewIds } from '@apitable/widget-sdk';

function ViewList() {
  const viewIds = useViewIds();
  
  return (
    <div>
      <h3>Views in Datasheet:</h3>
      <ul>
        {viewIds.map(id => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### `useViewMeta`

Gets metadata about a specific view.

**Syntax:**
```javascript
const viewMeta = useViewMeta(viewId);
```

**Parameters:**
- `viewId` (string): ID of the view

**Returns:**
- Object containing view metadata like id, name, type, etc.

**Example:**
```javascript
import { useActiveViewId, useViewMeta } from '@apitable/widget-sdk';

function ViewInfo() {
  const activeViewId = useActiveViewId();
  const viewMeta = useViewMeta(activeViewId);
  
  if (!viewMeta) return null;
  
  return (
    <div>
      <h3>Current View Info:</h3>
      <p>Name: {viewMeta.name}</p>
      <p>Type: {viewMeta.type}</p>
    </div>
  );
}
```

#### `useViewsMeta`

Gets metadata about all views in the datasheet.

**Syntax:**
```javascript
const viewsMeta = useViewsMeta();
```

**Returns:**
- Array of view metadata objects

**Example:**
```javascript
import { useViewsMeta } from '@apitable/widget-sdk';

function AllViewsInfo() {
  const viewsMeta = useViewsMeta();
  
  return (
    <div>
      <h3>All Views:</h3>
      <ul>
        {viewsMeta.map(view => (
          <li key={view.id}>{view.name} ({view.type})</li>
        ))}
      </ul>
    </div>
  );
}
```

## Widget Development Workflow

1. Create a widget in the AITable interface
2. Install the widget development tool (`npm install -g @apitable/widget-cli`)
3. Initialize the widget project with the CLI
4. Launch the widget in development mode
5. Preview the widget in AITable
6. Publish the widget when ready

## Working with Browser Security Restrictions

When developing widgets, you'll need to handle browser security restrictions for loading local code:

### Solution Options:
1. Using `chrome://flags/#allow-insecure-localhost` (for older Chrome versions)
2. Using `chrome://flags/#temporary-unexpire-flags-m118` (for newer Chrome versions)
3. Manually accessing and approving local resources once

## Widget Project Structure

```
my-widget/
├── dist/
├── node_modules/
├── src/
│   └── index.ts
├── .gitignore
├── .apitable.yml
├── author_icon.png
├── cover.png
├── package_icon.png
├── package.json
└── widget.config.json
```

Key files:
- `src/`: Main development directory
- `.apitable.yml`: Configuration file for host and token (automatically maintained)
- `author_icon.png`: User avatar (64x64 PNG)
- `cover.png`: Widget cover image (16:9 PNG, recommended 464x264)
- `package_icon.png`: Widget icon (64x64 PNG)
- `package.json`: Standard JavaScript dependency file
- `widget.config.json`: Widget configuration with name, description, etc.

## Widget Configuration (widget.config.json)

The `widget.config.json` file contains important configuration settings:

```json
{
  "packageId": "wpkvaNpJiDstV",
  "globalPackageId": "wpkSybhcxsmGM",
  "spaceId": "spczdmQDfBAn5",
  "entry": "./src/index.ts",
  "name": {
    "zh-CN": "Widget Name in Chinese",
    "en-US": "Widget Name in English"
  },
  "icon": "./package_icon.png",
  "cover": "./cover.png",
  "authorName": "Your Name",
  "authorIcon": "./author_icon.png",
  "authorLink": "https://yourwebsite.com",
  "authorEmail": "your.email@example.com",
  "description": {
    "zh-CN": "Widget description in Chinese",
    "en-US": "Widget description in English"
  },
  "sandbox": true,
  "runtimeEnv": ["mobile", "desktop"],
  "installEnv": ["dashboard", "panel"]
}
```

## Publishing Widgets

Before publishing:
1. Prepare a 64x64 PNG image as your widget icon
2. Update the widget.config.json file with appropriate name and description

To publish your widget:
```bash
widget-cli release
# For community or private versions, specify the upload host:
widget-cli release --uploadHost <host>
```

After publication, your widget will be available in the widget center under "Custom" widgets.

## Widget Ownership

- Only the creator's account can publish and update custom widgets
- Publishing rights can be transferred to another creator or space administrator if needed

## Adding CSS to Widgets

`widget-cli` has built-in support for CSS:

```javascript
// Using ES modules
import style from './index.css';
export const Example = () => {
  return <div className={style.redColor}>a red div</div>
}

// Or using external CSS (only supported when sandbox environment is enabled)
import './index.css';
export const Example = () => {
  return <div className='redColor'>a red div</div>
}
```

For third-party UI component libraries, MUI is recommended.

## Sandbox Environment

The sandbox environment (`"sandbox": true` in widget.config.json) provides a secure context for widget rendering and is recommended for most widget development.
