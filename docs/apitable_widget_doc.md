section title: Introduction | AITable Developer Center

url: https://developers.aitable.ai/widget/introduction/

section start

## Introduction

The widget is an extension of the AITable.Through the widget, the data can be more fully and effectively used, and more prosperous data transmission and visualization can be achieved.

Now, the custom widget allows developers to fully use SDK capabilities to develop more apps that match business scenes and personal needs.

## What can you do with widget[](#what-can-you-do-with-widget "Direct link to What can you do with widget")

If AITable is a visualized database that is friendly to normal users, the widget is the best assistant to turn this database directly into different forms of apps.

### Extend the visualization capabilities[](#extend-the-visualization-capabilities "Direct link to Extend the visualization capabilities")

Below are some examples of custom：

+   Cell Viewer: makes it easier for you to browse data of different column types, and to view data in a completely new way from MagicLookUps, TwoWayLinks, Attachments
+   Map: a widget that can show address data of datasheet in Google Maps
+   URL preview: a widget to quickly preview the content of the specified URL

### Extend the interactivity capabilities[](#extend-the-interactivity-capabilities "Direct link to Extend the interactivity capabilities")

Below are some examples of custom widgets：

+   Email notifications: send an email to the specified person when data changes in the form
+   To-do list: quickly enter data to apitable via the to-do list interface

## Introduction of the widget development[](#introduction-of-the-widget-development "Direct link to Introduction of the widget development")

### Developer requirement[](#developer-requirement "Direct link to Developer requirement")

\` Before creating your first widget, make sure you already have the following skills：

+   Be familiar with the basic concepts of AITable, in particular records, fields, views
+   Be familiar with JavaScript and React.Be familiar with JavaScript and React.TypeScript is additional to help you develop more stable widgetsTypeScript is additional to help you develop more stable widgets.
    +   If you have not reached JavaScript yet, but have a strong interest in web development, it is recommended that you read [MDN JavaScript tutorial](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript) and [React Tutorial](https://reactjs.org/docs/getting-started.html)
    +   Core capabilities in the widget SDK include React Hooks and React Functional Components
+   Learn about npm or yarn package manager
+   Be familiar with the most basic command-line statements, such as cd entering a directory\`

### Environment requirement[](#environment-requirement "Direct link to Environment requirement")

+   Google Chrome
+   Install NodeJS, recommend using the latest version v14.16.0, and can be used for more than 12 versions in theory.It is recommended to use [nvm](https://github.com/nvm-sh/nvm) to manage your node version.
+   You need a code editor, recommend using the [VS Code](https://code.visualstudio.com/)

### Developer Tools[](#developer-tools "Direct link to Developer Tools")

#### Widget-cli[](#widget-cli "Direct link to Widget-cli")

`widget-cli` is a command line tool that can help you quickly initialize, run, publish, or unmount widgets (build and publish processes that depend on built-in webpack).

#### Widget-sdk[](#widget-sdk "Direct link to Widget-sdk")

`Widget-sdk` can read/write all types of data in the datasheet and use various built-in methods of AITable to develop powerful custom widgets according to your needs.`Widget-sdk` can read/write all types of data in the datasheet and use various built-in methods of AITable to develop powerful custom widgets according to your needs.`widget-sdk` is also a standard npm module that has been declared in package.json.`widget-sdk` is also a standard npm module that has been declared in package.json.

The widget is essentially a React app, except `widget-sdk` you can build your own widget like a standard React app to import the npm package you need.

The core of the `Widget-sdk` is React function components and hooks.

All capabilities in `widget-sdk` have complete details on [API Reference](https://developers.aitable.ai/) , and you can find an inspiration in the summary below：

1.  Read meta information
    1.  Current datasheet information, such as datasheet ID, datasheet name, etc.
    2.  The widgets's own information
2.  Read datasheet
    1.  Record Data
    2.  Field Data
    3.  Filtering/sorting data (developing)
3.  Write datasheet
    1.  Record Data
    2.  Field Data
4.  Key-Value Storage for Real-Time Collaboration
    1.  Store data needed by the widget itself and real-time collaboration
5.  Read selection information
    1.  Active Cell
    2.  Active Selection
    3.  Active View
6.  Interact with the main app
    1.  Expand and close widget
    2.  Expand and close widget settings
    3.  Expand a record card

#### Widget UI components library[](#widget-ui-components-library "Direct link to Widget UI components library")

`components` provide rich UI components to help developers build the widget that is consistent with apitable style and reduce development costs.

1.  Colors
2.  Base components
3.  Other business components

#### Icons[](#icons "Direct link to Icons")

In addition to UI components, we provide a well-designed icon library to enrich the dimension of the information further.

#### Examples[](#examples "Direct link to Examples")

You can also access [developer template widget](https://github.com/apitable/widget-developer-template) to see all API usage in an actual widget.

section end



section title: Quick Start | AITable Developer Center

url: https://developers.aitable.ai/widget/quick-start

section start

## Quick Start

This article describes how to quickly develop a hello world self-built widget. This article describes how to quickly develop a hello world self-built widget.Please read the [Application Brief Introduction](https://developers.aitable.ai/widget/introduction) in advance, prepare [Development Environment](https://developers.aitable.ai/widget/introduction#environment-requirement) , and learn about the [Developer Tools](https://developers.aitable.ai/widget/introduction#developer-tools) you are about to use.

Developing a Hello World widget requires the following steps:

1.  Create Widget
2.  Install Widget Development Tool
3.  Initialize widget
4.  Launch Widget
5.  Preview Widget
6.  Publish widget
7.  Install The Self-built Widget

## Step 1: Create Widget[](#step-1-create-widget "Direct link to Step 1: Create Widget")

Steps to create widget:

1.  Open the [AITable](https://aitable.ai/) first, open any datasheet, and click the widget button in the top right.
    
2.  Open the widget center: click "+" in the upper left corner to add a widget, open the widget center and see the "Create widget".
    
    ![The self-build widget of space](https://developers.aitable.ai/assets/images/custom-widget-18d92a75e86719944d9fb300ea7ee9c5.png)
    
3.  Edit self-built widget information:
    
    1.  Enter name
        
    2.  Select to start development from a component template
        
        ![Create Widget](https://developers.aitable.ai/assets/images/create-widget-22c8a4c72c34bd0895164e7f9c3cb7ac.png)
        

## Step 2: Install Widget Development Tool[](#step-2-install-widget-development-tool "Direct link to Step 2: Install Widget Development Tool")

Execute the following command in the terminal:

```sh
npm install -g @apitable/widget-cli
```

![Install Widget Development Tool](https://developers.aitable.ai/assets/images/install-cli-e678644635a73ee0bd40f2e1613a50ae.png)

## Step3: Initialize Widget[](#step3-initialize-widget "Direct link to Step3: Initialize Widget")

This step is to authenticate you as a developer and create the project file for the new component.

![Initialize widget](https://developers.aitable.ai/assets/images/init-widget-15d29d9a10eb8ceed9fc2a30e86691a0.png)

If you did not previously generate an API Token, enter the API Token after executing `init` command.

Get API Token as follows:

1.  Sign in to [AITable](https://aitable.ai/) and tap the profile of the lower left corner, enter the User Center and go to the Developer Configuration.
    
2.  Click "+" to generate an API Token.Note that an email address is required when is generated for the first time.
    
3.  Copy API Token.
    

> **Note:**
>
> +   Please secure your API Token, if API Token leaks, others may tamper with data in your datasheet.
> +   If the API Token is leaked, you can regenerate the Token in the Developer Configuration screen to ensure data security.

## Step 4: Launch Widget[](#step-4-launch-widget "Direct link to Step 4: Launch Widget")

This step is intended to start the local service of the widget into the development mode.

![Launch Widget](https://developers.aitable.ai/assets/images/start-widget-29d26b73105ff8ea8f008b5443863521.png)

## Step 5: Previewing the Widget[](#step-5-previewing-the-widget "Direct link to Step 5: Previewing the Widget")

To successfully preview a custom widget in the widget panel, you need to lift the browser's security restrictions on loading local code. Follow these steps:

### Solution 1: allow-insecure-localhost (for older versions of Chrome)[](#solution-1-allow-insecure-localhost-for-older-versions-of-chrome "Direct link to Solution 1: allow-insecure-localhost (for older versions of Chrome)")

1.  Copy and paste the following code into the Chrome browser URL bar:
    
    ```tsx
    chrome://flags/#allow-insecure-localhost
    ```
    
2.  Enable "Allow invalid certificates for resources loaded from localhost" option.
    
3.  Restart your browser.
    

### Solution 2: temporary-unexpire-flags-m118 (may be removed in future versions)[](#solution-2-temporary-unexpire-flags-m118-may-be-removed-in-future-versions "Direct link to Solution 2: temporary-unexpire-flags-m118 (may be removed in future versions)")

For newer versions of Chrome where #allow-insecure-localhost flag is not available, follow these steps:

1.  Copy and paste the following code into the Chrome browser URL bar:
    
    ```tsx
    chrome://flags/#temporary-unexpire-flags-m118
    ```
    
2.  Enable this flag to allow insecure localhost connections.
    
3.  Restart your browser.
    
4.  Copy and paste the following code into the Chrome browser URL bar:
    
    ```tsx
    chrome://flags/#allow-insecure-localhost
    ```
    
5.  Enable "Allow invalid certificates for resources loaded from localhost" option.
    
6.  Restart your browser.
    

> Note: This method may not work long-term due to potential updates in future versions of Chrome.

### Solution 3: Manually access local resources once[](#solution-3-manually-access-local-resources-once "Direct link to Solution 3: Manually access local resources once")

1.  Run your small program development environment using `widget-cli start` command and obtain a local service address like `https://localhost:9000/widget_bundle.js`.
    
    ![allow_insecure_1](https://developers.aitable.ai/assets/images/allow_insecure_1-3e06d4b38ecfc14c367e24a0c33cb706.png)
    
2.  Directly access this address in your browser.
    
    ![allow_insecure_2](https://developers.aitable.ai/assets/images/allow_insecure_2-879aaca26bfe717e19c12055ec2ec96b.png)
    
3.  Your browser may block access due to security issues. Click on "Advanced" option and select "Proceed to localhost (unsafe)" to grant access.
    
    ![allow_insecure_3](https://developers.aitable.ai/assets/images/allow_insecure_3-634e035b17547946ed8ca254e8166e65.png)
    
    ![allow_insecure_4](https://developers.aitable.ai/assets/images/allow_insecure_4-4be655945a4cc28a87c4ace05c12c92c.png)
    
    ![allow_insecure_5](https://developers.aitable.ai/assets/images/allow_insecure_5-d8377f2b67a39140e9851e5de44e2f95.png)
    

After completing these steps, you can proceed with previewing the widget.

> Why do you need to do this?
>
> When developing small programs, it is necessary to load resources with local addresses using HTTPS protocol due to browser security specifications. Therefore, lifting the security restrictions on loading local HTTPS code is essential for normal functioning of widgets.

## Step 6: Publish Widget[](#step-6-publish-widget "Direct link to Step 6: Publish Widget")

Once your self-built widget is done, you can publish it to the widget center for use by other space members.

We need to do some better work before performing the release action：

1.  Prepare a 64\*64 png image as your widget icon, replacing `package_icon.png` in the root directory.
    
2.  Enter the root directory `widget.config.json` file modification `name` and `description`, give your widget a name and description.
    

After the development has been completed and previewed correctly, enter the terminal Ctrl + C out of operation, then perform the following command to publish：

```tsx
widget-cli release// If you are using the community version or a private version and have not configured an external address for OSS, you need to specify the upload address for the compiled code.widget-cli release --uploadHost <host>
```

![Publish widget](https://developers.aitable.ai/assets/images/release-widget-e0d9c91325d7eaf360e2ffc28bfb7a0c.png)

Once published, your widget code will be uploaded to the our server.

At this point, you can click "Exit Development Mode" in the widget menu. You can see the effect of your latest widget and see your newly released widget below the widget center -> Custom.

At the same time, it needs to be noted that self-built widgets can only be published and updated by the account of their creator.If you need to change the publisher of the self-built widget will be able to transfer publication rights to the creator or the administrator of space.

![Transfer the publishing rights of the widget](https://developers.aitable.ai/assets/images/transfer-widget-ownership-a733d6d54fd76c6f1ea6bbfd68380f7e.png)

## Widget Project File Directory Structure[](#widget-project-file-directory-structure "Direct link to Widget Project File Directory Structure")

Open the widget folder, you will see the following directory structure:

```text
my-widget├── dist/├── node_modules/├── src/│   └── index.ts├── .gitignore├── .apitable.yml├── author_icon.png├── cover.png├── package_icon.png├── package.json└── widget.config.json
```

+   dist/: File addresses where you have built up. You do not need to modify the contents of this folder
    
+   node\_modules/: standard JavaScript dependency directory, you don't need to modify the content under this folder
    
+   src/: This is your main directory where most development work is done here.
    
+   .gitignore: describes which files need to be ignored by git, usually don't need to edit this file
    
+   **.apitable.yml: private configuration file, which will always store host and token's local caches, widget-cli will automatically maintain the contents inside without manual editing**
    
    +   host: The host of the AITable API, usually does not need to be modified
    +   token: User token to see if the current user has posting rights to the widget. Keep and manage it
+   author\_icon.png: user avatar image, 64\*64 png file, you can replace it with the avatar you want
    
+   cover.png: user avatars,16:9 png file, recommend 464\*264 and you can replace it with the image you want
    
+   package\_icon: widget icon, 64\*64 png file that you can replace with the widget icon you want
    
+   package.json: standard JavaScript dependency file that you can maintain based on community standards
    
+   **widget.config.json: widget config file that contains configuration information such as name or description, and you can modify it as needed.The next section is described in detail.**
    

### widget.config.json[](#widgetconfigjson "Direct link to widget.config.json")

```js
{  /** [Automatic Generation] The ID of the widget code package, automatically generates automatically during initialization */  "packageId": "wpkvaNpJiDstV",  /** [Automatic Generation] The ID of the global widget code package is automatically generated when it is published to the global situation */  "globalPackageId": "wpkSybhcxsmGM"  /** [Automatic Generation] Space ID, a widget must bind a space */  "spaceId": "spczdmQDfBAn5",  /** [Automatic Generation] Entrobic code entrance, support JS and TS */  "entry": "./src/index.ts",  /** [Modified] Widget name, displayed in the small program installation interface */  "name": {    "zh-CN": "开发者模板",    "en-US": "developerTemplate"  },  /** [Modified] The widget icon path, automatically upload when publishing, display in the widget installation interface, please use 64x64 PNG files */  "icon": "./package_icon.png",  /** [Modified] The cover map of the widget, automatically upload when publishing, display in the widget installation interface, please use 16: 9 pictures. It is recommended to use 464 x 264 PNG or JPG files */  "cover": "./cover.png",  /** [Modified] [Optional] The author's name, displayed in the widget installation interface (the custom widget in the space does not take effect) */  "authorName": "AITable",  /** [Modifying] [Optional] The author's icon path, automatically upload when publishing, display in the widget installation interface, please use 64x64 PNG files (the custom widget in the space does not take effect) */  "authorIcon": "./author_icon.png",  /** [Modified] [Optional] Author's official website address, click the author's icon to jump (the custom widget in the space does not take effect) */  "authorLink": "https://aitable.ai",  /** [Modified] [Optional] The author contact the email (the custom widget in the space does not take effect) */  "authorEmail": "dev@aitable.ai",  /** [Modified] The widget description, displayed in the widget installation interface */  "description": {    "zh-CN": "developerTemplate 的描述",    "en-US": "developerTemplate description"  },  /** [Optional] The sandbox environment, whether to start the sandbox environment rendering widget */  "sandbox": true,  /** [Optional] Operating environment (mobile: mobile terminal, desktop: desktop end), specify the operating environment of the widget, if you do not fill in the default ["mobile", "desktop"]  */  "runtimeEnv": ["mobile", "desktop"],  /** [Optional] Installation environment (dashboard: dashboard, Panel: widget panel), specify the installation environment of the widget, if you do not fill in the default ["dashboard", "Panel"] */  "installEnv": ["dashboard", "panel"]}
```

section end



section title: How to add css | AITable Developer Center

url: https://developers.aitable.ai/widget/use-css

section start

+   [](https://developers.aitable.ai/)
+   How to add css

## How to add css

`widget-cli` has built-in `style-loader` and `css-loader`, and supports `esModule` to import `css`.

## Here is an example[](#here-is-an-example "Direct link to Here is an example")

In the widget development directory

```text
├── src│   ├── index.css│   ├── index.tsx
```

index.css

```css
  .redColor {    color: red;  }
```

index.tsx

### esModule[](#esmodule "Direct link to esModule")

```tsx
  import React from 'react';  import style from './index.css';  export const Example: React.FC = () => {    return <div className={style.redColor}>a red div</div>  }
```

### External css[](#external-css "Direct link to External css")

> **Note:** It is only supported when the sandbox environment is enabled

```ts
  import './index.css';  export const Example: React.FC = () => {    return <div className='redColor'>a red div</div>  }
```

## To use a third-party UI component library[](#to-use-a-third-party-ui-component-library "Direct link to To use a third-party UI component library")

If you need to use a third-party UI component library, we currently recommend using [MUI](https://mui.com/getting-started/usage/).

section end

# Widget API Reference

# Models

section title: Datasheet | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet

section start

## Datasheet

[model/datasheet](https://developers.aitable.ai/widget/api-reference/modules/model_datasheet).Datasheet

Datasheet operation

It is recommended to use if you want to operate datasheet, such as obtaining datasheet data, adding records, deleting records, etc., we recommend using the [useDatasheet](https://developers.aitable.ai/widget/api-reference/modules/hooks_use_datasheet#usedatasheet) hook function.

If you need to obtain record data, you can use [useRecord](https://developers.aitable.ai/widget/api-reference/modules/hooks_use_record#userecord) (query single record data) and [useRecords](https://developers.aitable.ai/widget/api-reference/modules/hooks_use_records#userecords) (batch query record data).

+   [addRecord](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#addrecord): Creates a new record with the specified cell values
    
+   [addRecords](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#addrecords): Creates multiple new records with the specified cell values
    
+   [setRecord](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#setrecord): Updates cell values for a record
    
+   [setRecords](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#setrecords): Updates cell values for multiple records
    
+   [deleteRecord](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#deleterecord): Delete the given record
    
+   [deleteRecords](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#deleterecords): Delete the given records
    
+   [addField](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#addfield): Creates a new field
    
+   [deleteField](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#deletefield): Delete the given field
    
+   [checkPermissionsForAddRecord](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#checkpermissionsforaddrecord): Checks whether the current user has permission to create the specified record
    
+   [checkPermissionsForAddRecords](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#checkpermissionsforaddrecords): Checks whether the current user has permission to create the specified records
    
+   [checkPermissionsForSetRecord](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#checkpermissionsforsetrecord): Checks whether the current user has permission to perform the given record update
    
+   [checkPermissionsForSetRecords](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#checkpermissionsforsetrecords): Checks whether the current user has permission to perform the given record updates
    
+   [checkPermissionsForDeleteRecord](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#checkpermissionsfordeleterecord): Checks whether the current user has permission to delete the specified record
    
+   [checkPermissionsForDeleteRecords](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#checkpermissionsfordeleterecords): Checks whether the current user has permission to delete the specified records
    
+   [checkPermissionsForAddField](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#checkpermissionsforaddfield): Checks whether the current user has permission to create the specified field
    
+   [checkPermissionsForDeleteField](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#checkpermissionsfordeletefield): Checks whether the current user has permission to delete the specified field
    

## Accessors[](#accessors "Direct link to Accessors")

### id[](#id "Direct link to id")

• `get` **id**(): `undefined` | `string`

The unique ID of this datasheet.

#### Returns[](#returns "Direct link to Returns")

`undefined` | `string`

#### Example[](#example "Direct link to Example")

```js
console.log(myDatasheet.id);// => 'dstxxxxxxx'
```

---

### name[](#name "Direct link to name")

• `get` **name**(): `undefined` | `string`

The name of the Datasheet.

#### Returns[](#returns-1 "Direct link to Returns")

`undefined` | `string`

#### Example[](#example-1 "Direct link to Example")

```js
console.log(myDatasheet.name);// => 'Name'
```

## Methods[](#methods "Direct link to Methods")

### addRecord[](#addrecord "Direct link to addRecord")

▸ **addRecord**(`valuesMap?`, `insertPosition?`): `Promise`<`string`\>

Creates a new record with the specified cell values.

#### Parameters[](#parameters "Direct link to Parameters")

| Name              | Type                                                         | Description                                     |
| ----------------- | ------------------------------------------------------------ | ----------------------------------------------- |
| `valuesMap`       | `Object`                                                     | object mapping fieldId to value for that field. |
| `insertPosition?` | [`IInsertPosition`](https://developers.aitable.ai/widget/api-reference/interfaces/interface_modal.IInsertPosition) | position to insert in view.                     |

#### Returns[](#returns-2 "Direct link to Returns")

`Promise`<`string`\>

The returned promise will resolve to the recordId of the new record once it is persisted.

#### Description[](#description "Direct link to Description")

Adds a new record and optionally specifies its position in the view (default at the end), returning an array of new record IDs.

An error will be thrown when the user does not have permission to perform the operation or when the cell value format check does not pass.

Refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType) for cell value write formats.

#### Example[](#example-2 "Direct link to Example")

```js
async function addNewRecord(valuesMap) {  if (datasheet.checkPermissionsForAddRecord(valuesMap).acceptable) {    const newRecordId = await datasheet.addRecord(valuesMap);    alert(`The newly created record ID is ${newRecordId}`);    // Next, you can select, or manipulate, the newly created records.    // ...  }}// The key of the parameter is the fieldId and the value is the cell value.addNewRecord({  fld1234567980: 'this is a text value',  fld0987654321: 1024,});// Different types of field cell values have specific data structures that need to be passed in correctlyaddNewRecord({  fld1234567890: 'this is a text value', // SingleLineText  fld0987654321: 1024, // Number  fld1234567891: 'option 1', // SingleSelect  fld1234567892: ['option 1', 'option 2'], // MultiSelect  fld1234567893:  1635513510962, // DateTime  fld1234567894: ['rec1234567'], // MagicLink (recordId)});
```

---

### addRecords[](#addrecords "Direct link to addRecords")

▸ **addRecords**(`records?`, `insertPosition?`): `Promise`<`string`\[\]>

Creates new records with the specified cell values.

#### Parameters[](#parameters-1 "Direct link to Parameters")

| Name              | Type                                                         | Default value | Description                                                  |
| ----------------- | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| `records`         | { `valuesMap`: { \[key: string\]: `any`; } }\[\]             | `[]`          | Array of objects with a fields key mapping fieldId to value for that field. |
| `insertPosition?` | [`IInsertPosition`](https://developers.aitable.ai/widget/api-reference/interfaces/interface_modal.IInsertPosition) | `undefined`   | Position to insert in the view.                              |

#### Returns[](#returns-3 "Direct link to Returns")

`Promise`<`string`\[\]>

The returned promise will resolve to an array of recordIds of the new records once the new records are persisted.

#### Description[](#description-1 "Direct link to Description")

Add multiple records and optionally specify its position in the view (inserted at the end by default).

An error will be thrown when the user does not have permission to perform the operation or when the cell value format check does not pass.

Refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType) for cell value write formats.

#### Example[](#example-3 "Direct link to Example")

```js
const records = [  // Cell values should generally have format matching the output of  {    valuesMap: {      fld1234567890: 'this is a text value',      fld0987654321: 1024,    },  },  // Specifying no fields will create a new record with no cell values set  {    valuesMap: {},  },  // Different types of field cell values have specific data structures that need to be passed in correctly  {    valuesMap: {      fld1234567890: 'Cat video 2', // SingleLineText      fld0987654321: 1024, // Number      fld1234567891: 'option 1', // SingleSelect      fld1234567892: ['option 1', 'option 2'], // MultiSelect      fld1234567893:  1635513510962, // DateTime (Timestamp)      fld1234567894: ['rec1234567'], // MagicLink (recordId)    },  },];async function addNewRecords() {  if (datasheet.checkPermissionToAddRecords(records)) {    const recordIds = await datasheet.addRecords(records);    alert(`new records with IDs: ${recordIds}`);    // Next, you can select, or manipulate, the newly created records    // ...  }}
```

---

### setRecord[](#setrecord "Direct link to setRecord")

▸ **setRecord**(`recordId`, `valuesMap?`): `Promise`<`void`\>

Updates cell values for a record.

#### Parameters[](#parameters-2 "Direct link to Parameters")

| Name        | Type     | Description                                                  |
| ----------- | -------- | ------------------------------------------------------------ |
| `recordId`  | `string` | the record to update.                                        |
| `valuesMap` | `Object` | key for fieldId, value for the contents of the cell object, only need to pass to modify the value, do not need to modify the key value do not need to pass. To empty a field, you need to pass key: null. |

#### Returns[](#returns-4 "Direct link to Returns")

`Promise`<`void`\>

#### Description[](#description-2 "Direct link to Description")

Throws an error if the user does not have permission to update the given cell values in the record, or or recordId does not exist, or when the written value type does not match.

We refer to a field in a record as a cell. Refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType) for cell value write formats.

If you need to modify multiple records at the same time, use the [setRecords](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#setrecords).

#### Example[](#example-4 "Direct link to Example")

```js
function setRecord(recordId, valuesMap) {  if (datasheet.checkPermissionsForSetRecord(recordId, valuesMap).acceptable) {    datasheet.setRecord(recordId, valuesMap);  }}
```

---

### setRecords[](#setrecords "Direct link to setRecords")

▸ **setRecords**(`records`): `Promise`<`void`\>

Updates cell values for records.

#### Parameters[](#parameters-3 "Direct link to Parameters")

| Name      | Type                                                         | Description                      |
| --------- | ------------------------------------------------------------ | -------------------------------- |
| `records` | { `id`: `string` ; `valuesMap`: { \[key: string\]: `any`; } }\[\] | Specify the records be modified. |

#### Returns[](#returns-5 "Direct link to Returns")

`Promise`<`void`\>

#### Description[](#description-3 "Direct link to Description")

Throws an error if the user does not have permission to update the given cell values in the record, or or recordId does not exist, or when the written value type does not match.

valuesMap key for fieldId, value for the contents of the cell object, only need to pass to modify the value, do not need to modify the key value do not need to pass. To empty a field, you need to pass key: null.

We refer to a field in a record as a cell. Refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType) for cell value write formats.

If you only need to modify a single record, use the [setRecord](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#setrecord)

#### Example[](#example-5 "Direct link to Example")

```js
function setRecord(id, valuesMap) {  if (datasheet.checkPermissionsForSetRecords([{ id, valuesMap }]).acceptable) {    datasheet.setRecords([{ id, valuesMap }]);  }}
```

---

### deleteRecord[](#deleterecord "Direct link to deleteRecord")

▸ **deleteRecord**(`recordId`): `Promise`<`void`\>

Delete the given record.

#### Parameters[](#parameters-4 "Direct link to Parameters")

| Name       | Type     | Description               |
| ---------- | -------- | ------------------------- |
| `recordId` | `string` | the record to be deleted. |

#### Returns[](#returns-6 "Direct link to Returns")

`Promise`<`void`\>

#### Description[](#description-4 "Direct link to Description")

Delete a record by recordId.

Throws an error if the user does not have permission to delete the given record.

#### Example[](#example-6 "Direct link to Example")

```js
async function deleteRecord(recordId) {  if (datasheet.checkPermissionsForDeleteRecord(recordId).acceptable) {    await datasheet.deleteRecord(recordId);    alert('The record has been deleted');    // Record deletion has been saved to servers  }}
```

---

### deleteRecords[](#deleterecords "Direct link to deleteRecords")

▸ **deleteRecords**(`recordIds`): `Promise`<`void`\>

Delete the given records.

#### Parameters[](#parameters-5 "Direct link to Parameters")

| Name        | Type         | Description         |
| ----------- | ------------ | ------------------- |
| `recordIds` | `string`\[\] | array of recordIds. |

#### Returns[](#returns-7 "Direct link to Returns")

`Promise`<`void`\>

#### Description[](#description-5 "Direct link to Description")

Delete the given record by recordIds.

Throws an error if the user does not have permission to delete the given record.

#### Example[](#example-7 "Direct link to Example")

```js
async function deleteRecords(recordIds) {  if (datasheet.checkPermissionsForDeleteRecords(recordIds).acceptable) {    await datasheet.deleteRecords(recordIds);    alert('The records has been deleted');    // Records deletion has been saved to servers  }}
```

---

### addField[](#addfield "Direct link to addField")

▸ **addField**(`name`, `type`, `property`): `Promise`<`string`\>

Creates a new field.

#### Parameters[](#parameters-6 "Direct link to Parameters")

| Name       | Type                                                         | Description                                                  |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`     | `string`                                                     | name for the field. must be case-insensitive unique          |
| `type`     | [`FieldType`](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType) | type for the field.                                          |
| `property` | `any`                                                        | property for the field. omit for fields without writable property. |

#### Returns[](#returns-8 "Direct link to Returns")

`Promise`<`string`\>

#### Description[](#description-6 "Direct link to Description")

Refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType) for supported field types, the write format for property, and other specifics for certain field types.

Throws an error if the user does not have permission to create a field, if invalid name, type or property are provided, or if creating fields of this type is not supported.

#### Example[](#example-8 "Direct link to Example")

```js
function addField(name, type, property) {  if (datasheet.checkPermissionsForAddField(name, type, property).acceptable) {    datasheet.addField(recordIds);  }}
```

---

### deleteField[](#deletefield "Direct link to deleteField")

▸ **deleteField**(`fieldId`, `conversion?`): `Promise`<`void`\>

Delete the given field.

#### Parameters[](#parameters-7 "Direct link to Parameters")

| Name          | Type                                                         | Description                                                  |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fieldId`     | `string`                                                     | the field to be deleted.                                     |
| `conversion?` | [`Conversion`](https://developers.aitable.ai/widget/api-reference/enums/interface_modal.Conversion) | When deleting a field as an associated field, mark whether the associated field of the associated datasheet is deleted or converted to text, the default is Converted to a text field. |

#### Returns[](#returns-9 "Direct link to Returns")

`Promise`<`void`\>

#### Description[](#description-7 "Direct link to Description")

Throws an error if the user does not have permission to delete a field.

#### Example[](#example-9 "Direct link to Example")

```js
function deleteField(fieldId) {  if (datasheet.checkPermissionsForDeleteField(fieldId).acceptable) {    datasheet.deleteField(fieldId);  }}
```

---

### checkPermissionsForAddRecord[](#checkpermissionsforaddrecord "Direct link to checkPermissionsForAddRecord")

▸ **checkPermissionsForAddRecord**(`valuesMap?`): [`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

Checks whether the current user has permission to create the specified record.

#### Parameters[](#parameters-8 "Direct link to Parameters")

| Name         | Type     | Description                                     |
| ------------ | -------- | ----------------------------------------------- |
| `valuesMap?` | `Object` | object mapping fieldId to value for that field. |

#### Returns[](#returns-10 "Direct link to Returns")

[`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

#### Description[](#description-8 "Direct link to Description")

Accepts partial input, in the same format as [addRecord](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#addrecord). The more information provided, the more accurate the permissions check will be.

The format of valuesMap is the same as when writing to cells. For cell value writing format, refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType).

Returns `{acceptable: true}` if the current user can create the specified record.

Returns `{acceptable: false, message: string}` if no permission to operate, message may be used to display an error message to the user.

#### Example[](#example-10 "Direct link to Example")

```js
// Check if user can create a specific record, when you already know what// fields/cell values will be set for the record.const setRecordCheckResult = datasheet.checkPermissionsForAddRecord({  'fld1234567890': 'Advertising campaign',  'fld0987654321': 1024,});if (!setRecordCheckResult.acceptable) {  alert(setRecordCheckResult.message);}// Check if user could potentially create a record.// Use when you don't know the specific fields/cell values yet (for example,// to show or hide UI controls that let you start creating a record.)const addUnknownRecordCheckResult =  datasheet.checkPermissionsForAddRecord();
```

---

### checkPermissionsForAddRecords[](#checkpermissionsforaddrecords "Direct link to checkPermissionsForAddRecords")

▸ **checkPermissionsForAddRecords**(`records?`): [`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

Checks whether the current user has permission to create the specified records.

#### Parameters[](#parameters-9 "Direct link to Parameters")

| Name       | Type                                             | Description                                               |
| ---------- | ------------------------------------------------ | --------------------------------------------------------- |
| `records?` | { `valuesMap`: { \[key: string\]: `any`; } }\[\] | Array of objects mapping fieldId to value for that field. |

#### Returns[](#returns-11 "Direct link to Returns")

[`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

#### Description[](#description-9 "Direct link to Description")

array of objects mapping fieldId to value for that field.

Accepts partial input, in the same format as [addRecords](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#addrecords). The more information provided, the more accurate the permissions check will be.

The format of records is the same as when writing to cells. For cell value writing format, refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType).

Returns `{acceptable: true}` if the current user can update the specified record.

Returns `{acceptable: false, message: string}` if no permission to operate, message may be used to display an error message to the user.

#### Example[](#example-11 "Direct link to Example")

```js
// Check if user can update a specific records, when you already know what// fields/cell values will be set for the record.const addRecordsCheckResult = datasheet.checkPermissionsForAddRecords([  {    valuesMap: {      fld1234567890: 'this is a text value',      fld0987654321: 1024,    },  },  {    valuesMap: {      fld1234567890: 'this is another text value',      fld0987654321: 256,    },  },  {},]);if (!addRecordsCheckResult.acceptable) {  alert(addRecordsCheckResult.message);}// Check if user could potentially create a record.// Use when you don't know the specific fields/cell values yet (for example,// to show or hide UI controls that let you start creating a record.)// same as checkPermissionsForSetRecordconst addUnknownRecordCheckResult =  datasheet.checkPermissionsForAddRecords();
```

---

### checkPermissionsForSetRecord[](#checkpermissionsforsetrecord "Direct link to checkPermissionsForSetRecord")

▸ **checkPermissionsForSetRecord**(`recordId?`, `valuesMap?`): [`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

Checks whether the current user has permission to perform the given record update.

#### Parameters[](#parameters-10 "Direct link to Parameters")

| Name         | Type     | Description                                                 |
| ------------ | -------- | ----------------------------------------------------------- |
| `recordId?`  | `string` | the record to update                                        |
| `valuesMap?` | `Object` | specified as object mapping fieldId to value for that field |

#### Returns[](#returns-12 "Direct link to Returns")

[`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

[IPermissionResult](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

#### Description[](#description-10 "Direct link to Description")

This method performs **permission** and **value legality** checks based on the level of detail of the value passed in. Passing in valuesMap will check the legality of cell writes and column permissions, and passing in recordId will check the existence of records and modification permissions.

The format of records is the same as when writing to cells. For cell value writing format, refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType).

Returns `{acceptable: true}` if the current user can update the specified record.

Returns `{acceptable: false, message: string}` if no permission to operate, message may be used to display an error message to the user.

#### Example[](#example-12 "Direct link to Example")

```js
// Check if user can update specific fields for a specific recordconst setRecordCheckResult =  datasheet.checkPermissionsForSetRecord('rec1234567', {    'fld1234567890': 'this is a text value',    'fld0987654321': 1024,  });if (!setRecordCheckResult.acceptable) {  alert(setRecordCheckResult.message);}// Checks if a user has permission to modify a record, but does not check if the specific value can be modifiedconst setUnknownFieldsCheckResult =  datasheet.checkPermissionsForSetRecord('rec1234567');// Check whether the user has permission to modify the corresponding field, do not care about the specific recordconst setUnknownRecordCheckResult =  datasheet.checkPermissionsForSetRecord(undefined, {    'fld1234567890': 'this is a text value',        // You can also choose not to pass in a specific value and use undefined instead, which will not perform a value type check    'fld0987654321': undefined,  });// Check if user could perform updates within the datasheet, without knowing the// specific record or fields that will be updated yet (e.g., to render your// extension in "read only" mode)const setUnknownRecordAndFieldsCheckResult =  datasheet.checkPermissionsForSetRecord();
```

---

### checkPermissionsForSetRecords[](#checkpermissionsforsetrecords "Direct link to checkPermissionsForSetRecords")

▸ **checkPermissionsForSetRecords**(`records`): [`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

Checks whether the current user has permission to perform the given record updates.

#### Parameters[](#parameters-11 "Direct link to Parameters")

| Name      | Type                                                         | Description                                                  |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `records` | { `id?`: `string` ; `valuesMap?`: { \[key: string\]: `any`; } }\[\] | Array of objects containing recordId and fields/cellValues to update for that records. |

#### Returns[](#returns-13 "Direct link to Returns")

[`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

[IPermissionResult](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

#### Description[](#description-11 "Direct link to Description")

This method performs **permission** and **value legality** checks based on the level of detail of the value passed in. Passing in valuesMap will check the legality of cell writes and column permissions, and passing in recordId will check the existence of records and modification permissions.

The format of records is the same as when writing to cells. For cell value writing format, refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType).

Returns `{acceptable: true}` if the current user can update the specified records.

Returns `{acceptable: false, message: string}` if no permission to operate, message may be used to display an error message to the user.

#### Example[](#example-13 "Direct link to Example")

```js
const recordsToSet = [  {    // Validating a complete record update    id: record1.id,    valuesMap: {      // fields can be specified by ID      fld1234567890: 'this is a text value',      fld0987654321: 1024,    },  },  {    id: record2.id,    valuesMap: {      // If only a fieldId is passed, only the cell of this record will be modified, and the other cells will not be modified      fld1234567890: 'another text value',    },  },  {    // Validating an update to a specific record, not knowing what fields will be updated    id: record3.id,  },  {    // Validating an update to specific cell values, not knowing what record will be updated    valuesMap: {      fld1234567890: 'another text value',      // You can use undefined if you know you're going to update a field, but don't know the new cell value yet.      fld0987654321: undefined,    },  },];const checkResult = datasheet.checkPermissionsForSetRecords(recordsToSet);if (!checkResult.acceptable) {  console.log(checkResult.message);}// Check if user could potentially update records.// Equivalent to datasheet.checkPermissionsForSetRecord()const setUnknownRecordAndFieldsCheckResult =  datasheet.checkPermissionsForSetRecords();
```

---

### checkPermissionsForDeleteRecord[](#checkpermissionsfordeleterecord "Direct link to checkPermissionsForDeleteRecord")

▸ **checkPermissionsForDeleteRecord**(`recordId?`): [`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

Checks whether the current user has permission to delete the specified record.

#### Parameters[](#parameters-12 "Direct link to Parameters")

| Name        | Type     | Description               |
| ----------- | -------- | ------------------------- |
| `recordId?` | `string` | the record to be deleted. |

#### Returns[](#returns-14 "Direct link to Returns")

[`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

#### Description[](#description-12 "Direct link to Description")

Accepts optional input.

Returns `{acceptable: true}` if the current user can delete the specified record.

Returns `{acceptable: false, message: string}` if no permission to operate, message may be used to display an error message to the user.

#### Example[](#example-14 "Direct link to Example")

```js
// Check if user can delete a specific recordconst deleteRecordCheckResult =  datasheet.checkPermissionsForDeleteRecord(recordId);if (!deleteRecordCheckResult.acceptable) {  alert(deleteRecordCheckResult.message);}// Check if user could potentially delete a record.// Use when you don't know the specific record you want to delete yet (for// example, to show/hide UI controls that let you select a record to delete).const deleteUnknownRecordCheckResult =  datasheet.checkPermissionsForDeleteRecord();
```

---

### checkPermissionsForDeleteRecords[](#checkpermissionsfordeleterecords "Direct link to checkPermissionsForDeleteRecords")

▸ **checkPermissionsForDeleteRecords**(`recordIds?`): [`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

Checks whether the current user has permission to delete the specified records.

#### Parameters[](#parameters-13 "Direct link to Parameters")

| Name         | Type         | Description                |
| ------------ | ------------ | -------------------------- |
| `recordIds?` | `string`\[\] | the records to be deleted. |

#### Returns[](#returns-15 "Direct link to Returns")

[`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

#### Description[](#description-13 "Direct link to Description")

Accepts optional input.

Returns `{acceptable: true}` if the current user can delete the specified records.

Returns `{acceptable: false, message: string}` if no permission to operate, message may be used to display an error message to the user.

#### Example[](#example-15 "Direct link to Example")

```js
// Check if user can delete specific recordsconst deleteRecordsCheckResult =  datasheet.checkPermissionsForDeleteRecords([recordId1. recordId2]);if (!deleteRecordsCheckResult.acceptable) {  alert(deleteRecordsCheckResult.message);}// Check if user could potentially delete records.// Use when you don't know the specific records you want to delete yet (for// example, to show/hide UI controls that let you select records to delete).// Equivalent to datasheet.checkPermissionsForDeleteRecordconst deleteUnknownRecordsCheckResult =  datasheet.checkPermissionsForDeleteRecords();
```

---

### checkPermissionsForAddField[](#checkpermissionsforaddfield "Direct link to checkPermissionsForAddField")

▸ **checkPermissionsForAddField**(`name?`, `type?`, `property?`): [`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

Checks whether the current user has permission to create a field.

#### Parameters[](#parameters-14 "Direct link to Parameters")

| Name        | Type                                                         | Description                                                  |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name?`     | `string`                                                     | name for the field. must be case-insensitive unique.         |
| `type?`     | [`FieldType`](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType) | type for the field.                                          |
| `property?` | `any`                                                        | property for the field. omit for fields without writable property. |

#### Returns[](#returns-16 "Direct link to Returns")

[`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

#### Description[](#description-14 "Direct link to Description")

Accepts partial input, in the same format as [addField](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet#addfield).

Returns `{acceptable: true}` if the current user can create the specified field.

Returns `{acceptable: false, message: string}` if no permission to operate, message may be used to display an error message to the user.

#### Example[](#example-16 "Direct link to Example")

```js
// Checks whether the current user has permission to create a fieldconst addFieldCheckResult =  datasheet.checkPermissionsForAddField(recordId);if (!addFieldCheckResult.acceptable) {  alert(addFieldCheckResult.message);}// Check if user could potentially create a field.// Use when you don't know the specific a field you want to create yet (for example,// to show or hide UI controls that let you start creating a field.)const addUnknownFieldCheckResult =  datasheet.checkPermissionsForAddField();
```

---

### checkPermissionsForDeleteField[](#checkpermissionsfordeletefield "Direct link to checkPermissionsForDeleteField")

▸ **checkPermissionsForDeleteField**(`fieldId?`): { `acceptable`: `false` ; `message`: `string` } | { `acceptable`: `boolean` = true }

Checks whether the current user has permission to delete a field.

#### Parameters[](#parameters-15 "Direct link to Parameters")

| Name       | Type     | Description             |
| ---------- | -------- | ----------------------- |
| `fieldId?` | `string` | the field to be deleted |

#### Returns[](#returns-17 "Direct link to Returns")

{ `acceptable`: `false` ; `message`: `string` } | { `acceptable`: `boolean` = true }

#### Description[](#description-15 "Direct link to Description")

Returns `{acceptable: true}` if the current user can delete the specified field.

Returns `{acceptable: false, message: string}` if no permission to operate, message may be used to display an error message to the user.

#### Example[](#example-17 "Direct link to Example")

```js
// Checks whether the current user has permission to delete a field.const deleteFieldCheckResult =  datasheet.checkPermissionsForDeleteField(fieldId);if (!deleteFieldCheckResult.acceptable) {  alert(deleteFieldCheckResult.message);}// Check if user could potentially delete a field.// Use when you don't know the specific a field you want to delete yet (for// example, to show/hide UI controls that let you select a field to delete).const deleteUnknownFieldCheckResult =  datasheet.checkPermissionsForDeleteField();
```

section end



section title: Field | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/classes/model_field.Field

section start

## Field

[model/field](https://developers.aitable.ai/widget/api-reference/modules/model_field).Field

Number datasheet column operations and information.

To manipulate the number datasheet columns, you can use [useField](https://developers.aitable.ai/widget/api-reference/modules/hooks_use_field#usefield) (single column information), [useFields](https://developers.aitable.ai/widget/api-reference/modules/hooks_use_fields#usefields) (multiple column information).

## Accessors[](#accessors "Direct link to Accessors")

### id[](#id "Direct link to id")

• `get` **id**(): `string`

The ID for this model.

#### Returns[](#returns "Direct link to Returns")

`string`

#### Example[](#example "Direct link to Example")

```js
console.log(myField.id);// => 'fld1234567'
```

---

### name[](#name "Direct link to name")

• `get` **name**(): `string`

The name of the field. Can be watched.

#### Returns[](#returns-1 "Direct link to Returns")

`string`

#### Example[](#example-1 "Direct link to Example")

```js
console.log(myField.name);// => 'Name'
```

---

### type[](#type "Direct link to type")

• `get` **type**(): [`FieldType`](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType)

The type of the field. Can be watched. [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType)

#### Returns[](#returns-2 "Direct link to Returns")

[`FieldType`](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType)

#### Example[](#example-2 "Direct link to Example")

```js
console.log(myField.type);// => 'SingleLineText'
```

---

### description[](#description "Direct link to description")

• `get` **description**(): `null` | `string`

The description of the field, if it has one. Can be watched.

#### Returns[](#returns-3 "Direct link to Returns")

`null` | `string`

#### Example[](#example-3 "Direct link to Example")

```js
console.log(myField.description);// => 'This is my field'
```

---

### property[](#property "Direct link to property")

• `get` **property**(): [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType)

The configuration property of the field. The structure of the field's property depend on the field's type. null if the field has no property. Can be watched. Refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType).

#### Returns[](#returns-4 "Direct link to Returns")

`any`

[FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType)

#### Example[](#example-4 "Direct link to Example")

```js
import { FieldType } from '@apitable/widget-sdk';if (myField.type === FieldType.Currency) {    console.log(myField.options.symbol);    // => '￥'}
```

---

### isComputed[](#iscomputed "Direct link to isComputed")

• `get` **isComputed**(): `boolean`

true if this field is computed, false otherwise. A field is "computed" if it's value is not set by user input (e.g. autoNumber, magic lookup, magic formula, etc.). Can be watched

#### Returns[](#returns-5 "Direct link to Returns")

`boolean`

#### Example[](#example-5 "Direct link to Example")

```js
console.log(mySingleLineTextField.isComputed);// => falseconsole.log(myAutoNumberField.isComputed);// => true
```

---

### isPrimary[](#isprimary "Direct link to isPrimary")

• `get` **isPrimary**(): `boolean`

true if this field is its parent table's primary field, false otherwise. Should never change because the primary field of a datasheet cannot change.

#### Returns[](#returns-6 "Direct link to Returns")

`boolean`

---

### required[](#required "Direct link to required")

• `get` **required**(): `null` | `boolean`

Is the magic form required.

#### Returns[](#returns-7 "Direct link to Returns")

`null` | `boolean`

## Methods[](#methods "Direct link to Methods")

### getPropertyInView[](#getpropertyinview "Direct link to getPropertyInView")

▸ **getPropertyInView**(`viewId`): `null` | [`IPropertyInView`](https://developers.aitable.ai/widget/api-reference/interfaces/interface_modal.IPropertyInView)

Get the current view feature properties, such as whether the field is hidden in a view

#### Parameters[](#parameters "Direct link to Parameters")

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| `viewId` | `string` | the view ID |

#### Returns[](#returns-8 "Direct link to Returns")

`null` | [`IPropertyInView`](https://developers.aitable.ai/widget/api-reference/interfaces/interface_modal.IPropertyInView)

#### Example[](#example-6 "Direct link to Example")

```js
const propertyInView = field.getPropertyInView('viwxxxxx');console.log(propertyInView?.hidden)
```

---

### updateDescription[](#updatedescription "Direct link to updateDescription")

▸ **updateDescription**(`description`): `Promise`<`void`\>

Updates the description for this field.

Throws an error if the user does not have permission to update the field, or if an invalid description is provided.

#### Parameters[](#parameters-1 "Direct link to Parameters")

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| `description` | `null` | `string`    |

#### Returns[](#returns-9 "Direct link to Returns")

`Promise`<`void`\>

#### Example[](#example-7 "Direct link to Example")

```js
 field.updateDescription('this is a new description')
```

---

### updateProperty[](#updateproperty "Direct link to updateProperty")

▸ **updateProperty**(`property`, `options?`): `Promise`<`void`\>

Beta API, future changes are possible.

Updates the property for this field, tips: that the update property configuration must be overwritten in full.

Throws an error if the user does not have permission to update the field, if invalid property are provided, if this field has no writable property, or if updates to this field type is not supported.

Refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType) for supported field types, the write format for property, and other specifics for certain field types.

#### Parameters[](#parameters-2 "Direct link to Parameters")

| Name       | Type                                                         | Description                                            |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| `property` | `any`                                                        | new property for the field.                            |
| `options?` | [`IEffectOption`](https://developers.aitable.ai/widget/api-reference/interfaces/interface_modal.IEffectOption) | optional options to affect the behavior of the update. |

#### Returns[](#returns-10 "Direct link to Returns")

`Promise`<`void`\>

#### Example[](#example-8 "Direct link to Example")

```js
function addOptionToSelectField(selectField, nameForNewOption) {    const updatedOptions = {        options: [            ...selectField.options,            {name: nameForNewOption},        ]    };    if (selectField.hasPermissionToUpdateOptions(updatedOptions)) {        selectField.updateProperty(updatedOptions);    }}
```

---

### hasPermissionForUpdateDescription[](#haspermissionforupdatedescription "Direct link to hasPermissionForUpdateDescription")

▸ **hasPermissionForUpdateDescription**(`description?`): `boolean`

Checks whether the current user has permission to perform the given description update.

#### Parameters[](#parameters-3 "Direct link to Parameters")

| Name           | Type     | Description                                      |
| -------------- | -------- | ------------------------------------------------ |
| `description?` | `string` | new description for the field, Length limit 200. |

#### Returns[](#returns-11 "Direct link to Returns")

`boolean`

#### Example[](#example-9 "Direct link to Example")

```js
const canUpdateFieldDescription = field.hasPermissionForUpdateDescription();if (!canUpdateFieldDescription) {  alert('not allowed!');}
```

---

### hasPermissionForUpdateProperty[](#haspermissionforupdateproperty "Direct link to hasPermissionForUpdateProperty")

▸ **hasPermissionForUpdateProperty**(`property?`): `boolean`

Check whether the current user has permission to perform the given option update.

Property about the update write format, refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType).

#### Parameters[](#parameters-4 "Direct link to Parameters")

| Name        | Type  | Description                 |
| ----------- | ----- | --------------------------- |
| `property?` | `any` | new property for the field. |

#### Returns[](#returns-12 "Direct link to Returns")

`boolean`

#### Example[](#example-10 "Direct link to Example")

```js
const canUpdateFieldProperty = field.hasPermissionForUpdateProperty();if (!canUpdateFieldProperty) {  alert('not allowed!');}
```

---

### checkPermissionForUpdateProperty[](#checkpermissionforupdateproperty "Direct link to checkPermissionForUpdateProperty")

▸ **checkPermissionForUpdateProperty**(`property?`): [`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

Check whether the current user has permission to perform the given option update.

#### Parameters[](#parameters-5 "Direct link to Parameters")

| Name        | Type  | Description                 |
| ----------- | ----- | --------------------------- |
| `property?` | `any` | new property for the field. |

#### Returns[](#returns-13 "Direct link to Returns")

[`IPermissionResult`](https://developers.aitable.ai/widget/api-reference/modules/interface_modal#ipermissionresult)

#### Description[](#description-1 "Direct link to Description")

Accepts partial input, in the same format as [updateProperty](https://developers.aitable.ai/widget/api-reference/classes/model_field.Field#updateproperty).

property about the update write format, refer to [FieldType](https://developers.aitable.ai/widget/api-reference/enums/interface_field_types.FieldType).

Returns `{acceptable: true}` if the current user can update the specified property.

Returns `{acceptable: false, message: string}` if no permission to operate, message may be used to display an error message to the user.

#### Example[](#example-11 "Direct link to Example")

```js
// Check whether the current user has permission to perform the given property update, // when the update is accompanied by a write, it can also be verified at the same time.const updatePropertyCheckResult = field.checkPermissionForUpdateProperty({  defaultValue: '1',});if (!updatePropertyCheckResult.acceptable) {  alert(updatePropertyCheckResult.message);}// Check if user could potentially update a property.// Use when you don't know the specific a property you want to update yet (for example,// to show or hide UI controls that let you start update a property.)const updatePropertyCheckResult =  field.checkPermissionForUpdateProperty();
```

section end



section title: Record | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/classes/model_record.Record

section start

+   [](https://developers.aitable.ai/)
+   [API Reference](https://developers.aitable.ai/widget/api-reference)
+   Models
+   Record

## Record

[model/record](https://developers.aitable.ai/widget/api-reference/modules/model_record).Record

Datasheet row operations and information.

Get the rows record, you can use [useRecord](https://developers.aitable.ai/widget/api-reference/modules/hooks_use_record#userecord) (querying single record data), [useRecords](https://developers.aitable.ai/widget/api-reference/modules/hooks_use_records#userecords) (batch query of record data)

## Methods[](#methods "Direct link to Methods")

### getCellValue[](#getcellvalue "Direct link to getCellValue")

▸ **getCellValue**(`fieldId`): `any`

Gets the cell value of the given field for this record.

#### Parameters[](#parameters "Direct link to Parameters")

| Name      | Type     | Description                                      |
| --------- | -------- | ------------------------------------------------ |
| `fieldId` | `string` | The field ID whose cell value you'd like to get. |

#### Returns[](#returns "Direct link to Returns")

`any`

#### Example[](#example "Direct link to Example")

```js
const cellValue = myRecord.getCellValue(mySingleLineTextFieldId);console.log(cellValue);// => 'cell value'
```

---

### getCellValueString[](#getcellvaluestring "Direct link to getCellValueString")

▸ **getCellValueString**(`fieldId`): `null` | `string`

Gets the cell value of the given field of record, and convert to string type.

#### Parameters[](#parameters-1 "Direct link to Parameters")

| Name      | Type     |
| --------- | -------- |
| `fieldId` | `string` |

#### Returns[](#returns-1 "Direct link to Returns")

`null` | `string`

#### Example[](#example-1 "Direct link to Example")

```js
const stringValue = myRecord.getCellValueString(myNumberFieldId);console.log(stringValue);// => '42'
```

---

### url[](#url "Direct link to url")

▸ **url**(`viewId?`): `string`

The URL address of the record, which you can access in your browser, opens the Wiggle Table interface and locates the record

#### Parameters[](#parameters-2 "Direct link to Parameters")

| Name      | Type     |
| --------- | -------- |
| `viewId?` | `string` |

#### Returns[](#returns-2 "Direct link to Returns")

`string`

## Accessors[](#accessors "Direct link to Accessors")

### id[](#id "Direct link to id")

• `get` **id**(): `string`

The ID for this record.

#### Returns[](#returns-3 "Direct link to Returns")

`string`

---

### title[](#title "Direct link to title")

• `get` **title**(): `null` | `string`

The primary cell value in this record, formatted as a string.

#### Returns[](#returns-4 "Direct link to Returns")

`null` | `string`

#### Example[](#example-2 "Direct link to Example")

```js
console.log(myRecord.title);// => '42'
```

---

### commentCount[](#commentcount "Direct link to commentCount")

• `get` **commentCount**(): `number`

The number of comments on this record.

#### Returns[](#returns-5 "Direct link to Returns")

`number`

section end

# hooks

section title: useActiveCell | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_active_cell

section start

Get the coordinates of cell where the cursor is currently active, return a [ICell](https://developers.aitable.ai/widget/api-reference/interfaces/interface_modal.ICell). Rerendering is triggered, When the cursor is moved or the view is switched.

If you need to information not only about the activated cell, but also the selection, please use [useSelection](https://developers.aitable.ai/widget/api-reference/modules/hooks_use_selection#useselection).

```js
import { useActiveCell, useRecord } from '@apitable/widget-sdk';// Render the value of currently selected cellfunction ActiveCell() {  const activeCell = useActiveCell();  const activeRecord = useRecord(activeCell?.recordId);  if (!activeCell || !activeRecord) {    return <p>Cells without activation</p>  }  return <p>Activated Cells: {activeRecord.getCellValueString(activeCell.fieldId)}</p>}
```

section end



section title: useActiveViewId | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_active_view_id

section start

## useActiveViewId

Get the view ID of currently active view, return a value of string. When views switched, re-rendering is triggered.

#### Returns[](#returns "Direct link to Returns")

`undefined` | `string`

### Example[](#example "Direct link to Example")

```js
import { useActiveViewId, useViewMeta } from '@apitable/widget-sdk';// Render the currently selected view namefunction ActiveView() {  const activeViewId = useActiveViewId();  const viewMeta = useViewMeta(activeViewId);  if (!viewMeta) {    return <p>Inactive view</p>  }  return <p>Currently active views: {viewMeta.name}</p>}
```

section end



section title: useCloudStorage | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_cloud_storage

section start

Widget data storage. For the currently running widget, provide a `useState` - like interface to store, data is read and written by a specified key, if you set the value multiple times the data will be sent to the collaborator at 500ms intervals, key-value pairs are stored persistently. When the value changes, re-render is triggered, changes in value may from other collaborator, and it is not recommended to set default value when the widget first installed, because the initial default value is the same of multiple collaborators. Setting defaults multiple times can result in pointless performance waste or event dead loops, and data should be set up after changes in external data.

are \[return value, setValue function, permission to write or not\] respectively.

```js
import { useCloudStorage } from '@apitable/widget-sdk';// A simple counterfunction Counter() {  const [counter, setCounter, editable] = useCloudStorage('counter', 0);  return (    <div>      Counter: {counter}      <Button size="small" disable={!editable} onClick={() => setCounter(counter + 1)}>+</Button>      <Button size="small" disable={!editable} onClick={() => setCounter(counter - 1)}>-</Button>    </div>  );}
```

section end



section title: useCollaborators | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_collaborators

section start

Get information(including yourself) about collaborators of the environment where the widget is currently running, which include dashboard, datasheet, mirror.

Writing to member field cells using collaborator IDs is not supported at this time.

Note: Since the datasheet can be shared, the id, name, and avatar of the collaborator in the case of not being logged in are undefined.

{ `id`: `undefined` | `string` ; `name`: `undefined` | `string` ; `avatar`: `undefined` | `string` }\[\]

```js
import { useCollaborators } from '@apitable/widget-sdk';// show the currently environment collaborator of the widgetfunction Meta() {  const collaborators = useCollaborators();  return (<div>    <div>Current collaborator: {collaborators.map(collaborator => {      return <p>{collaborator.name || 'Aliens'}</p>    })}</div>  </div>);}
```

section end



section title: useDatasheet | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_datasheet

section start

A hook for connecting a React component to your datasheet's schema. Datasheet will provide the interface to make update to datasheet date, and check permission.

```js
import { useDatasheet } from '@apitable/widget-sdk';function AddRecord() {  const datasheet = useDatasheet();  const [error, setError] = useState();  // The key of the parameter is the fieldId and the value is the cell value  const valuesMap = {    fld1234567980: 'this is a text value',    fld0987654321: 1024,  }  function addRecord(valuesMap) {    if (!datasheet) {      return;    }    const permission = datasheet.checkPermissionsForAddRecord(valuesMap)    if (permission.acceptable) {      datasheet.addRecord(valuesMap);      return;    }    setError(permission.message);  }  return (<div>    {error && <p>{error}</p>}    <button onClick={() => addRecord(valuesMap)}>add a new record</button>  </div>);}
```

section end



section title: useExpandRecord | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_expand_record

section start

you can use this methods to initialize, and get a more focused editing experience by executing the function to expand a record modal.

A function that expands the modal for a record with the specified parameters.

```js
import { useExpandRecord, useRecords } from '@apitable/widget-sdk';// expand first recordfunction ExpandFirstRecord() {  const firstRecord = useRecords(view.id)[0];  const expandRecord = useExpandRecord();  return <button onClick={() => expandRecord({recordIds: [firstRecord?.id]})}>Expand first record</button>;}
```

section end



section title: useField | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_field

section start

+   [](https://developers.aitable.ai/)
+   [API Reference](https://developers.aitable.ai/widget/api-reference)
+   Hooks
+   useField

## useField

Get information about a specified field. Rerendering is triggered when a field property changes.

If no ID is passed in, undefined is returned.

#### Parameters[](#parameters "Direct link to Parameters")

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| `fieldId` | `string` | `undefined` |

#### Returns[](#returns "Direct link to Returns")

[`Field`](https://developers.aitable.ai/widget/api-reference/classes/model_field.Field) | `undefined`

### Example[](#example "Direct link to Example")

```js
import { useField } from '@apitable/widget-sdk';// show field namefunction FieldName() {  const field = useField('fldXXXXXXX');  return <p>{field.name}</p>}
```

▸ **useField**(`datasheet`, `fieldId`): [`Field`](https://developers.aitable.ai/widget/api-reference/classes/model_field.Field) | `undefined`

## Support for loading the corresponding datasheet data field.[](#support-for-loading-the-corresponding-datasheet-data-field "Direct link to Support for loading the corresponding datasheet data field.")

#### Parameters[](#parameters-1 "Direct link to Parameters")

| Name        | Type                                                         | Description |
| ----------- | ------------------------------------------------------------ | ----------- |
| `datasheet` | [`Datasheet`](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet) | `undefined` |
| `fieldId`   | `string`                                                     | `undefined` |

#### Returns[](#returns-1 "Direct link to Returns")

[`Field`](https://developers.aitable.ai/widget/api-reference/classes/model_field.Field) | `undefined`

### Example[](#example-1 "Direct link to Example")

```js
import { useField, useDatasheet } from '@apitable/widget-sdk';// show field name corresponding to the datasheetId(dstXXXXXXXX) datasheetfunction FieldName() {  const datasheet = useDatasheet('dstXXXXXXXX');  const field = useField(datasheet, 'fldXXXXXXX');  return <p>{field.name}</p>}
```

section end



section title: useFields | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_fields

section start

Get information about all fields(columns) of currently view. Rerendering is triggered when the fields property/columns order changes.

If not viewId passed in, an empty array is returned.

```js
import { useFields, useDatasheet } from '@apitable/widget-sdk';// Show all field names corresponding to the datasheetId(dstXXXXXXXX) datasheetfunction FieldNames() {  const datasheet = useDatasheet('dstXXXXXXXX');  const fields = useFields(datasheet, 'vieXXXXXXX');  return (<div>    {fields.map(field => <p key={field.id}>{field.name}</p>)}  </div>);}
```

section end



section title: useMeta | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_meta

section start

## useMeta

Get meta information of the widget, including the widget itself, the author, the information in datasheet, etc.

#### Returns[](#returns "Direct link to Returns")

[`IMetaType`](https://developers.aitable.ai/widget/api-reference/interfaces/interface_modal.IMetaType)

### Example[](#example "Direct link to Example")

```js
import { useMeta } from '@apitable/widget-sdk';// Show the datasheet and author associated with the widgetfunction Meta() {  const { datasheetName, authorName } = useMeta();  return (<div>    <p>Name of the datasheet associated with the widget: {datasheetName}</p>    <p>Widget author: {authorName}</p>  </div>);}
```

section end



section title: usePrimaryField | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_primary_field

section start

Get information of primary field. Rerendering is triggered when a field property changes.

primary field info.

```js
import { usePrimaryField, useDatasheet } from '@apitable/widget-sdk';// Show primary field namefunction PrimaryFieldName() {  const field = usePrimaryField();  return <p>{field.name}</p>}// Show corresponding datasheetId(dstXXXXXXXX) Name of the primary field of the datasheet function DatasheetPrimaryFieldName() {  const useDatasheet = useDatasheet('dstXXXXXXXX');  const field = usePrimaryField(useDatasheet);  return <p>{field.name}</p>}
```

section end



section title: useRecord | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_record

section start

+   [](https://developers.aitable.ai/)
+   [API Reference](https://developers.aitable.ai/widget/api-reference)
+   Hooks
+   useRecord

## useRecord

Gets information of a specified record. Rerendering is triggered when the value of record, field property changes.

If not ID is passed in, undefined is returned.

#### Parameters[](#parameters "Direct link to Parameters")

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| `recordId` | `string` | `undefined` |

#### Returns[](#returns "Direct link to Returns")

`DynamicRecord`

### Example[](#example "Direct link to Example")

```js
import { useRecord } from '@apitable/widget-sdk';// Show record titlefunction RecordTitle() {  const record = useRecord('recXXXXXXX');  return <p>{record.title}</p>}
```

▸ **useRecord**(`datasheet`, `recordId`): `DynamicRecord`

## Support for loading the corresponding datasheet data record.[](#support-for-loading-the-corresponding-datasheet-data-record "Direct link to Support for loading the corresponding datasheet data record.")

#### Parameters[](#parameters-1 "Direct link to Parameters")

| Name        | Type                                                         | Description                                                  |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `datasheet` | [`Datasheet`](https://developers.aitable.ai/widget/api-reference/classes/model_datasheet.Datasheet) | Datasheet instance, by [useDatasheet](https://developers.aitable.ai/widget/api-reference/modules/hooks_use_datasheet#usedatasheet) get. |
| `recordId`  | `string`                                                     | `undefined`                                                  |

#### Returns[](#returns-1 "Direct link to Returns")

`DynamicRecord`

### Example[](#example-1 "Direct link to Example")

```js
import { useRecord, useDatasheet } from '@apitable/widget-sdk';// Show the primary key of record the corresponding to the datasheetId(dstXXXXXXXX) datasheetfunction RecordTitle() {  const datasheet = useDatasheet('dstXXXXXXXX);  const record = useRecord('recXXXXXXX');  return <p>{record.title}</p>}
```



section end



section title: useRecords | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_records

section start

Gets all the records under a given view in the datasheet. Rerendering is triggered when the value of record, view configuration, field configuration changes. Get all the records may cause lag due to a sharp increase in computation, so please use caution and test well.

```js
import { useRecords, useViewsMeta, useDatasheet } from '@apitable/widget-sdk';// Show the primary key of records the corresponding to the datasheetId(dstXXXXXXXX) datasheetfunction RecordsTitle() {  const datasheet = useDatasheet('dstXXXXXXXX');  const viewsMeta = useViewsMeta(datasheet);  const records = useRecords(datasheet, viewsMeta[0]?.id);  return (    <div>      {records.map(record => <p>{record.title}</p>)}    </div> );}
```

section end



section title: useRecordsAll | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_records_all

section start

`Beta API`, possible future changes.

Get all the records in the datasheet. Rerendering is triggered when the value of record, view configuration, or field configuration changes. Get all the records may cause lag due to a sharp increase in computation, so please use caution and test well.

```js
import { useRecordsAll, useDatasheet } from '@apitable/widget-sdk';// Show record titlefunction RecordsTitle() {  const records = useRecordsAll();  return (<div>    {records.map(record => <p>{record.title}</p>)}  </div>);}// Show the primary key of records the corresponding to the datasheetId(dstXXXXXXXX) datasheetfunction DatasheetRecordsTitle() {  const useDatasheet = useDatasheet('dstXXXXXXXX');  const records = useRecordsAll(useDatasheet);  return (<div>    {records.map(record => <p>{record.title}</p>)}  </div>);}
```

section end



section title: useSelection | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_selection

section start

Get the recordId and fieldId of the region selected by the current cell cursor. Rerendering is triggered when the cursor is moved or the view is switched.

```js
import { useSelection, useRecords, useFields, useActiveViewId } from '@apitable/widget-sdk';// Render the currently selection informationfunction Selection() {  const selection = useSelection();  const viewId = useActiveViewId();  const records = useRecords(viewId, { ids: selection?.recordIds });  const fields = useFields(viewId, { ids: selection?.fieldIds });  return (<table>    <thead>      <tr>        {fields.map(field => <th key={field.id}>{field.name || '_'}</th>)}      </tr>    </thead>    <tbody>      {records.map(record =>        <tr key={record.id}>          {fields.map(field =>            <td key={field.id}>{record.getCellValueString(field.id) || '_'}</td>          )}       </tr>      )}    </tbody>  </table>);}
```

section end



section title: useSession | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_session

section start

## useSession

### useSession[](#usesession "Direct link to useSession")

▸ **useSession**(): [`ISession`](https://developers.aitable.ai/widget/api-reference/interfaces/hooks_use_session.ISession)

Get information about the current users of the widget.

Notes: Since the datasheet can be share out, the id, name, avatar, ect. of the user information in the case of not logged in is undefined.

#### Returns[](#returns "Direct link to Returns")

[`ISession`](https://developers.aitable.ai/widget/api-reference/interfaces/hooks_use_session.ISession)

### Example[](#example "Direct link to Example")

```js
import { useSession } from '@apitable/widget-sdk';// Show the currently users name of the widget.function Meta() {  const session = useSession();  return (<div>    <p>{session.user.name}</p>  </div>);}
```

section end



section title: useSettingsButton | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_settings_button

section start

When using this hooks, the settings button will be displayed at the top of the widget window. Returns the button's activation state, will be re-rendered when setting that is clicked. You can use toggleSetting actively change the button activation state. The settings screen requires developers to manage the show/hide state themselves via the isShowingSettings state.

```js
import { useSettingsButton } from '@apitable/widget-sdk';// Show a widget with  a settings screenfunction ComponentWithSettings() {  const [isShowingSettings, toggleSettings] = useSettingsButton();  return (<div>    <p>Settings open: {isShowingSettings ? 'yes' : 'no'}</p>    <button onClick={() => toggleSettings()}>Tap me to switch the settings screen</button>    {isShowingSettings && <SettingsComponent>}  </div>);}
```

section end



section title: useViewIds | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_view_ids

section start

Gets the ID of all view of the currently datasheet. Rerendering is triggered when the number of views changes.

```js
import { useViewIds, useDatasheet } from '@apitable/widget-sdk';// Display the total number of views function ViewCount() {  const viewIds = useViewIds();  return <p>There are currently {viewIds.length} views</p>;}// Displays the total number of views corresponding to the datasheetId(dstXXXXXXXX) datasheetfunction DatasheetViewCount() {  const datasheet = useDatasheet('dstXXXXXXXX');  const viewIds = useViewIds(datasheet);  return <p>There are currently {viewIds.length} views</p>;}
```

section end



section title: useViewMeta | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_view_meta

section start

Beta API\`, possible future changes.

Gets the metadata property of the view. Pass in a viewId, and return undefined when the viewId is illegal or does not exist. Rerendering is triggered when the metadata property changes.

```js
import { useViewMeta, useDatasheet } from '@apitable/widget-sdk';// Show the current view name of the corresponding datasheetId(dstXXXXXXXX) datasheet.function ViewName() {  const datasheet = useDatasheet('dstXXXXXXXX');  const viewMeta = useViewMeta(datasheet, 'viwXXXXXXX');  return <p>Current view name: {viewMeta?.name}</p>;}
```

section end



section title: useViewport | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_viewport

section start

## useViewport

Return information related to the widget windows, and change function. When windows changes, re-rendering is triggered.

#### Returns[](#returns "Direct link to Returns")

`Object`

### Example[](#example "Direct link to Example")

```js
import { useViewport } from '@apitable/widget-sdk';// Full-screen display and control of the widgetfunction Viewport() {  const { isFullscreen, toggleFullscreen } = useViewport();  return (<div>    <p>Widget expand full screen: {isFullscreen ? 'yes' : 'no'}</p>    <button onClick={() => toggleFullscreen()}>Tap me to switch the widget to expand</button>  </div>);}
```

| Name               | Type                            |
| ------------------ | ------------------------------- |
| `isFullscreen`     | `boolean`                       |
| `toggleFullscreen` | (`state?`: `boolean`) => `void` |

section end



section title: useViewsMeta | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/hooks_use_views_meta

section start

`Beta API`, possible feature changes.

Get the metadata property of the all views. Rerendering is triggered when the order of views changes or the metadata property changes.

```js
import { useViewsMeta, useDatasheet } from '@apitable/widget-sdk';// Show all views namefunction ViewNames() {  const viewsMeta = useViewsMeta();  return (<div>    {viewsMeta.map(viewMeta => <p>View names: {viewMeta.name}</p>)}  </div>);}// Show the names of all views corresponding to the datasheetId(dstXXXXXXXX) datasheet function DatasheetViewNames() {  const datasheet = useDatasheet('dstXXXXXXXX');  const viewsMeta = useViewsMeta(datasheet);  return (<div>    {viewsMeta.map(viewMeta => <p>View names: {viewMeta.name}</p>)}  </div>);}
```

section end



# utils

section title: language | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/utils_language

section start

## language

### getLanguage[](#getlanguage "Direct link to getLanguage")

▸ **getLanguage**(): [`LangType`](https://developers.aitable.ai/widget/api-reference/enums/utils_language.LangType)

Used to get the current system language

## Example[](#example "Direct link to Example")

```js
import { getLanguage, LangType } from '@apitable/widget-sdk';if (getLanguage() === LangType.ZhCN) {  console.log('Current system language is Chinese');}
```

#### Returns[](#returns "Direct link to Returns")

[`LangType`](https://developers.aitable.ai/widget/api-reference/enums/utils_language.LangType)

section end



section title: upload | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/utils_upload

section start

An upload file method that can be used to upload a file and go through the attachment field writing.

```ts
import React, { useState } from 'react';import { upload, useDatasheet } from '@apitable/widget-sdk';function UploadFile() {  const datasheet = useDatasheet();  const [progress, setProgress] = useState(0);  const [error, setError] = useState();  function uploadFile(file) {    datasheet && upload({      file,      datasheetId: datasheet?.datasheetId,      onProgress: ({ loaded, total }) => {        setProgress(loaded / total);      }    }).then(response => {    const valuesMap = { fldGi8tYQfXcc: [response] };    const permission = datasheet.checkPermissionsForAddRecord(valuesMap);      if (permission.acceptable) {        datasheet.addRecord(valuesMap);      } else {        setError(permission.message);      }    });  }  return (    <div>      <input type="file" onChange={(e) => {        e.target.files?.[0] && uploadFile(e.target.files[0])      }}/>      <p>progress: {progress}</p>      { error && <p>error: {error}</p>}    </div>  )}
```

section end



# UI Development Guide



section title: Support dark mode | AITable Developer Center

url: https://developers.aitable.ai/widget/theme

section start

+   [](https://developers.aitable.ai/)
+   [UI Development Guide](https://developers.aitable.ai/widget/category/ui-development-guide)
+   Support dark mode

## Support dark mode

The widget supports dark theme now.Support switching themes by default following the main app.Support two ways to handle the style of multiple themes (default theme, dark theme).

## Using CSS Variables[](#using-css-variables "Direct link to Using CSS Variables")

Refer to [How to use css](https://developers.aitable.ai/widget/use-css) to configure the widget to support css.Use the css variables formatted in [Design tokens](https://developers.aitable.ai/widget/design-tokens) provided by the AITable design team in css (different color schemes for different themes).

### Using in the style file[](#using-in-the-style-file "Direct link to Using in the style file")

Use as follows.

```css
.list {  color: var(--fc1);  box-shadow: var(--shadowCommonShadow2);  background-color: var(--bgCommonDefault);}
```

### Debugging with the browser[](#debugging-with-the-browser "Direct link to Debugging with the browser")

In Google Chrome Console css variables will be prompted with a list of tokens corresponding to your current theme.

![Choose css variables](https://developers.aitable.ai/assets/images/css-variable-tip-ba41c52906dc31d7884b2633beae3967.png)

### Using in inline styles[](#using-in-inline-styles "Direct link to Using in inline styles")

You can also use the colorVars object in the component library @apitable/components to automatically adapt the theme, write it with Typescript type hint variables, or of course write the css variables by hand in string format (not recommended).

```jsx
import { colorVars } from '@apitable/components';export const HelloWorld = () => {  return (     <span style={{      color: colorVars.textCommonPrimary,      background-color: 'var(--bgCommonDefault)';    }}>      Hello World    </span>  )}
```

### Customize css variables[](#customize-css-variables "Direct link to Customize css variables")

You can customize css variables to fit multiple themes, create a new variables.css file to manage custom css variables:

```css
:root[data-theme="light"] {  --custom-variables: xxx;}:root[data-theme="dark"] {  --custom-variables: xxx;}
```

## `ThemeProvider`[](#themeprovider "Direct link to themeprovider")

### Get color variables with hooks[](#get-color-variables-with-hooks "Direct link to Get color variables with hooks")

The widget has been wrapped by default by the ThemeProvider component, which already supports changing themes following the main application theme.Use the useTheme hooks of @apitable/components to get the colors.

```jsx
import { useTheme } from "@apitable/components";export const HelloWorld = () => {  const theme = useTheme();  return (    <span style={{ color: theme.color.textCommonPrimary }}>Hello World</span>  );};
```

### Get theme information[](#get-theme-information "Direct link to Get theme information")

Information on the current topic can be obtained using `useMeta`.

```jsx
import { useMeta } from "@apitable/widget-sdk";const meta = useMeta();const theme = meta.theme;
```

section end



section title: Design Tokens | AITable Developer Center

url: https://developers.aitable.ai/widget/design-tokens

section start

## Design Tokens

AITable defines a set of named patterns that create predictable behavior across tokens.For example, additional levels can be created by adding secondary or third level to any text, icon, or background color, and interaction behavior can be specified by adding hover, selected, and disabled.

## Naming Structure[](#naming-structure "Direct link to Naming Structure")

The AITable token follows the following format.

```text
--{type}-{colorRole}-{prominence}-{interaction}
```

### Type (required)[](#type-required "Direct link to Type (required)")

Required parameter that specifies which type of object we want to assign a color to.Our four types are background `bg`,text&icon `text`, border `border` and shadow `shadow`.For ease of use, text and icons share `text`.

> Example
>
> +   `--bg-common-default`
> +   `--text-common-primary`

### Color Role (required)[](#color-role-required "Direct link to Color Role (required)")

Required parameters, the colors in our user interface have a specific meaning, so we organize the colors according to the way they are used, not the colors themselves.For example, if the theme color is `brand`, it may switch between purple and other colors depending on the theme.

> Example
>
> +   `--bg-brand-default`
> +   `--text-common-primary`
> +   `--bg-warn-default`

### Prominence (optional)[](#prominence-optional "Direct link to Prominence (optional)")

Optional parameters to create a visual hierarchy with background, text and icons supporting Level 1, Level 2, Level 3 and Level 4.

> Example
>
> +   `--text-common-secondary`
> +   `--bg-common-lowest`

### Interaction (optional)[](#interaction-optional "Direct link to Interaction (optional)")

Optional Parameters.Some tokens support interaction states such as hover and press.

> Example
>
> +   `--bg-brand-active`
> +   `--text-link-hover`

## Font, icon text color[](#font-icon-text-color "Direct link to Font, icon text color")

variable

Description

Use (js method / css method)

First-level text color, used for main text and icons, such as titles, body text, etc.

colors.textCommonPrimary

var(--textCommonPrimary)

The text color of the second level, used for secondary text and icons, such as body text, sub text, etc.

colors.textCommonSecondary

var(--textCommonSecondary)

The third level of text color, used for unimportant text and icons, such as descriptions, labels, subtitles, etc.

colors.textCommonTertiary

var(--textCommonTertiary)

The fourth level of text color, used for very unimportant text and icons, such as input box placeholders, etc.

colors.textCommonQuaternary

var(--textCommonQuaternary)

Text color of the brand color

colors.textBrandDefault

var(--textBrandDefault)

The hover state of the text color matches the brand color

colors.textBrandHover

var(--textBrandHover)

The active state of the text color of the brand color

colors.textBrandActive

var(--textBrandActive)

Only used on --bg-selected-primary for selected text

colors.textSelectedPrimary

var(--textSelectedPrimary)

Only used on --bg-selected-secondary for selected text

colors.textSelectedSecondary

var(--textSelectedSecondary)

The text color of the danger color, expressing the status of danger, error, failure, etc.

colors.textDangerDefault

var(--textDangerDefault)

hover state for danger colored text

colors.textDangerHover

var(--textDangerHover)

active state for danger-colored text

colors.textDangerActive

var(--textDangerActive)

The text color of the safe color, expressing the status of success, safety, correct, complete, etc.

colors.textSuccessDefault

var(--textSuccessDefault)

The hover state of safe text

colors.textSuccessHover

var(--textSuccessHover)

active state of safe color text

colors.textSuccessActive

var(--textSuccessActive)

The text color of the warning color, expressing the status of reminder, warning, unsafe, etc.

colors.textWarnDefault

var(--textWarnDefault)

The hover state of the warning color text

colors.textWarnHover

var(--textWarnHover)

The active state of the warning color text

colors.textWarnActive

var(--textWarnActive)

link text color

colors.textLinkDefault

var(--textLinkDefault)

The hover state of the link text color

colors.textLinkHover

var(--textLinkHover)

active state of link text color

colors.textLinkActive

var(--textLinkActive)

Visited link text color

colors.textLinkVisted

var(--textLinkVisted)

Inherent first-level text color, generally used for dark backgrounds, does not follow the theme change, such as the text color in the button

colors.textStaticPrimary

var(--textStaticPrimary)

The inherent second-level text color, generally used for dark backgrounds, does not follow the theme, such as the text color in the button

colors.textStaticSecondary

var(--textStaticSecondary)

The inherent third-level text color, generally used for dark backgrounds, does not follow the theme change, such as the text color in the button

colors.textStaticTertiary

var(--textStaticTertiary)

Inverse text colors under different themes, generally used for text in tooltips

colors.textReverseDefault

var(--textReverseDefault)

## Background[](#background "Direct link to Background")

variable

Description

Use (js method / css method)

The background color of the lowest level

colors.bgCommonLower

var(--bgCommonLower)

Medium level background color, used by default

colors.bgCommonDefault

var(--bgCommonDefault)

Higher-level background color, generally used for the background of the floating layer above bg-common-Default

colors.bgCommonHigh

var(--bgCommonHigh)

The highest-level background color, generally used for drop-down/right-click menus, notification reminders, unmasked modal windows, etc.

colors.bgCommonHighest

var(--bgCommonHighest)

Hover state without background elements, such as directory tree node Item, right-click menu Item, etc.

colors.bgBglessHover

var(--bgBglessHover)

Active state without background elements, such as directory tree node Item, right-click menu Item, etc.

colors.bgBglessActive

var(--bgBglessActive)

The background color of regular controls, such as input boxes, selectors, secondary buttons, etc.

colors.bgControlsDefault

var(--bgControlsDefault)

The hover state of the background color of regular controls, such as input boxes, selectors, secondary buttons, etc.

colors.bgControlsHover

var(--bgControlsHover)

The active state of the background color of regular controls, such as input boxes, selectors, secondary buttons, etc.

colors.bgControlsActive

var(--bgControlsActive)

Elements that need to be promoted at the inner level of regular controls

colors.bgControlsElevate

var(--bgControlsElevate)

The background color of regular tag components, such as Two-way Link, MagicLookUp, Member tags, etc.

colors.bgTagDefault

var(--bgTagDefault)

The hover state of the background color of regular tag components, such as Two-way Link, MagicLookUp, Member tags, etc.

colors.bgTagHover

var(--bgTagHover)

The background color of the scrollbar

colors.bgScrollbarDefault

var(--bgScrollbarDefault)

The background color of the modal overlay

colors.bgMaskDefault

var(--bgMaskDefault)

Bg-Selected-Primary-Default

The background color of the selected state, such as selected directory node, toolbar button activation, selected row, etc.

colors.bgSelectedPrimaryDefault

var(--bgSelectedPrimaryDefault)

Bg-Selected-Primary-Hover

The hover state of the background color in the selected state, such as selecting a directory node, activating a toolbar button, selecting a row, etc.

colors.bgSelectedPrimaryHover

var(--bgSelectedPrimaryHover)

Bg-Selected-Primary-Active

The active state of the background color in the selected state, such as selecting a directory node, activating a toolbar button, selecting a row, etc.

colors.bgSelectedPrimaryActive

var(--bgSelectedPrimaryActive)

Bg-Selected-Secondary-Default

The background color of the selected state, such as the state of internal file nodes when a folder is selected

colors.bgSelectedSecondaryDefault

var(--bgSelectedSecondaryDefault)

Bg-Selected-Secondary-Hover

The hover state of the background color in the selected state, such as the state of the internal file node when a folder is selected

colors.bgSelectedSecondaryHover

var(--bgSelectedSecondaryHover)

Bg-Selected-Secondary-Active

The active state of the background color of the selected state, such as the state of the internal file node when a folder is selected

colors.bgSelectedSecondaryActive

var(--bgSelectedSecondaryActive)

Background color of brand color

colors.bgBrandDefault

var(--bgBrandDefault)

The hover state of the background color of the brand color

colors.bgBrandHover

var(--bgBrandHover)

The active state of the background color of the brand color

colors.bgBrandActive

var(--bgBrandActive)

A light version of the brand color background

colors.bgBrandLightDefault

var(--bgBrandLightDefault)

Light version of the hover state for the brand color background

colors.bgBrandLightHover

var(--bgBrandLightHover)

The active state is a light version of the brand color background

colors.bgBrandLightActive

var(--bgBrandLightActive)

The background color of the danger color, expressing danger, error, failure and other states

colors.bgDangerDefault

var(--bgDangerDefault)

The hover state for a dangerously colored background

colors.bgDangerHover

var(--bgDangerHover)

The active state of the background of the hazard color

colors.bgDangerActive

var(--bgDangerActive)

Light version of danger color, expressing danger, error, failure and other states

colors.bgDangerLightDefault

var(--bgDangerLightDefault)

Light version of the hover state of the hazard color

colors.bgDangerLightHover

var(--bgDangerLightHover)

active state in light hazard color

colors.bgDangerLightActive

var(--bgDangerLightActive)

The background color of the safe color, expressing the status of success, safety, correctness, completion, etc.

colors.bgSuccessDefault

var(--bgSuccessDefault)

The hover state of a safe-colored background

colors.bgSuccessHover

var(--bgSuccessHover)

The active state of the background of the safe color

colors.bgSuccessActive

var(--bgSuccessActive)

Light version of safety color, expressing success, safety, correctness, completion and other states

colors.bgSuccessLightDefault

var(--bgSuccessLightDefault)

hover state for light safe colors

colors.bgSuccessLightHover

var(--bgSuccessLightHover)

active state for light safe colors

colors.bgSuccessLightActive

var(--bgSuccessLightActive)

The background color of the warning color, expressing the status of reminder, warning, unsafe, etc.

colors.bgWarnDefault

var(--bgWarnDefault)

The hover state of the background of the warning color

colors.bgWarnHover

var(--bgWarnHover)

The active state of the background of the warning color

colors.bgWarnActive

var(--bgWarnActive)

Light version of warning color, expressing reminder, warning, unsafe and other states

colors.bgWarnLightDefault

var(--bgWarnLightDefault)

Light version of the hover state of the warning color

colors.bgWarnLightHover

var(--bgWarnLightHover)

active state with light warning color

colors.bgWarnLightActive

var(--bgWarnLightActive)

Bright intrinsic color that doesn't follow the theme

colors.bgStaticLight

var(--bgStaticLight)

The inherent color of the dark first level, does not change with the theme, currently used for API panel and template center

colors.bgStaticDarkPrimary

var(--bgStaticDarkPrimary)

Dark second-level inherent color, does not change with the theme, currently used for API panel and template center

colors.bgStaticDarkSecondary

var(--bgStaticDarkSecondary)

Dark third-level inherent color, does not change with the theme, currently used for API panel and template center

colors.bgStaticDarkTertiary

var(--bgStaticDarkTertiary)

The opposite text color under different themes, generally used for the background color of tooltips

colors.bgReverseDefault

var(--bgReverseDefault)

Very light brand purple, generally used for decorative element backgrounds

colors.bgExtralightDeeppurple

var(--bgExtralightDeeppurple)

Very light red, generally used for decorative element backgrounds

colors.bgExtralightRed

var(--bgExtralightRed)

Very light cyan, generally used for decorative element backgrounds

colors.bgExtralightTeal

var(--bgExtralightTeal)

Very light orange, generally used for decorative element backgrounds

colors.bgExtralightOrange

var(--bgExtralightOrange)

Very light blue, generally used for decorative element backgrounds

colors.bgExtralightIndigo

var(--bgExtralightIndigo)

Very light orange, generally used for decorative element backgrounds and background colors for calendar views, Gantt view weekends

colors.bgExtralightGray

var(--bgExtralightGray)

Gradient background color in the horizontal direction, generally used for the transition effect when the upper container blocks the lower elements

colors.bgGradientHorizontal

var(--bgGradientHorizontal)

Gradient background color in the vertical direction, generally used for the transition effect when the upper container blocks the lower elements

colors.bgGradientVertical

var(--bgGradientVertical)

## Stroke[](#stroke "Direct link to Stroke")

variable

Description

Use (js method / css method)

For general dividing lines and strokes

colors.borderCommon

var(--borderCommon)

Grid lines in the vertical direction of the vig view

colors.borderGridVertical

var(--borderGridVertical)

Grid lines in the horizontal direction of the vig view

colors.borderGridHorizontal

var(--borderGridHorizontal)

Stroke of brand color

colors.borderBrand

var(--borderBrand)

Stroke used for elements whose background is the brand color

colors.borderOnbrandDefault

var(--borderOnbrandDefault)

Used for strokes on elements with a light brand color background

colors.borderOnbrandLight

var(--borderOnbrandLight)

Dangerous color strokes, expressing danger, error, failure and other states

colors.borderDanger

var(--borderDanger)

Used for strokes on elements with a hazard-colored background

colors.borderOndangerDefault

var(--borderOndangerDefault)

Used for strokes on elements with a light hazard background

colors.borderOndangerLight

var(--borderOndangerLight)

The stroke of safe color expresses the status of success, safety, correctness and completion

colors.borderSuccess

var(--borderSuccess)

Used for strokes on elements whose background is a safe color

colors.borderOnsuccessDefault

var(--borderOnsuccessDefault)

Used for strokes on elements whose background is a light safe color

colors.borderOnsuccessLight

var(--borderOnsuccessLight)

The stroke of the warning color expresses the status of reminder, warning, unsafe, etc.

colors.borderWarn

var(--borderWarn)

Used for strokes on elements whose background is a warning color

colors.borderOnwarnDefault

var(--borderOnwarnDefault)

Used for strokes on elements whose background is a light alert color

colors.borderOnwarnLight

var(--borderOnwarnLight)

section end



section title: Tokens Guide and Examples | AITable Developer Center

url: https://developers.aitable.ai/widget/tokens-intro

section start

## Tokens Guide and Examples

## Guide[](#guide "Direct link to Guide")

### Which token to use[](#which-token-to-use "Direct link to Which token to use")

Semantic naming of Alias tokens helps associate meaning, context, and/or intent with the design markup you apply to your product.Whenever possible, use alias token instead of using basic token and hex color directly.

![Use Alias token](https://developers.aitable.ai/assets/images/use-alias-token-958ab9e8c62301e17932be9ed38773ed.png)

### Use the corresponding token[](#use-the-corresponding-token "Direct link to Use the corresponding token")

![Use the corresponding token](https://developers.aitable.ai/assets/images/use-right-token-4c46422001fc329cf311327d3ae87b31.png)

## Use Cases[](#use-cases "Direct link to Use Cases")

### Fonts[](#fonts "Direct link to Fonts")

#### General Text[](#general-text "Direct link to General Text")

+   Text-Common-Primary The first level of text color for primary text and icons, such as headings, body text, etc..
+   Text-Common-Secondary The second level of text color for secondary text and icons, such as body text, secondary text, etc..
+   Text-Common-Tertiary The third level of text color for unimportant text and icons, such as descriptions, labels, subheadings, etc..
+   Text-Common-Quaternary Fourth-level text color for very unimportant text and icons, such as input box placeholders, etc.

![General Text](https://developers.aitable.ai/assets/images/text-common-354f95df48ed1de2bf6beb9775d20b23.png)

#### Link color text and status color text[](#link-color-text-and-status-color-text "Direct link to Link color text and status color text")

+   Text-Link-Default Link Text Color
+   Text-Danger-Default The text color of danger, expressing the state of danger, error, failure, etc.
+   Text-Success-Default is a text color that expresses the status of success, safety, correctness, completion, etc.
+   Text-Warn-Default The text color of the warning color, expressing the state of alert, warning, unsafe, etc.

![Link color text and status color text](https://developers.aitable.ai/assets/images/text-link-status-bf4cf9ea2d4c1db1b502a20153b717b4.png)

#### Fixed color text[](#fixed-color-text "Direct link to Fixed color text")

Text-Static-Primary fixed first-level text color, generally used for dark background, does not follow the theme change, such as the text color inside the button

![Fixed color text](https://developers.aitable.ai/assets/images/text-static-primary-5d4e46631d9a8e87aacaa17004d7a41d.png)

### Background[](#background "Direct link to Background")

#### General Background[](#general-background "Direct link to General Background")

+   Bg-Common-Lower The background color of the lowest level
+   Bg-Common-Default The background color of the medium level, which is used by default
+   Bg-Common-High higher-level background color, usually used for the background of the floating layer above Bg-Common-Default
+   Bg-Common-Highest Top-level background color, typically used for drop-down/right-click menus, notification alerts, unmasked modal windows, etc.

![General Background](https://developers.aitable.ai/assets/images/bg-common-a3220c6e3dc928cd2ce24af05123adff.png)

> Simply put, the background color defaults to Bg-Common-Default and uses that as the hierarchical base.Bg-Common-Lowest if you need to use the bottom level, Bg-Common-High if you need some prominent level or hover over Default, and Bg-Common-Highest if you need high attention for various temporary operations such as drop-down menus, notification alerts, and bubble alerts.

#### Control Background[](#control-background "Direct link to Control Background")

+   Background color for Bg-Controls-Common-Default regular controls, such as input boxes, selectors, secondary buttons, etc.
+   Bg-Controls-Common-Hover hover state for the background color of regular controls, such as input boxes, selectors, secondary buttons, etc.
+   Background color for Bg-Controls-Common-Default regular controls, such as input boxes, selectors, secondary buttons, etc.

![Control Background](https://developers.aitable.ai/assets/images/bg-control-97dd6615da73cd48e5221ec0066166fb.png)

#### Interactive state without background elements[](#interactive-state-without-background-elements "Direct link to Interactive state without background elements")

+   Bg-Bgless-Hover hover state of background-free elements, such as directory tree node Item, right-click menu Item, etc.
+   Bg-Bgless-Active active state of background-free elements, such as directory tree node Item, right-click menu Item, etc.

![Interactive state without background elements](https://developers.aitable.ai/assets/images/bg-empty-status-fcb97858786c34d15e775084824b8499.png)

#### Opposite color[](#opposite-color "Direct link to Opposite color")

+   Bg-Reverse-Default is the opposite background color in different themes, usually used for tooltips background color
+   Text-Reverse-Default is the opposite text color in different themes, usually used for text within tooltips

In some cases, it can be useful to apply a light component to a dark background or a dark component to a light background.This helps to gain the user's attention or create visual tension.In this case, the token of the opposite color can be used.

![Opposite color](https://developers.aitable.ai/assets/images/bg-reverse-3d7e516d33652423f8abbc1297f8cb99.png)

### Stroke[](#stroke "Direct link to Stroke")

+   Border-Common-Default is used for general dividing lines, strokes, and is the most commonly used stroke variable
+   Border-Brand-Default brand color stroke

![Stroke](https://developers.aitable.ai/assets/images/border-64088fd23907dcf849f060a7dc92f9cb.png)

### Projection[](#projection "Direct link to Projection")

Shadow-Common-Default lowest-level card projection, such as the projection of regular hover or elements on the page that need to stand out slightly visually

![Default shadow](https://developers.aitable.ai/assets/images/shadow-default-2f1d0614e9d7f375f1651dc532d00766.png)

Shadow-Common-High medium-level card projection, such as temporary floating layers on the page, projection of an unmasked Modal

![Upper projection](https://developers.aitable.ai/assets/images/shadow-high-0573f2c448c0d83d10acb6f62218b286.png)

Shadow-Common-Highest High-level card projections, such as Dropdown, ContextMenu, and Modal projections with masks

![Top layer projection](https://developers.aitable.ai/assets/images/shadow-highest-a81ff26160e1771c648127abcfaf0784.png)

> In general, the projection is related to the background level:
>
> +   Shadow-Common-Default corresponds to the background Bg-Common-Default
> +   Shadow-Common-High Corresponds to the background Bg-Common-High
> +   Shadow-Common-Highest corresponds to the background Bg-Common-Highest

> However, in Modal with masked layers, the background level needs to be reset to Bg-Common-Default, but the projection still uses the Shadow-Common-highest of the higher levels

section end



# Components

section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-color--page&viewMode=story

section start

## Colors

Colors are organized in the pattern of `hue` + `color weight`

+   hue
+   Shade to add shadows to existing colors to make them darker.

## Usage

Taking `purple` as an example, the color palette divides purple into 11 regions, purple\[50\], purple\[100\], purple\[200\]... purple\[1000\], from light to dark.

## Color object data structure

Take the theme color system as an example, where `deepPurple[500]` is the theme color:

## Theme color

## Common color

#E9E9F5

blackBlue\[200\]line color

#F5F7FA

blackBlue\[100\]row selection color

#DCD6FF

deepPurple\[100\]cell selection color

#E33E38

red\[500\]wrong color

#E0E0E0

black\[200\]Projection, table line color

#262626 50%

black\[1000\] 50%mask color

#3C3C3C

black\[900\]bubble color

#FFAB00

orange\[500\]warning color

#30C28B

teal\[500\]success color

#EDEAFF

deepPurple\[50\]directory tree list color

## status color

## Swatches

#### purple

purple\[50\]

#F4E9FE

rgb(244, 233, 254)

Hover

#E4C5FB

rgb(228, 197, 251)

Active

#D8ACFA

rgb(216, 172, 250)

purple\[100\]

#E4C5FB

rgb(228, 197, 251)

Hover

#D8ACFA

rgb(216, 172, 250)

Active

#C789F8

rgb(199, 137, 248)

purple\[200\]

#D8ACFA

rgb(216, 172, 250)

Hover

#C789F8

rgb(199, 137, 248)

Active

#BA6DF6

rgb(186, 109, 246)

purple\[300\]

#C789F8

rgb(199, 137, 248)

Hover

#BA6DF6

rgb(186, 109, 246)

purple\[400\]

#BA6DF6

rgb(186, 109, 246)

Active

#BA6DF6

rgb(186, 109, 246)

#### deep purple

deepPurple\[50\]

#EDEAFF

rgb(237, 234, 255)

Hover

#DCD6FF

rgb(220, 214, 255)

Active

#CEC5FF

rgb(206, 197, 255)

deepPurple\[100\]

#DCD6FF

rgb(220, 214, 255)

Hover

#CEC5FF

rgb(206, 197, 255)

Active

#A697FB

rgb(166, 151, 251)

deepPurple\[200\]

#CEC5FF

rgb(206, 197, 255)

Hover

#A697FB

rgb(166, 151, 251)

Active

#8B7AF0

rgb(139, 122, 240)

deepPurple\[300\]

#A697FB

rgb(166, 151, 251)

Hover

#8B7AF0

rgb(139, 122, 240)

Active

#7B67EE

rgb(123, 103, 238)

deepPurple\[400\]

#8B7AF0

rgb(139, 122, 240)

Hover

#7B67EE

rgb(123, 103, 238)

deepPurple\[500\]

#7B67EE

rgb(123, 103, 238)

Active

#8B7AF0

rgb(139, 122, 240)

Active

#7B67EE

rgb(123, 103, 238)

#### indigo

indigo\[50\]

#E0E9FF

rgb(224, 233, 255)

Hover

#C2D3FF

rgb(194, 211, 255)

Active

#9CB9FF

rgb(156, 185, 255)

indigo\[100\]

#C2D3FF

rgb(194, 211, 255)

Hover

#9CB9FF

rgb(156, 185, 255)

Active

#81A5FF

rgb(129, 165, 255)

indigo\[200\]

#9CB9FF

rgb(156, 185, 255)

Hover

#81A5FF

rgb(129, 165, 255)

Active

#6692FF

rgb(102, 146, 255)

indigo\[300\]

#81A5FF

rgb(129, 165, 255)

Hover

#6692FF

rgb(102, 146, 255)

indigo\[400\]

#6692FF

rgb(102, 146, 255)

Active

#6692FF

rgb(102, 146, 255)

#### blue

blue\[50\]

#E4F7FF

rgb(228, 247, 255)

Hover

#C9EFFF

rgb(201, 239, 255)

Active

#9CE2FF

rgb(156, 226, 255)

blue\[100\]

#C9EFFF

rgb(201, 239, 255)

Hover

#9CE2FF

rgb(156, 226, 255)

Active

#7ED9FF

rgb(126, 217, 255)

blue\[200\]

#9CE2FF

rgb(156, 226, 255)

Hover

#7ED9FF

rgb(126, 217, 255)

Active

#70D5FF

rgb(112, 213, 255)

blue\[300\]

#7ED9FF

rgb(126, 217, 255)

Hover

#70D5FF

rgb(112, 213, 255)

blue\[400\]

#70D5FF

rgb(112, 213, 255)

Active

#70D5FF

rgb(112, 213, 255)

#### teal

teal\[50\]

#E2F6EF

rgb(226, 246, 239)

Hover

#BDECDA

rgb(189, 236, 218)

Active

#8BDDBE

rgb(139, 221, 190)

teal\[100\]

#BDECDA

rgb(189, 236, 218)

Hover

#8BDDBE

rgb(139, 221, 190)

Active

#66D2A9

rgb(102, 210, 169)

teal\[200\]

#8BDDBE

rgb(139, 221, 190)

Hover

#66D2A9

rgb(102, 210, 169)

teal\[300\]

#66D2A9

rgb(102, 210, 169)

#### green

green\[50\]

#E3F5DA

rgb(227, 245, 218)

Hover

#C7F5B1

rgb(199, 245, 177)

Active

#9CE977

rgb(156, 233, 119)

green\[100\]

#C7F5B1

rgb(199, 245, 177)

Hover

#9CE977

rgb(156, 233, 119)

green\[200\]

#9CE977

rgb(156, 233, 119)

#### yellow

yellow\[50\]

#FFF9E3

rgb(255, 249, 227)

Hover

#FFF2C2

rgb(255, 242, 194)

Active

#FFEBA6

rgb(255, 235, 166)

yellow\[100\]

#FFF2C2

rgb(255, 242, 194)

Hover

#FFEBA6

rgb(255, 235, 166)

Active

#FFE588

rgb(255, 229, 136)

yellow\[200\]

#FFEBA6

rgb(255, 235, 166)

Hover

#FFE588

rgb(255, 229, 136)

yellow\[300\]

#FFE588

rgb(255, 229, 136)

#### orange

orange\[50\]

#FFF6E5

rgb(255, 246, 229)

Hover

#FFE5B7

rgb(255, 229, 183)

Active

#FFD88A

rgb(255, 216, 138)

orange\[100\]

#FFE5B7

rgb(255, 229, 183)

Hover

#FFD88A

rgb(255, 216, 138)

orange\[200\]

#FFD88A

rgb(255, 216, 138)

#### tangerine

tangerine\[50\]

#FFEAD6

rgb(255, 234, 214)

Hover

#FFD2A8

rgb(255, 210, 168)

Active

#FFAF66

rgb(255, 175, 102)

tangerine\[100\]

#FFD2A8

rgb(255, 210, 168)

Hover

#FFAF66

rgb(255, 175, 102)

tangerine\[200\]

#FFAF66

rgb(255, 175, 102)

#### pink

pink\[50\]

#FFE8EC

rgb(255, 232, 236)

Hover

#FFCED8

rgb(255, 206, 216)

Active

#FFB2C0

rgb(255, 178, 192)

pink\[100\]

#FFCED8

rgb(255, 206, 216)

Hover

#FFB2C0

rgb(255, 178, 192)

Active

#FF98AC

rgb(255, 152, 172)

pink\[200\]

#FFB2C0

rgb(255, 178, 192)

Hover

#FF98AC

rgb(255, 152, 172)

Active

#FF8199

rgb(255, 129, 153)

pink\[300\]

#FF98AC

rgb(255, 152, 172)

Hover

#FF8199

rgb(255, 129, 153)

Active

#FF708B

rgb(255, 112, 139)

pink\[400\]

#FF8199

rgb(255, 129, 153)

Hover

#FF708B

rgb(255, 112, 139)

pink\[500\]

#FF708B

rgb(255, 112, 139)

Active

#FF8199

rgb(255, 129, 153)

Active

#FF708B

rgb(255, 112, 139)

#### red

red\[50\]

#FBECEB

rgb(251, 236, 235)

Hover

#FFD1C8

rgb(255, 209, 200)

Active

#FFB4AF

rgb(255, 180, 175)

red\[100\]

#FFD1C8

rgb(255, 209, 200)

Hover

#FFB4AF

rgb(255, 180, 175)

Active

#FF8A82

rgb(255, 138, 130)

red\[200\]

#FFB4AF

rgb(255, 180, 175)

Hover

#FF8A82

rgb(255, 138, 130)

red\[300\]

#FF8A82

rgb(255, 138, 130)

#### brown

brown\[50\]

#E8DFDD

rgb(232, 223, 221)

Hover

#D1BFBC

rgb(209, 191, 188)

Active

#B49892

rgb(180, 152, 146)

brown\[100\]

#D1BFBC

rgb(209, 191, 188)

Hover

#B49892

rgb(180, 152, 146)

brown\[200\]

#B49892

rgb(180, 152, 146)

#### black

black\[50\]

#FFFFFF

rgb(255, 255, 255)

Hover

#F5F7FA

rgb(245, 247, 250)

Active

#E0E0E0

rgb(224, 224, 224)

black\[100\]

#F5F7FA

rgb(245, 247, 250)

Hover

#E0E0E0

rgb(224, 224, 224)

Active

#C9C9C9

rgb(201, 201, 201)

black\[200\]

#E0E0E0

rgb(224, 224, 224)

Hover

#C9C9C9

rgb(201, 201, 201)

Active

#A6A6A6

rgb(166, 166, 166)

black\[300\]

#C9C9C9

rgb(201, 201, 201)

Hover

#A6A6A6

rgb(166, 166, 166)

Active

#8C8C8C

rgb(140, 140, 140)

black\[400\]

#A6A6A6

rgb(166, 166, 166)

Hover

#8C8C8C

rgb(140, 140, 140)

Active

#787878

rgb(120, 120, 120)

black\[500\]

#8C8C8C

rgb(140, 140, 140)

Hover

#787878

rgb(120, 120, 120)

black\[600\]

#787878

rgb(120, 120, 120)

Hover

#787878

rgb(120, 120, 120)

Active

#A6A6A6

rgb(166, 166, 166)

Active

#8C8C8C

rgb(140, 140, 140)

Active

#787878

rgb(120, 120, 120)

#### black blue

blackBlue\[50\]

#FDFDFF

rgb(253, 253, 255)

Hover

#F9F9FF

rgb(249, 249, 255)

Active

#E9E9F5

rgb(233, 233, 245)

blackBlue\[100\]

#F9F9FF

rgb(249, 249, 255)

Hover

#E9E9F5

rgb(233, 233, 245)

Active

#D8D9EB

rgb(216, 217, 235)

blackBlue\[200\]

#E9E9F5

rgb(233, 233, 245)

Hover

#D8D9EB

rgb(216, 217, 235)

Active

#BABDD4

rgb(186, 189, 212)

blackBlue\[300\]

#D8D9EB

rgb(216, 217, 235)

Hover

#BABDD4

rgb(186, 189, 212)

Active

#9FA1BB

rgb(159, 161, 187)

blackBlue\[400\]

#BABDD4

rgb(186, 189, 212)

Hover

#9FA1BB

rgb(159, 161, 187)

Active

#8487A1

rgb(132, 135, 161)

blackBlue\[500\]

#9FA1BB

rgb(159, 161, 187)

Hover

#8487A1

rgb(132, 135, 161)

blackBlue\[600\]

#8487A1

rgb(132, 135, 161)

Hover

#8487A1

rgb(132, 135, 161)

Active

#BABDD4

rgb(186, 189, 212)

Active

#9FA1BB

rgb(159, 161, 187)

Active

#8487A1

rgb(132, 135, 161)

## Color processing function

### getActionColor

Parse the colors in the palette to get the colors of the hover and active states. For example: `purple[400]` The result calculated by `getActionColor` is as follows:

{ "hover": "#B35FF5", "active": "#AB45FB" }

The effect of using `Button` is as follows:

### getContrastText

Based on the background color, the foreground text color is automatically generated. Make the overall effect visual experience more comfortable and friendly:

+   Light background with black font.
+   Dark backgrounds give white fonts.

## convertHexToRGB

Supports converting color palettes and other colors from `HEX` format to `RGB`, and supports transparency configuration, compatible with the following usages:

+   `convertHexToRGB(purple[100])` => rgb(228, 197, 251)
+   `convertHexToRGB('#E4C5FB')` => rgb(228, 197, 251)
+   `convertHexToRGB('#E4C5FB', 0.5)` => rgb(228, 197, 251, 0.5)

## Related

+   [Color in Design Systems](https://eightshapes.com/articles/color-in-design-systems)
+   [TinyColor JS Color Manipulation Detection Library](https://github.com/bgrins/TinyColor)

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-icons--page&viewMode=story

section start

## Icons

## How to use

Import the required icons from the '@apitable/icons' library.

## Basic Examples

## Color

## Size

## Inherit Parent Color

#### Canvas Support

The icon is formatted by the 'toString' method and becomes a graph drawn by Path. The icon is drawn in canvas.

The effect is as follows:

### API Interface

| Name         | Type    | Required | Description                                  | Default   |
| ------------ | ------- | -------- | -------------------------------------------- | --------- |
| size         | number  | string   | true                                         | icon size |
| color        | string  | false    | color                                        | 16px      |
| currentColor | boolean | false    | display the same color as the parent element |           |
| className    | string  | false    | override style passed in className           |           |

#### All Icons

+   ChevronDownOutlined
+   ArrowDownOutlined
+   ArrowUpOutlined
+   ArrowLeftOutlined
+   ArrowRightOutlined
+   DeleteOutlined
+   FolderNormalFilled
+   FavoriteOutlined
+   UnfavoriteOutlined
+   AddfileOutlined
+   AddfolderOutlined
+   ImportOutlined
+   ExportOutlined
+   CsvOutlined
+   ExcelOutlined
+   DescriptionOutlined
+   ColumnTextFilled
+   ColumnLongtextFilled
+   ColumnMultipleFilled
+   ColumnFigureFilled
+   ColumnLinktableFilled
+   ColumnRatingFilled
+   ColumnPhoneFilled
+   ColumnAttachmentFilled
+   ColumnUrlOutlined
+   ColumnCurrencyFilled
+   ColumnPercentFilled
+   CalenderLeftOutlined
+   CalenderRightOutlined
+   CalendarYearminusOutlined
+   CalendarYearplusOutlined
+   ZoomInOutlined
+   ZoomOutOutlined
+   RotateOutlined
+   DownloadOutlined
+   UndoFilled
+   RedoFilled
+   FilterFilled
+   RankFilled
+   RowhightShortFilled
+   RowhightMediumFilled
+   RowhightHighFilled
+   RowhightExtremhighFilled
+   SettingFilled
+   ListOutlined
+   TilingFilled
+   CoverOutlined
+   CoverDisOutlined
+   NotificationSmallOutlined
+   DragOutlined
+   ColumnAutonumberFilled
+   ColumnCreatedbyFilled
+   ColumnCreatedtimeFilled
+   ColumnLastmodifiedbyFilled
+   ColumnLastmodifiedtimeFilled
+   RecoverOutlined
+   RankUpOutlined
+   RankDownOutlined
+   WidgetOutlined
+   ViewContactOutlined
+   TemplateSmallOutlined
+   ActivityRecordOutlined
+   CommentBjFilled
+   ShareQrcodeOutlined
+   FormOutlined
+   AttachmentPasteOutlined
+   ShareStarFilled
+   AttachmentLocalOutlined
+   ProsecuteOutlined
+   AddformOutlined
+   FilterOutlined
+   GroupOutlined
+   ShareOutlined
+   CopyOutlined
+   EditOutlined
+   NarrowRecordOutlined
+   ExpandRecordOutlined
+   AddOutlined
+   MoreOutlined
+   FeedbackOutlined
+   RefreshOutlined
+   ReloadOutlined
+   SearchOutlined
+   ShareFilled
+   SelectOutlined
+   EditDescribeOutlined
+   PicLogoFilled
+   UploadOutlined
+   LockFilled
+   InformationSmallOutlined
+   LoadingFilled
+   ActivityOutlined
+   EmailSmallOutlined
+   FixedOutlined
+   SlideOutlined
+   LockOutlined
+   HistoryOutlined
+   PowerOutlined
+   LogoutOutlined
+   DashboardOutlined
+   ManageAddressOutlined
+   WorkbenchSmallOutlined
+   ManagePowerOutlined
+   HornOutlined
+   NotificationReadOutlined
+   WidgetExpandOutlined
+   WidgetExportOutlined
+   SettingOutlined
+   ManageApplicationOutlined
+   PasteOutlined
+   PreviousOutlined
+   NextOutlined
+   TitleWorkFilled
+   TitleRecycleClosedFilled
+   TokenOutlined
+   AdviseOutlined
+   WebsiteOutlined
+   CourseOutlined
+   BookOutlined
+   KeyboardShortcutsOutlined
+   TitleTemplateFilled
+   DesktopOutlined
+   GuideOutlined
+   PhoneOutlined
+   EmailLargeOutlined
+   RelationOutlined
+   MobileDingdingFilled
+   MobileFeishuFilled
+   MobileQqFilled
+   EyeCloseOutlined
+   EyeNormalOutlined
+   PhonenumberFilled
+   EmailSigninFilled
+   InvitecodeFilled
+   MobilePhoneOutlined
+   JoinOutlined
+   TriangleDown16Filled
+   TriangleRight16Filled
+   PulldownFilled
+   RetractFilled
+   TriangleDown10Filled
+   TriangleRight10Filled
+   CloseMiddleOutlined
+   CloseLargeOutlined
+   HidefieldOffFilled
+   ManageOutlined
+   InformationLargeOutlined
+   NotificationLargeOutlined
+   NavDescriptionOutlined
+   NavDrawerOutlined
+   NavShareOutlined
+   TemplateLargeOutlined
+   AddressOutlined
+   ChevronLeftOutlined
+   ChevronRightOutlined
+   ChevronUpOutlined
+   CloseSmallOutlined
+   ApiOutlined
+   FileOutlined
+   PackupOutlined
+   OpenupOutlined
+   VikabyOutlined
+   TaskOutlined
+   GotoLargeOutlined
+   GotoSmallOutlined
+   FolderEmptyFilled
+   DatasheetOutlined
+   MenuOutlined
+   HidefieldOffLargeFilled
+   FavoriteFilled
+   UpgradeFilled
+   NewtabOutlined
+   MultiplemembersFilled
+   DemoOutlined
+   RoadmapOutlined
+   ClassroomOutlined
+   GanttLeftFilled
+   GanttRightFilled
+   AccountFilled
+   AdministratorsFilled
+   InviteOutlined
+   AccountOutlined
+   QuitspaceOutlined
+   VisitorOutlined
+   DepartmentOutlined
+   ShareJoinOutlined
+   GroupFilled
+   BrokenlinkOutlined
+   Brokenlink1Outlined
+   OperationOutlined
+   Headline1Filled
+   HighlightFilled
+   BoldFilled
+   QuoteFilled
+   CodeFilled
+   UnorderedFilled
+   OrderedFilled
+   GanttPackupOutlined
+   GanttOpenupOutlined
+   VerificationCodeFilled
+   DividingLineFilled
+   TaskListFilled
+   TextMiddleFilled
+   TextRightFilled
+   TextLeftFilled
+   StrikethroughFilled
+   ItalicsFilled
+   Headline3Filled
+   Headline2Filled
+   BodyFilled
+   UnderlineFilled
+   ColumnCalendarNonzeroFilled
+   ColumnTextNonzeroFilled
+   ColumnEmailNonzeroFilled
+   WarningTriangleNonzeroFilled
+   EditGanttDescribeFilled
+   CommentBjSmallFilled
+   CommentBjEntireFilled
+   TitleFavoriteFilled
+   LogoWhiteFilled
+   ColumnSingleNonzeroFilled
+   ColumnLookupNonzeroFilled
+   OrgZoomOutOutlined
+   MirrorGalleryFilled
+   MirrorOutlined
+   LockNonzeroOutlined
+   LabelSmallOutlined
+   SyncOffOutlined
+   SyncOnOutlined
+   CommonClearOutlined
+   MobileWecomFilled
+   QqFilled
+   DingdingFilled
+   WechatFilled
+   MobileWechatFilled
+   SolutionOutlined
+   PercentOutlined
+   DepartmentNonzeroOutlined
+   HandoverOutlined
+   UnpublishOutlined
+   CommunityOutlined
+   RobotOutlined
+   ExpandOutlined
+   GoldFilled
+   AutosaveOutlined
+   MirrorArchitectureFilled
+   FitviewOutlined
+   CollapseOutlined
+   TestOutlined
+   EnterpriseFilled
+   CommentOutlined
+   EmojiOutlined
+   LogoPurpleFilled
+   OrgAddFilled
+   AlipayFilled
+   BankFilled
+   WechatpayFilled
+   SelectMarkFilled
+   ZanOutlined
+   ServeOutlined
+   BugOutlined
+   AdviseSmallOutlined
+   SolutionSmallOutlined
+   AttentionOutlined
+   ClockFilled
+   DuplicateOutlined
+   FreezeOutlined
+   RocketOutlined
+   WidgetNarrowOutlined
+   VerifyFilled
+   LogotextFilled
+   SidescreenOutlined
+   MiddlescreenOutlined
+   AuditOutlined
+   DebugOutlined
+   LogoTextFilled
+   LogoTextEnFilled
+   ColumnCascadeOutlined
+   ApilogoFilled
+   ApilogotextFilled
+   WebOutlined
+   PositionOutlined
+   FullscreenOutlined
+   UnfullscreenOutlined
+   ClearOutlined
+   PauseFilled
+   ConnectOutlined
+   RestoreOutlined
+   MovefileOutlined
+   ChartColumnNormalFilled
+   ChartColumnStackFilled
+   ChartColumnPercentFilled
+   ChartBarPercentFilled
+   ChartBarStackFilled
+   ChartBarNormalFilled
+   ChartLinePercentFilled
+   ChartPieFilled
+   ChartLineNormalFilled
+   ChartLineStackFilled
+   ChartDountFilled
+   ChartScatterplotNormalFilled
+   UncheckedOutlined
+   CheckedFilled
+   CheckOutlined
+   ColumnSingleFilled
+   ColumnCheckboxFilled
+   ColumnCalendarFilled
+   ColumnEmailFilled
+   ColumnLookupFilled
+   ColumnFormulaFilled
+   RelationReduceFilled
+   CancelFilled
+   FolderUnfoldFilled
+   HideFilled
+   ViewFormFilled
+   ViewCalendarFilled
+   ViewKanbanFilled
+   ViewGalleryFilled
+   ViewGridFilled
+   EditDescribeFilled
+   MoreStandOutlined
+   WarningTriangleFilled
+   AddFilled
+   LogoFilled
+   SuccessFilled
+   ErrorFilled
+   WarnFilled
+   DefaultFilled
+   NetworkFilled
+   HeadBackgroundFilled
+   EmailBackgroundFilled
+   HidefieldOnFilled
+   WorkbenchLargeOutlined
+   LeftFilled
+   RightFilled
+   RestingOutlined
+   SelectFilled
+   HidefieldOnLargeFilled
+   DescriptionFilled
+   BronzeFilled
+   SilverFilled
+   InfoFilled
+   AttachmentImgPlaceholderFilled
+   PreviewCancelFilled
+   NextFilled
+   PreviousFilled
+   CountdownFilled
+   ViewGanttOutlined
+   ViewGanttGreyOutlined
+   InviteBoxFilled
+   PlayFilled
+   MirrorGridFilled
+   MirrorGanttFilled
+   MirrorKanbanFilled
+   MirrorCalendarFilled
+   FeishuFilled
+   WecomFilled
+   LogoLargeFilled
+   RunFilled
+   UpgradeColorfulFilled
+   WebhookFilled
+   InviteSmallFilled
+   ViewArchitectureFilled

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-typography--page&viewMode=story

section start

## Typography

Present design and content clearly and efficiently.

## How to use

## Typography API

| Name(variant) | Font Size(px) | Line Height(px) | Example |
| ------------- | ------------- | --------------- | ------- |
| H1            | 32            | 48              |         |
## H1 title

 |
| H2 | 28 | 42 | 

## H2 title

 |
| H3 | 24 | 36 | 

### H3 title

 |
| H4 | 20 | 30 | 

#### H4 title

 |
| H5 | 18 | 28 | 

##### H5 title

 |
| H6 | 16 | 24 | 

###### H6 title

 |
| H7 | 14 | 22 | 

###### H7 title

 |
| H8 | 13 | 20 | 

###### H8 title

 |
| H9 | 12 | 18 | 

###### H9 title

 |
| Body1 | 16 | 24 | 

Body1 text

 |
| Body2 | 14 | 22 | 

Body2 text

 |
| Body3 | 13 | 20 | 

Body3 text

 |
| Body4 | 12 | 18 | 

Body4 text

 |

## Color

Customize the color of text.

## H1 title

## Alignment

Support multiple alignment methods, such as right alignment:

## H1 title

## Ellipsis

`ellipsis` Support Boolean values and specific configurations：

+   When `ellipsis` set to true, more than one line is omitted by default and tooltip appears.

Re-render happens when React needs to update the app with some new data. Usually, this happens as a result of a user interacting with the app or some external data coming through via an asynchronous request or some subscription model.

+   Set the number of display lines, and ellipsis will appear only when the number exceeds

Re-render happens when React needs to update the app with some new data. Usually, this happens as a result of a user interacting with the app or some external data coming through via an asynchronous request or some subscription model.

+   Set tooltip text

Re-render happens when React needs to update the app with some new data. Usually, this happens as a result of a user interacting with the app or some external data coming through via an asynchronous request or some subscription model.

## API

| Name           | Type                                                         | Description                                            | Default |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------ | ------- |
| className      | string                                                       | class name                                             | \-      |
| style          | CSSProperties                                                | inline style                                           | \-      |
| component      | ElementType<any>                                             | renders the component using the specified HTML element | \-      |
| color          | string                                                       | text color                                             | \-      |
| align          | inherit / left / center / right                              | alignment                                              | \-      |
| variant        | h1 / h2 / h3 / h4 / h5 / h6 / h7 / h8 / h9 / body1 / body2 / body3 / body4 | variant style                                          | \-      |
| ellipsis       | boolean / IEllipsis                                          | overflow omitted                                       | \-      |
| tooltipsZIndex | number                                                       | tooltips z-index level property                        | \-      |
| tooltipsZIndex | ((e: MouseEvent<Element, MouseEvent>) => void)               | click action                                           | \-      |

### IEllipsis interface

| Name    | Type    | Description                                                  |
| ------- | ------- | ------------------------------------------------------------ |
| rows    | number  | specify the number of displayed text lines, and omit if it exceeds |
| tooltip | string  | set tooltip text                                             |
| visible | boolean | tooltip show                                                 |

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-button--page&viewMode=story

section start

## Button

## Usage

## Scenes

Click a button to perform an action

## Shortcut support

[https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-3](https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-3)

| Key   | Function        |
| ----- | --------------- |
| Enter | activate button |
| Space | activate button |

### Button type

+   Solid button - Contained buttons，Primary button。
+   Jelly button - Light buttons , Secondary button。

### Button size

### Button disabled

### Solid button colors

### Jelly button colors

The text inside the button will be automatically calculated according to the background color (black/white) to satisfy accessibility.

### Rounded button

### Prefix Icon or suffix icon

### Block button

### Loading button

### Custom background color

`Fill Button` support custom background color.

+   If the passed in color (6-bit hex string) exists in the palette. Then the background color of the button's hover press will be set automatically.

+   If the incoming color does not exist in the palette. The background color of the hover press does not change, which requires the user to actively override the style.

## API

| Name       | Type                                | Description      | Default |
| ---------- | ----------------------------------- | ---------------- | ------- |
| htmlType   | button / submit / reset             | button type      | button  |
| shape      | round                               | border shape     | \-      |
| children   | ReactNode                           | child element    | \-      |
| className  | string                              | class name       | \-      |
| color      | default / danger / primary / string | background color | default |
| prefixIcon | ReactElement                        | prefix icon      | \-      |
| suffixIcon | ReactElement                        | suffix icon      | \-      |
| disabled   | boolean                             | disable actions  | \-      |
| block      | boolean                             | fill width       | \-      |
| variant    | fill / jelly                        | variant          | fill    |
| size       | small / middle / large              | size             | middle  |
| loading    | boolean                             | border shape     | false   |

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-iconbutton--page&viewMode=story

section start

## No Preview

Sorry, but you either have no stories or none are selected somehow.

+   Please check the Storybook config.
+   Try reloading the page.

If the problem persists, check the browser console, or the terminal you've run Storybook from.

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-linkbutton--page&viewMode=story

section start

## LinkButton

## Usage

By default, the link is jumped through the `a` tag.

Set `target` to `_blank` to open the website in a new browser window `https://vika.cn`.

## Color

Default is primary color, you can customize the color.

+   The color passed in the color palette will automatically handle the hover and active colors.
+   For non-palette colors, you need to override the colors in the hover and active states by yourself.

## Hide underline

Underlined by default, remove underline by setting `underline` to `false`.

## Button element

Change the a tag to button by specifying `component="button"`. Can be specified as other HTML tags, such as `div`, as required.

## Prefix or suffix icons

## Disabled

## Block

## API

| Name       | Type        | Description                                            | Default |
| ---------- | ----------- | ------------------------------------------------------ | ------- |
| block      | boolean     | fill width                                             | \-      |
| disabled   | boolean     | disabled button                                        | \-      |
| component  | ElementType | senders the component using the specified HTML element | a       |
| prefixIcon | ReactNode   | prefix icon                                            | \-      |
| suffixIcon | ReactNode   | suffix icon                                            | \-      |
| href       | string      | link url                                               | \-      |
| underline  | boolean     | show underline                                         | true    |
| color      | string      | font color                                             | \-      |
| target     | string      | specify where to open linked documents                 | \-      |

section end





section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-textbutton--page&viewMode=story

section start

## No Preview

Sorry, but you either have no stories or none are selected somehow.

+   Please check the Storybook config.
+   Try reloading the page.

If the problem persists, check the browser console, or the terminal you've run Storybook from.

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-textbutton--page&viewMode=story

section start

## No Preview

Sorry, but you either have no stories or none are selected somehow.

+   Please check the Storybook config.
+   Try reloading the page.

If the problem persists, check the browser console, or the terminal you've run Storybook from.

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-loading--page&viewMode=story

section start

## No Preview

Sorry, but you either have no stories or none are selected somehow.

+   Please check the Storybook config.
+   Try reloading the page.

If the problem persists, check the browser console, or the terminal you've run Storybook from.

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-checkbox--page&viewMode=story

section start

## No Preview

Sorry, but you either have no stories or none are selected somehow.

+   Please check the Storybook config.
+   Try reloading the page.

If the problem persists, check the browser console, or the terminal you've run Storybook from.

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-select--page&viewMode=story

section start

## Select

## Usage

## Scenes

A drop-down menu pops up for the user to choose.

## Examples

### Select action callback

### Placeholder

### Custom width

In some cases, dropdown list needs to be customized according to the length of the content. If so, you can set the `dropdownMatchSelectWidth` property to `false` (with a maximum width limit):

option 1 long long long long long

option 1 long long long long long

### Option with icon

Each option can set its own pre-icon and suffix-icon, the Icon is imported from the `@apitable/icons` library.

When the selected option has an icon, the icon will be displayed by default.

Note that the trigger itself can also specify the pre-Icon and suffix-Icon. When the selected result also has the corresponding Icon passed in, the Icon specified by the trigger will be higher than the Icon weight of the option.

### Option dosabled

When an option cannot be selected, the disabled state can be set for the option, and a reason for not being selected can be provided. When the mouse hovers over the content area, the reason will be displayed.

When an option is too long and the content is not displayed completely, an ellipsis will appear. At this time, hovering over the option will display the complete content of the current option. If the option is disabled at this moment, the weight of disabledTip will be higher than the content.

Set disabled tips:

The suffix-icon of an option is special. When an option is in the `disabled` state, the pre-icon and the text part will turn gray, but the post-icon will keep the original color. And the rear Icon can also have its own hover.

Status prompt, just pass the content in `suffixIconTip`.

## Select disbaled

### Search option and hightligh keyword

> The search is case insensitive in English.

### Update hightligh keyword style

### Format Selected option

Get option user name by `renderValue` function:

### Select.Option

Instead of using the `options` props, you can add options through sub-elements, as follows:

## API

| Name                     | Type                                     | Description                                                  | Default               |
| ------------------------ | ---------------------------------------- | ------------------------------------------------------------ | --------------------- |
| value                    | string / number                          | selected value, corresponding to the value in option         | \-                    |
| onSelected               | (option: IOption, index: number) => void | select action callback                                       | \-                    |
| options                  | IOption\[\]                              | dropdown list data                                           | \-                    |
| placeholder              | string                                   | \-                                                           | \-                    |
| prefixIcon               | ReactNode                                | prefix icon                                                  | \-                    |
| suffixIcon               | ReactNode                                | suffix icon                                                  | \-                    |
| dropdownMatchSelectWidth | boolean                                  | whether the drop-down box and the trigger keep the same width | \-                    |
| triggerStyle             | CSSProperties                            | trigger inline style                                         | \-                    |
| triggerCls               | string                                   | trigger classname                                            | \-                    |
| listCls                  | string                                   | list classname                                               | \-                    |
| listStyle                | CSSProperties                            | list inline style                                            | \-                    |
| openSearch               | boolean                                  | whether to show search                                       | \-                    |
| searchPlaceholder        | string                                   | search placeholder                                           | \-                    |
| highlightStyle           | CSSProperties                            | custom highlight inline style                                | \-                    |
| noDataTip                | string                                   | (() => ReactNode)                                            | empty data text or UI |
| hideSelectedOption       | boolean                                  | whether hide selected options                                | \-                    |
| dropdownRender           | ReactNode                                | custom dropdown                                              | \-                    |
| disabled                 | boolean                                  | disabled action                                              | \-                    |
| renderValue              | (option: IOption) => string              | format select option value                                   | \-                    |
| maxListWidth             | number                                   | limit max list width                                         | \-                    |
| defaultVisible           | boolean                                  | \-                                                           | \-                    |
| hiddenArrow              | boolean                                  | hide arrow                                                   | \-                    |
| triggerLabel             | boolean                                  | \-                                                           | \-                    |

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-switch--page&viewMode=story

section start

## No Preview

Sorry, but you either have no stories or none are selected somehow.

+   Please check the Storybook config.
+   Try reloading the page.

If the problem persists, check the browser console, or the terminal you've run Storybook from.

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-radio--page&viewMode=story

section start

## No Preview

Sorry, but you either have no stories or none are selected somehow.

+   Please check the Storybook config.
+   Try reloading the page.

If the problem persists, check the browser console, or the terminal you've run Storybook from.

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-radiogroup--page&viewMode=story

section start

## RadioGroup

Use radio buttons to select an option from a group. When the user wants to see all options, the radio button group is recommended. If there are many options available, you should use a drop-down menu that takes up less space.

By default, radio buttons should select commonly used options.

## Usage

## Examples

### Default

The default vertical arrangement, by clicking on the radio, text, or the blank space after the text to select the option. `name` is used to mark uniqueness and implement radio switching.

### Horizontal

option 1option 22option 333option 4444option 55555option 666666

### Horizontally occupy the entire row

### Provide default selection

### Disable some options

option 1option 2option 3option 4

### Disable all

### Button style options

### Button style options take up the entire row

### Options

Supports not using the `Radio` component directly, but specifying multiple options via the `options` array.

## API

| Name     | Type                                          | Description                            | Default |
| -------- | --------------------------------------------- | -------------------------------------- | ------- |
| isBtn    | boolean                                       | whether to use the Button style option | false   |
| children | ReactNode                                     | child element                          | \-      |
| disabled | boolean                                       | disable action                         | \-      |
| name     | string                                        | radio name                             | \-      |
| value    | any                                           | selected value                         | \-      |
| onChange | (e: ChangeEvent<Element>, value: any) => void | listen to the Change event             | \_      |
| block    | boolean                                       | whether to occupy the entire line      | \_      |
| row      | boolean                                       | whether to arrange by row              | \-      |
| options  | IRadioGroupOption\[\]                         | array of options                       | \-      |

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-textinput--page&viewMode=story

section start

## TextInput

The text input box is the most basic component of the input component. For more types see: [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)

HTML input is divided into many types. Advanced types such as date, color, etc. are separate input components, this component only implements text type input. Covers the following types of native input:

+   text
+   email
+   url
+   tel
+   password
+   number
+   search

## Usage

## Example

### Basic

### Occupy the entire line

### Size

### Prefix、suffix icon

### Error status

### Disable mode

### Prefix, suffix UI

## API

| Name        | Type                      | Description                              | Default |
| ----------- | ------------------------- | ---------------------------------------- | ------- |
| className   | string                    | class name                               | \-      |
| size        | small / middle / large    | input size                               | \-      |
| error       | boolean                   | check error                              | false   |
| disabled    | boolean                   | disable action                           | \-      |
| lineStyle   | boolean                   | whether to use underline style input box | \-      |
| prefix      | ReactNode                 | prefix icon                              | \-      |
| suffix      | ReactNode                 | suffix icon                              | \-      |
| block       | boolean                   | whether to fill the parent container     | \-      |
| addonAfter  | ReactNode                 | suffix ui                                | \-      |
| addonBefore | ReactNode                 | prefix ui                                | \-      |
| wrapperRef  | RefObject<HTMLDivElement> | ref of TextInput                         | \-      |

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-box--page&viewMode=story

section start

## Box

Box components can handle supplementary UI styling, such as handling component layout.

Supports dynamic generation of a class through attribute introduction.

## Usage

## Examples

### Change DOM elements

The Box component defaults to `<div>`, which can be changed through attributes, such as changing to `<img>` to render images:

![首页火箭.png](https://s2.vika.ltd/2020/05/%E9%A6%96%E9%A1%B5%E7%81%AB%E7%AE%AD.png)

### Modify component styles

### Generate temporary generic components

Defines the temporary Card generic component.

### Build a simple page framework

Build a basic page framework with the `Space` component.

section end







section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-space--page&viewMode=story

section start

## Space

Consistent spacing makes the interface layout consistent, clearer, and easier to navigate.

## Usage

## Specification recommendation

Recommended gaps between child elements:

| Name | value（px） | scenes to be used |
| ---- | ----------- | ----------------- |
| xxxs | 2           |                   |
| xxs  | 4           |                   |
| xs   | 8           |                   |
| s    | 16          |                   |
| l    | 32          |                   |
| xl   | 40          |                   |
| xxl  | 80          |                   |
| xxxl | 120         |                   |

## Default spacing

The default is inline layout, and the spacing between each child element is 8px.

## Custom spacing

The spacing can be customized, such as `size=16` to set the spacing to 16px.

## Column spacing

The `vertical` property supports column layout. And set the column spacing to 16px.

## Delimiter

## Line wrapping

When there are many child elements, set `wrap=true` to support line wrapping

Define the Card component:

## Set the left and right, top and bottom spacing

You can set different spacing for up and down, left and right. For example, setting `size=[16, 32]` means setting the left and right spacing to 16px, and the top and bottom spacing to 32px.

## Set child element alignment

Support setting alignment via align .

Horizontal alignment, as follows: start, center, end, baseline

Vertical alignment, as follows: start, center, end. The baseline property is meaningless.

## custom component label

Customizable component tags, such as `ul`, `li` HTML tags

+   list item 1

+   list item 2

+   list item 3

## API

| Name      | Type                            | Description      | Default |
| --------- | ------------------------------- | ---------------- | ------- |
| size      | number / number\[\]             | spacing          | 8px     |
| component | ElementType<any>                | custom HTML tags | div     |
| vertical  | boolean                         | column layout    | \-      |
| wrap      | boolean                         | whether to wrap  | \-      |
| align     | center / baseline / start / end | alignment        | \-      |
| split     | boolean                         | delimiter        | \-      |

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-list--page&viewMode=story

section start

## List

A basic list display that can carry a continuous set of text or graphics.

## Usage

## Examples

### Basic

list 1

list 2

list 3

list 4

list 5

### With border

list 1

list 2

list 3

list 4

list 5

### With header and bottom styles

list 1

list 2

list 3

list 4

list 5

### Example of adding child elements

The `data` property sets `actions` field to add actions to the list child elements.

### Custom list child elements

Modify the UI style of list child elements through the `renderItem` property, for example, `renderItem` returns the UI rendered by the `Box` component:

list 1

list 2

list 3

list 4

list 5

### API

+   IListProps

| Name       | Type                                                        | Description                  | Default |
| ---------- | ----------------------------------------------------------- | ---------------------------- | ------- |
| bordered   | boolean                                                     | with or without border style | \-      |
| children   | ReactNode                                                   | child element                | \-      |
| header     | ReactNode                                                   | list header UI               | \-      |
| footer     | ReactNode                                                   | list tail UI                 | \-      |
| data       | (string / object / IListItemProps)\[\]                      | list data                    | \-      |
| renderItem | (item: string / IListItemProps, index: number) => ReactNode | custom list child element UI | \-      |

+   IListItemProps

| Name     | Type          | Description       | Default |
| -------- | ------------- | ----------------- | ------- |
| children | ReactNode     | child element     | \-      |
| actions  | ReactNode\[\] | action collection | \-      |

section end



section title: Storybook

url: https://developers.aitable.ai/storybook-static/iframe.html?id=en-components-calendar--page&viewMode=story

section start

## Calendar

## Usage

When data is date or divided by date, such as schedule, class schedule, event calendar, etc.

## Basic usage scenarios

+   The calendar component supports month switching and returns to today (current month);
+   Support stretching task adjustment time;
+   The mobile terminal supports sliding to switch months;
+   Internationalization: Chinese and English are supported.

## Instructions for use

+   The calendar view of the current month is displayed by default. If `defaultDate` is set, the view of the corresponding month is displayed;
+   When calculating the task length, the unit is days, and the time below days (hours, minutes) is ignored;
+   When the task has no start time or end time, the length is 1 day.
+   When the start time is greater than the end time, the task is abnormal, an alarm icon appears, the task is displayed in the interface until the start time is unknown, and the length is 1 day.

## Examples

When there are no tasks, the calendar looks like this:

## Have tasks and allow for stretching

Setting `resizable` to true allows both ends of the stretch task to adjust the timing:

## Custom task style

The task style is defined by `listStyle`, and the calendar will adapt to the height according to the `listStyle` height property.

## Unusual task warning

When the start time is greater than the end time, the task is abnormal, and an alarm is displayed. The task is displayed in the interface until the start time is unknown, and the length is 1 day.

## API

| Name           | Type                                                   | Description                                                  | Default |
| -------------- | ------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| defaultDate    | Date                                                   | the default time, the first time the calendar is opened is the current month |         |
| tasks          | ITask\[\]                                              | task list, the data structure is: ITask { id: Id; title: string; startDate: Date; endDate: Date; startDisabled?: boolean, endDisabled?: boolean } |         |
| update         | (id: Id, startDate: Date, endDate: Date) => void       | update task function                                         |         |
| lang           | en / zh                                                | international configuration                                  |         |
| dnd            | any\[\]                                                | Drag and drop component (beta version)                       |         |
| listStyle      | CSSProperties                                          | task style                                                   |         |
| startListStyle | CSSProperties                                          | mark task start time location style                          |         |
| warnText       | ReactElement<any, string / JSXElementConstructor<any>> | alarm information                                            |         |
| rowMixCount    | number                                                 | the minimum number of display rows in a calendar row         |         |
| disabled       | boolean                                                | disable                                                      |         |
| resizable      | boolean                                                | support stretching, allowing to adjust the task time by pulling both ends of the task |         |
| moreText       | string                                                 | \-                                                           |         |
| moveTaskId     | string                                                 | \-                                                           |         |
| monthPicker    | (showValue: string) => Element                         | \-                                                           |         |

section end



# Other Components

section title: CellValue | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/ui_cell_value_cell_value/

section start

Display the UI style for recording the cells of the specified field, all types of fields are now supported.

Use recordId,fieldId render CellValue UI, Rendering CellValue UI by recordId, fieldId, e.g. focus cell's rendering cell display UI.

```tsx
import React from 'react';import { useActiveCell, CellValue } from '@apitable/widget-sdk';export const CellValueUI = () => {  const activeCell = useActiveCell();  if (!activeCell) {    return <p>Cells without activation</p>  } const { recordId, fieldId } = activeCell;  return (    <CellValue      className="wrapperClass"      cellClassName="cellClass"      recordId={recordId}      fieldId={fieldId}    />  )}
```

Render CellValue UI by cellValue, fieldId, e.g. merge or difference set calculation for multiple cells data in the same column, return data in cellValue format.

section end



section title: FieldPicker | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/ui_field_picker_field_picker

section start

A field selector component that can select the fields inside the corresponding view ID.

Common usage.

```ts
import React, { useState } from 'react';import { FieldPicker, useActiveViewId } from '@apitable/widget-sdk';const Example = () => {  const viewId = useActiveViewId();  const [fieldId, setFieldId] = useState()  return <FieldPicker viewId={viewId} fieldId={fieldId} onChange={option => setFieldId(option.value)} />}
```

```ts
import React, { useState } from 'react';import { FieldPicker, useActiveViewId, useCloudStorage } from '@apitable/widget-sdk';const ExampleCloud = () => {  const viewId = useActiveViewId();  const [fieldId, setFieldId] = useCloudStorage('selectFieldId');  return  <FieldPicker viewId={viewId} fieldId={fieldId} onChange={option => setFieldId(option.value)} />;};
```

section end



section title: ViewPicker | AITable Developer Center

url: https://developers.aitable.ai/widget/api-reference/modules/ui_view_picker_view_picker

section start

## ViewPicker

View selector, using this components you can select all views of the currently datasheet.

#### Parameters[](#parameters "Direct link to Parameters")

| Name    | Type                                                         |
| ------- | ------------------------------------------------------------ |
| `props` | [`IViewPicker`](https://developers.aitable.ai/widget/api-reference/interfaces/interface_ui.IViewPicker) |

#### Returns[](#returns "Direct link to Returns")

`Element`

#### Example[](#example "Direct link to Example")

Common usage.

```ts
import React, { useState } from 'react';import { ViewPicker } from '@apitable/widget-sdk';const Example = () => {  const [viewId, setViewId] = useState()  return <ViewPicker viewId={viewId} onChange={option => setViewId(option.value)} />}
```

Use [useCloudStorage](https://developers.aitable.ai/widget/api-reference/modules/hooks_use_cloud_storage#usecloudstorage) implementing persistent storage.

```ts
import React from 'react';import { ViewPicker, useCloudStorage } from '@apitable/widget-sdk';const ExampleCloud = () => {  const [viewId, setViewId] = useCloudStorage('selectViewId');  return <ViewPicker viewId={viewId} onChange={option => setViewId(option.value)} />;};
```

section end



# interface_field_types.FieldType

[interface/field_types](https://developers.vika.cn/widget/api-reference/modules/interface_field_types).FieldType

An enum of Vika's field types

```ts
import { FieldType } from '@apitable/widget-sdk'
console.log(FieldType.Number)
```



> tips: the value obtained by `getCellValue` are supported for writing to the cell.

## Enumeration members[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#enumeration-members)

### NotSupport[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#notsupport)

• **NotSupport** = `"NotSupport"`

Not support type.

------

### Text[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#text)

• **Text** = `"Text"`

A long text field that can span multiple lines.

**Cell read format**

```
string
```

**Cell write format**

```
string
```

**Field property read format**

n/a

**Field property write format**

n/a

------

### Number[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#number)

• **Number** = `"Number"`

A number.

**Cell read format**

```
number
```

**Cell write format**

```
number
```

**Field property read format**

```ts
{
 precision: number; // retain decimal places
 defaultValue?: string; // default value
 symbol?: string; // numerical units
}
```



**Field property write format**

```ts
{
 precision: number; // retain decimal places
 defaultValue?: string; // default value
 symbol?: string; // numerical units
}
```



------

### SingleSelect[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#singleselect)

• **SingleSelect** = `"SingleSelect"`

Single select allows you to select a single choice from predefined choices in a dropdown.

**Cell read format**

```ts
{
 id: string,
 name: string,
 color: {
   name: string, // The unique name corresponding to the color
   value: string // The unique value corresponding to the color
 }
}
```



**Cell write format**

```ts
id: string | { id: string } | { name: string }
```



**Field property read format**

```ts
{
 options: {
   id: string;
   name: string;
   color: {
     name: string;
     value: string;
   };
 }[];
 defaultValue?: string; // default value（option ID）
}
```



**Field property write format**

If the option does not pass an id, it will be assumed that a new option is required

color table [Color](https://developers.vika.cn/widget/colors)

If you want to allow options to be deleted, you can pass an object with enableSelectOptionDelete: true as the second argument. By passing this argument, any existing options which are not passed again via options will be deleted, and any cells which referenced a now-deleted options will be cleared.

```ts
{
 options: {
   id?: string;
   name: string;
   color?: string; // color name
 }
 defaultValue?: string; // default value（option ID）
}
```



------

### MultiSelect[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#multiselect)

• **MultiSelect** = `"MultiSelect"`

Multiple select allows you to select one or more predefined choices from a dropdown.

**Cell read format**

```ts
{
 id: string,
 name: string,
 color: {
   name: string,
   value: string
 }
}[]
```



**Cell write format**

```ts
id: string[] | { id: string }[] | { name: string }[]
```



**Field property read format**

```ts
{
 options: {
   id: string;
   name: string;
   color: {
     name: string;
     value: string;
   };
 }[];
 defaultValue?: string[];
}
```



**Field property write format**

If the option does not pass an id, it will be assumed that a new option is required

color table [Color](https://developers.vika.cn/widget/colors)

If you want to allow options to be deleted, you can pass an object with enableSelectOptionDelete: true as the second argument. By passing this argument, any existing options which are not passed again via options will be deleted, and any cells which referenced a now-deleted options will be cleared.

```ts
{
 options: {
   id?: string;
   name: string;
   color?: string;
 }
 defaultValue?: string[];
}
```



------

### DateTime[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#datetime)

• **DateTime** = `"DateTime"`

A date field configured to also include a time.

**Cell read format**

```
string
```

**Cell write format**

```
string | Date
```

**Field property read format**

[DateFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.DateFormat) [TimeFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.TimeFormat)

```ts
{
 dateFormat: DateFormat; // data value format
 timeFormat?: TimeFormat; // time value format
 includeTime?: boolean, // whether to include time
 autoFill?: boolean // whether to automatically fill in the creation time when adding a record
}
```



**Field property write format**

[DateFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.DateFormat) [TimeFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.TimeFormat)

```ts
{
 dateFormat: DateFormat; // data value format
 timeFormat?: TimeFormat; // time value format
 includeTime?: boolean, // whether to include time
 autoFill?: boolean // whether to automatically fill in the creation time when adding a record
}
```



------

### Attachment[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#attachment)

• **Attachment** = `"Attachment"`

Attachments allow you to add images, documents, or other files which can then be viewed or downloaded.

**Cell read format**

[IAttachmentValue](https://developers.vika.cn/widget/api-reference/interfaces/interface_field_types.IAttachmentValue)

**Cell read format**

First call the official API to upload the attachment, get the corresponding data and then write.

The specified value will overwrite the current cell value.

[IAttachmentValue](https://developers.vika.cn/widget/api-reference/interfaces/interface_field_types.IAttachmentValue)

**Field property read format**

n/a

**Field property write format**

n/a

------

### OneWayLink[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#onewaylink)

• **OneWayLink** = `"OneWayLink"`

One way link, link to another record.

**Cell read format**

```ts
{
 recordId: string,
 title: string
}[]
```



**Cell write format**

The currently linked record IDs and their primary cell values from the linked datasheet.

```
recordId[]
```

**Field property read format**

```ts
{
 foreignDatasheetId: string; // The ID of the datasheet this field links to
 limitToView?: string; // The ID of the view in the linked datasheet to use when showing
 limitSingleRecord?: boolean; // Whether this field prefers to only have a single linked record
}
```



**Field property write format**

When updating the associated form ID of a magically associated field, the processing of the associated field corresponding to the associated form.

```ts
{
 foreignDatasheetId: string; // The ID of the datasheet this field links to
 limitToView?: string; // The ID of the view in the linked datasheet to use when showing
 limitSingleRecord?: boolean; // Whether this field prefers to only have a single linked record
}
```



------

### MagicLink[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#magiclink)

• **MagicLink** = `"MagicLink"`

Two way link, link to another record.

**Cell read format**

```ts
{
 recordId: string,
 title: string
}[]
```



**Cell write format**

The currently linked record IDs and their primary cell values from the linked datasheet.

```
recordId[]
```

**Field property read format**

```ts
{
 foreignDatasheetId: string; // The ID of the datasheet this field links to
 brotherFieldId?: string; // The ID of the field in the linked table that links back
 limitToView?: string; // The ID of the view in the linked datasheet to use when showing
 limitSingleRecord?: boolean; // Whether this field prefers to only have a single linked record
}
```



**Field property write format**

When updating the associated form ID of a magically associated field, the processing of the associated field corresponding to the associated form.

```ts
{
 foreignDatasheetId: string; // The ID of the datasheet this field links to
 limitToView?: string; // The ID of the view in the linked datasheet to use when showing
 limitSingleRecord?: boolean; // Whether this field prefers to only have a single linked record
}
```



------

### TwoWayLink[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#twowaylink)

• **TwoWayLink** = `"TwoWayLink"`

------

### URL[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#url)

• **URL** = `"URL"`

A valid URL.

**Cell read format**

```
string
```

**Cell write format**

```
string
```

**Field property read format**

n/a

**Field property write format**

n/a

------

### Email[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#email)

• **Email** = `"Email"`

A valid email address.

**Cell read format**

```
string
```

**Cell write format**

```
string
```

**Field property read format**

n/a

**Field property write format**

n/a

------

### Phone[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#phone)

• **Phone** = `"Phone"`

A telephone number.

**Cell read format**

```
string
```

**Cell write format**

```
string
```

**Field property read format**

n/a

**Field property write format**

n/a

------

### Checkbox[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#checkbox)

• **Checkbox** = `"Checkbox"`

This field is "true" when checked and "null" when unchecked.

**Cell read format**

```
boolean
```

**Cell write format**

```
boolean
```

**Field property read format**

```ts
{
 icon: string; // Emoji slug
}
```



**Field property write format**

icon Emoji config [Emojis](https://developers.vika.cn/widget/emojis)

```ts
{
 icon: 'white_check_mark' | 'ballot_box_with_check'; // icon name
}
```



------

### Rating[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#rating)

• **Rating** = `"Rating"`

A rating.

**Cell read format**

```
number
```

**Cell write format**

```
number
```

**Field property read format**

```ts
{
 max: number; // the maximum value for the rating, from 1 to 10 inclusive
 icon: string; // Emoji slug
}
```



**Field property write format**

icon Emoji config [Emojis](https://developers.vika.cn/widget/emojis)

```ts
{
 max: number; // the maximum value for the rating, from 1 to 10 inclusive
 icon: 'star' | 'star2' | 'stars'; // icon name
}
```



------

### Member[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#member)

• **Member** = `"Member"`

Select allows you to select one or more member from a dropdown.

**Cell read format**

```ts
{
 id: string,
 type: 'Team' | 'Member',
 name: string,
 avatar?: string,
}[]
```



**Cell write format**

```
id: string[]
```

**Field property read format**

```ts
{
 isMulti: boolean; // one or more member can be selected
 shouldSendMsg: boolean; // whether to send message notifications after selecting members
 options: [
   id: string,
   type: 'Team' | 'Member',
   name: string,
   avatar?: string,
 ]; // Selected members
}
```



**Field property write format**

```ts
{
 isMulti?: boolean; // one or more member can be selected, default is true (more than one can be selected)
 shouldSendMsg?: boolean; // whether to send message notifications after selecting members
}
```



------

### MagicLookUp[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#magiclookup)

• **MagicLookUp** = `"MagicLookUp"`

Lookup a field on linked records.

**Cell read format**

`(read cell value)[]` the cellValue array of the referenced source field.

Is at most a two-dimensional array, if the cellValue of the referenced source field is an array, it is a two-dimensional array, if not, it is a one-dimensional array.

**Cell write format**

n/a

**Field property read format**

[BasicValueType](https://developers.vika.cn/widget/api-reference/enums/interface_modal.BasicValueType)

[RollUpFuncType](https://developers.vika.cn/widget/api-reference/enums/interface_modal.RollUpFuncType)

```ts
{
 // the linked record field in this datasheet that this field is looking up
 relatedLinkFieldId: string;
 // the field in the foreign datasheet that will be looked up on each linked record
 targetFieldId: string;
 // whether the lookup field is correctly configured
 hasError?: boolean;
 // The entity field that is eventually referenced to does not contain a field of the lookup type.
 // In the presence of an error, the entity field may not exist.
 entityField?: {
   datasheetId: string;
   field: IAPIMetaField;
 };
 // aggregate functions
 rollupFunction?: RollUpFuncType;
 // return value types, including String, Boolean, Number, DateTime, Array
 valueType?: BasicValueType;
 // customizable formatting based on the type of field being referenced, such as date, number, percentage, currency field
 format?: {
   type: 'DateTime' | 'Number' | 'Percent' | 'Currency',
   format: Format
 };
}
```



**Field property write format**

[RollUpFuncType](https://developers.vika.cn/widget/api-reference/enums/interface_modal.RollUpFuncType)

```ts
{
 // the linked record field in this datasheet that this field is looking up
 relatedLinkFieldId: string;
 // the field in the foreign datasheet that will be looked up on each linked record
 targetFieldId: string;
 // aggregate functions
 rollupFunction?: RollUpFuncType;
 // customizable formatting based on the type of field being referenced, such as date, number, percentage, currency field
 format?: {
   type: 'DateTime' | 'Number' | 'Percent' | 'Currency',
   format: Format
 };
}
```



------

### Formula[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#formula)

• **Formula** = `"Formula"`

Compute a value in each record based on other fields in the same record.

**Cell read format**

```
null | string | number | boolean | string[] | number[] | boolean
```

**Cell write format**

n/a

**Field property read format**

[BasicValueType](https://developers.vika.cn/widget/api-reference/enums/interface_modal.BasicValueType)

```ts
{
 // return value types, including String, Boolean, Number, DateTime, Array
 valueType: BasicValueType;
 // formula expressions
 expression: string;
 // false if the formula contains an error
 hasError: boolean;
 // depending on the type of field being referenced,
 // you can customize the format,
 // such as date, number, percentage, currency field, the specific format refers to the corresponding field write property
 format?: {
   type: 'DateTime' | 'Number' | 'Percent' | 'Currency',
   format: Format
 };
}
```



**Field property write format**

```ts
{
 // formula expressions
 expression?: string;
 // depending on the type of field being referenced,
 // you can customize the format,
 // such as date, number, percentage, currency field, the specific format refers to the corresponding field write property
 format?: {
   type: 'DateTime' | 'Number' | 'Percent' | 'Currency',
   format: Format
 };
}
```



------

### Currency[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#currency)

• **Currency** = `"Currency"`

An amount of a currency.

**Cell read format**

```
number
```

**Cell write format**

```
number
```

**Field property read format**

```ts
{
 symbol?: string; // units of currency
 precision?: number; // from 0 to 4 inclusive
 defaultValue?: string;
 symbolAlign?: 'Default' | 'Left' | 'Right'; // arrangement of units and values
}
```



**Field property read format**

```ts
{
 symbol?: string; // units of currency
 precision?: number; // from 0 to 4 inclusive
 defaultValue?: string;
 symbolAlign?: 'Default' | 'Left' | 'Right'; // arrangement of units and values
}
```



------

### Percent[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#percent)

• **Percent** = `"Percent"`

A percentage.

**Cell read format**

```
number
```

**Cell write format**

```
number
```

**Field property read format**

```ts
{
 precision: number; // from 0 to 4 inclusive
 defaultValue?: string;
}
```



**Field property write format**

```ts
{
 precision: number; // from 0 to 4 inclusive
 defaultValue?: string;
}
```



------

### SingleText[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#singletext)

• **SingleText** = `"SingleText"`

A single line of text.

**Cell read format**

```
string
```

**Cell write format**

```
string
```

**Field property read format**

```ts
{
 defaultValue?: string
}
```



**Field property write format**

```ts
{
 defaultValue?: string
}
```



------

### AutoNumber[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#autonumber)

• **AutoNumber** = `"AutoNumber"`

Automatically incremented unique counter for each record.

**Cell read format**

```
number
```

**Cell write format**

n/a

**Field property read format**

n/a

**Field property write format**

n/a

------

### CreatedTime[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#createdtime)

• **CreatedTime** = `"CreatedTime"`

The time the record was created in UTC.

**Cell read format**

```
string
```

**Cell write format**

n/a

**Field property read format**

[DateFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.DateFormat)

[TimeFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.TimeFormat)

```ts
{
 dateFormat: DateFormat;
 timeFormat?: TimeFormat;
 includeTime?: boolean;
}
```



**Field property write format**

[DateFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.DateFormat)

[TimeFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.TimeFormat)

```ts
{
 dateFormat: DateFormat;
 timeFormat?: TimeFormat;
 includeTime?: boolean;
```



------

### LastModifiedTime[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#lastmodifiedtime)

• **LastModifiedTime** = `"LastModifiedTime"`

Shows the date and time that a record was most recently modified in any editable field or just in specific editable fields.

**Cell read format**

```
string
```

**Cell write format**

n/a

**Field property read format**

[DateFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.DateFormat)

[TimeFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.TimeFormat)

[CollectType](https://developers.vika.cn/widget/api-reference/enums/interface_modal.CollectType)

```ts
{
 dateFormat: DateFormat;
 timeFormat?: TimeFormat;
 includeTime: boolean;
 // the fields to check the last modified time of: 0 all editable, 1 specified field
 collectType: CollectType;
 // whether to specify the field, array type can specify more than one field, not fill for all
 fieldIdCollection: string[];
}
```



**Field property write format**

[DateFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.DateFormat)

[TimeFormat](https://developers.vika.cn/widget/api-reference/enums/interface_modal.TimeFormat)

[CollectType](https://developers.vika.cn/widget/api-reference/enums/interface_modal.CollectType)

```ts
{
 dateFormat: DateFormat;
 timeFormat?: TimeFormat;
 includeTime?: boolean;
 // the fields to check the last modified time of: 0 all editable, 1 specified field
 collectType?: CollectType;
 // whether to specify the field, array type can specify more than one field, not fill for all
 fieldIdCollection?: string[];
}
```



------

### CreatedBy[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#createdby)

• **CreatedBy** = `"CreatedBy"`

The collaborator who created a record.

**Cell read format**

```
string
```

**Cell write format**

n/a

**Field property read format**

n/a

**Field property write format**

n/a

------

### LastModifiedBy[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#lastmodifiedby)

• **LastModifiedBy** = `"LastModifiedBy"`

Shows the last collaborator who most recently modified any editable field or just in specific editable fields.

**Cell read format**

```
string
```

**Cell write format**

n/a

**Field property read format**

```ts
{
 // the fields to check the last modified collaborator of: 0 all editable, 1 specified field
 collectType?: CollectType;
 // whether to specify the field, array type can specify more than one field, not fill for all
 fieldIdCollection?: string[];
}
```



**Field property write format**

```ts
{
 // the fields to check the last modified collaborator of: 0 all editable, 1 specified field
 collectType?: CollectType;
 // whether to specify the field, array type can specify more than one field, not fill for all
 fieldIdCollection?: string[];
}
```



------

### Cascader[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#cascader)

• **Cascader** = `"Cascader"`

Cascader, select from a set of associated data collections

**Cell read format**

```
string
```

**Cell write format**

```
string
```

**Field property read format**

```ts
{
 showAll: boolean;
 linkedDatasheetId: string;
 linkedViewId: string;
 linkedFields: {
   id: string;
   name: string;
   type: number;
 }[],
 fullLinkedFields: {
   id: string;
   name: string;
   type: number;
 }[];
}
```



**Field property write format**

```ts
{
 showAll: boolean;
 linkedDatasheetId: string;
 linkedViewId: string;
 linkedFields: {
   id: string;
   name: string;
   type: number;
 }[],
 fullLinkedFields: {
   id: string;
   name: string;
   type: number;
 }[];
}
```



------

### WorkDoc[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#workdoc)

• **WorkDoc** = `"WorkDoc"`

A rich text editor.

**Cell read format**

```
string
```

**Cell write format**

```
string
```

**Field property read format**

n/a

**Field property write format**

n/a

------

### Button[](https://developers.vika.cn/widget/api-reference/enums/interface_field_types.FieldType#button)

• **Button** = `"Button"`

Button click trigger automation.

**Cell read format**

n/a

**Cell write format**

n/a

**Field property read format**

n/a

**Field property write format**

n/a







# interface_modal.IRecordQuery

[interface/modal](https://developers.vika.cn/widget/api-reference/modules/interface_modal).IRecordQuery

## Properties[](https://developers.vika.cn/widget/api-reference/interfaces/interface_modal.IRecordQuery#properties)

### ids[](https://developers.vika.cn/widget/api-reference/interfaces/interface_modal.IRecordQuery#ids)

• `Optional` **ids**: `string`[]

Specify which recordId data to query, explicitly pass undefined to return empty data, do not pass this parameter to not filter.

------

### filter[](https://developers.vika.cn/widget/api-reference/interfaces/interface_modal.IRecordQuery#filter)

• `Optional` **filter**: `IOpenFilterConditionGroup`

filter condition
